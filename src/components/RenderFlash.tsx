import React, { useLayoutEffect, useRef } from 'react';

/**
 * RenderFlash - Componente para visualização de renders
 * 
 * Pisca com uma cor aleatória sempre que o componente rerenderiza.
 * Garante que o flash aconteça APENAS UMA VEZ por render cycle.
 * 
 * Como funciona:
 * 1. Usa useLayoutEffect sem dependências para executar a cada render
 * 2. Manipula o DOM diretamente (não useState) para evitar loops infinitos
 * 3. Usa refs para controlar estado e evitar flashes múltiplos simultâneos
 * 4. Aplica cores aleatórias HSL diretamente no overlay DOM element
 * 
 * @example
 * <RenderFlash duration={300} opacity={0.5}>
 *   <MyComponent />
 * </RenderFlash>
 */
interface RenderFlashProps {
  children: React.ReactNode;
  duration?: number; // duração do flash em ms (padrão: 200)
  opacity?: number; // opacidade do flash 0-1 (padrão: 0.3)
  disabled?: boolean; // permite desabilitar o efeito
}

// Algoritmo para gerar cores aleatórias vibrantes
const generateRandomColor = (): string => {
  // Usar HSL para garantir cores vibrantes
  const hue = Math.floor(Math.random() * 360); // 0-359
  const saturation = Math.floor(Math.random() * 30) + 70; // 70-100% (cores vibrantes)
  const lightness = Math.floor(Math.random() * 30) + 40; // 40-70% (não muito escuro nem muito claro)
  
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
};

export const RenderFlash: React.FC<RenderFlashProps> = ({
  children,
  duration = 200,
  opacity = 0.3,
  disabled = false,
}) => {
  const flashRef = useRef<HTMLDivElement>(null);
  const renderCountRef = useRef<number>(0);
  const isFlashingRef = useRef<boolean>(false);
  const currentColorRef = useRef<string>('');

  // Incrementa contador de renders a cada render
  renderCountRef.current += 1;

  useLayoutEffect(() => {
    if (disabled || !flashRef.current) return;

    // Evita flash múltiplo se já está acontecendo
    if (isFlashingRef.current) return;

    // Gera nova cor aleatória
    const newColor = generateRandomColor();
    currentColorRef.current = newColor;
    isFlashingRef.current = true;

    // Aplica o flash diretamente no DOM
    const flashElement = flashRef.current.querySelector('.render-flash-overlay') as HTMLDivElement;
    if (flashElement) {
      flashElement.style.backgroundColor = newColor;
      flashElement.style.opacity = opacity.toString();
      
      // Para o flash após a duração especificada
      const timeout = setTimeout(() => {
        if (flashElement) {
          flashElement.style.opacity = '0';
        }
        isFlashingRef.current = false;
      }, duration);

      return () => {
        clearTimeout(timeout);
        isFlashingRef.current = false;
      };
    }
  }); // Executa a cada render

  if (disabled) {
    return <>{children}</>;
  }

  return (
    <div
      ref={flashRef}
      className="relative"
      style={{
        position: 'relative',
      }}
    >
      {/* Overlay do flash */}
      <div
        className="render-flash-overlay absolute inset-0 pointer-events-none z-10"
        style={{
          opacity: 0,
          transition: `opacity ${duration}ms ease-out`,
          borderRadius: 'inherit',
        }}
      />
      
      {/* Conteúdo */}
      <div className="relative z-0">
        {children}
      </div>

      {/* Debug info (opcional) */}
      {process.env.NODE_ENV === 'development' && (
        <div
          className="absolute top-0 right-0 text-xs bg-black text-white px-1 rounded z-20 pointer-events-none"
          style={{
            fontSize: '10px',
            lineHeight: '12px',
            opacity: 0.3,
            transition: 'opacity 100ms',
          }}
        >
          #{renderCountRef.current}
        </div>
      )}
    </div>
  );
};


