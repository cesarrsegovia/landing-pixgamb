"use client"; 

import Image from 'next/image';
import { ShieldCheck, Zap, Clock, Star, Bot, X, Send } from 'lucide-react';

export default function Home() {
  const portalLink = "https://www.gamblor.io/invite?r=Gamblor_BR"; // Enlace principal
  const termsLink = "https://www.gamblor.io/help-center?r=Gamblor_BR"

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">

      {/* ===== 1. Hero Section (Banner de Imagen Clicable) ===== */}
      <section 
        className="
          w-full text-center flex flex-col items-center justify-center px-4 
          bg-no-repeat bg-center relative cursor-pointer 
          bg-hero-sm md:bg-hero-md lg:bg-hero-lg xl:bg-hero-xl 
          
          bg-cover
          aspect-[639/498] 
          md:aspect-[872/450] 
          lg:aspect-[1320/429] 
          xl:aspect-[1966/554]
        "
        onClick={() => window.open(portalLink, "_blank")}
      >
        {/* Vacío: la imagen de fondo lo es todo */}
      </section>

      {/* ===== 2. Hero Content (Texto do PDF em Português) ===== */}
      <section className="w-full text-center flex flex-col items-center py-16 px-4">
        
        {/* H1 do PDF */}
        <h1 className="text-4xl md:text-6xl font-bold max-w-3xl">
          Bônus de Depósito PIX de 150% - Até <span className="text-chart-3">R$15.000</span>
        </h1>
        
        {/* Subhead do PDF */}
        <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl">
          Deposite com PIX e jogue Crash, Slots e apostas ao vivo em futebol em minutos.
        </p>
        
        {/* Primary CTA do PDF */}
        <a 
          href={portalLink}
          target="_blank"
          rel="noopener noreferrer"
          className="
            mt-8 px-10 py-4 text-lg font-bold rounded-lg 
            transform transition-all duration-300 
            bg-card text-foreground border border-chart-3 
            hover:bg-chart-3 hover:text-primary-foreground
          "
        >
          Depositar com PIX
        </a>
        
        {/* Micro-terms do PDF */}
        <div className="mt-6 text-sm text-muted-foreground space-x-4">
          <span>Depósito mín. R$20</span>
          <span>•</span>
          <span>Rollover de 35x no bônus</span>
          <span>•</span>
          <a href={termsLink} target="_blank" rel="noopener noreferrer" className="underline hover:text-chart-3">
            Veja os termos completos
          </a>
        </div>
      </section>

      {/* ===== 3. Trust Row Section (do PDF) ===== */}
      <section className="w-full max-w-5xl mx-auto pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center px-4">
          <div className="flex items-center justify-center space-x-3">
            <Zap size={24} className="text-chart-3" />
            <span className="text-lg">PIX instantâneo</span>
          </div>
          <div className="flex items-center justify-center space-x-3">
            <ShieldCheck size={24} className="text-chart-3" />
            <span className="text-lg">Cadastro rápido</span>
          </div>
          <div className="flex items-center justify-center space-x-3">
            <Clock size={24} className="text-chart-3" />
            <span className="text-lg">Suporte 24/7</span>
          </div>
        </div>
      </section>

      {/* ===== 4. How it works Section ===== */}
      <section className="w-full py-16 mt-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          
          {/* Título com ícone */}
          <div className="flex items-center justify-center space-x-3 mb-12">
            <Image
              src="/img/logo_icon.png"
              alt="Ícone Gamblor"
              width={32}
              height={32}
              className="object-contain"
            />
            <h2 className="text-3xl font-bold">Como funciona</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="flex flex-col items-center p-6 bg-card rounded-lg border border-border transition-all duration-300 hover:border-chart-3 hover:shadow-[inset_0_0_15px_0_var(--color-chart-3)]">
              <div className="flex items-center justify-center w-16 h-16 
                bg-chart-3 text-primary-foreground 
                text-2xl font-bold rounded-full mb-4"
              >
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Escolha PIX no Depósito</h3>
              <p className="text-muted-foreground">Selecione PIX como seu método de pagamento.</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-card rounded-lg border border-border transition-all duration-300 hover:border-chart-3 hover:shadow-[inset_0_0_15px_0_var(--color-chart-3)]">
              <div className="flex items-center justify-center w-16 h-16 bg-chart-3 text-primary-foreground text-2xl font-bold rounded-full mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Deposite R$20+</h3>
              <p className="text-muted-foreground">Confirmação instantânea em BRL a partir de R$20.</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-card rounded-lg border border-border transition-all duration-300 hover:border-chart-3 hover:shadow-[inset_0_0_15px_0_var(--color-chart-3)]">
              <div className="flex items-center justify-center w-16 h-16 bg-chart-3 text-primary-foreground text-2xl font-bold rounded-full mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Bônus aplicado automaticamente</h3>
              <p className="text-muted-foreground">Seu bônus de 150% é adicionado no seu primeiro depósito PIX.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 5. What to play Section ===== */}
      <section className="w-full max-w-5xl mx-auto py-16 px-4 text-center">

        {/* Título com ícone */}
        <div className="flex items-center justify-center space-x-3 mb-12">
          <Image
            src="/img/logo_icon.png"
            alt="Ícone Gamblor"
            width={32}
            height={32}
            className="object-contain"
          />
          <h2 className="text-3xl font-bold">O que jogar</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <a href={portalLink} target="_blank" rel="noopener noreferrer" className="group transform transition-transform hover:scale-105">
            <div className="relative w-full aspect-square rounded-lg overflow-hidden">
              <Image
                src="/img/juego1.png"
                alt="Jogo Crash - Spaceman"
                fill
                className="object-cover"
              />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-2xl font-bold transition-colors group-hover:text-chart-3">Crash</h3>
              <p className="text-muted-foreground">Spaceman</p>
            </div>
          </a>

          <a href={portalLink} target="_blank" rel="noopener noreferrer" className="group transform transition-transform hover:scale-105">
            <div className="relative w-full aspect-square rounded-lg overflow-hidden">
              <Image
                src="/img/juego2.png"
                alt="Jogos de Slot"
                fill
                className="object-cover"
              />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-2xl font-bold transition-colors group-hover:text-chart-3">Slots</h3>
              <p className="text-muted-foreground">Sweet Bonanza, Gates of Olympus & Sugar Rush</p>
            </div>
          </a>

          <a href={portalLink} target="_blank" rel="noopener noreferrer" className="group transform transition-transform hover:scale-105">
            <div className="relative w-full aspect-square rounded-lg overflow-hidden">
              <Image
                src="/img/libertadores.png"
                alt="Apostas em Futebol ao Vivo"
                fill
                className="object-cover"
              />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-2xl font-bold transition-colors group-hover:text-chart-3">Futebol ao Vivo</h3>
              <p className="text-muted-foreground">Aposte no Brasileirão, Libertadores e Europa ao vivo</p>
            </div>
          </a>
          
        </div>
      </section>


      {/* ===== 6. Why Gamblor Section ===== */}
      <section className="w-full py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">

          {/* Título com ícone */}
          <div className="flex items-center justify-center space-x-3 mb-12">
            <Image
              src="/img/logo_icon.png"
              alt="Ícone Gamblor"
              width={32}
              height={32}
              className="object-contain"
            />
            <h2 className="text-3xl font-bold">Por que a Gamblor</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-sm">
            <div className="flex flex-col items-center space-y-2">
              <Star className="text-chart-3" />
              <span>PIX nativo</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Star className="text-chart-3" />
              <span>Mobile-first</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Star className="text-chart-3" />
              <span>Cadastro rápido, sem burocracia</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Star className="text-chart-3" />
              <span>Suporte em português 24/7</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Star className="text-chart-3" />
              <span>Discord do Brasil</span>
            </div>
          </div>
          <p className="mt-12 text-muted-foreground">
            Prefere cripto? Aceitamos SOL, ETH, USDT.
          </p>
        </div>
      </section>

      {/* ===== 7. Footer Section ===== */}
      <footer className="w-full mt-16 border-t border-border">
        
        <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between">
          
          <div className="flex-shrink-0">
            <Image
              src="/img/logogamblor.png"
              alt="Logo Gamblor"
              width={140}
              height={35}
              className="object-contain"
            />
          </div>
          
          <div className="my-4 md:my-0 text-center">
            <p className="text-sm text-muted-foreground">© 2025 Gamblor. Todos os direitos reservados.</p>

            <div className="max-w-4xl mx-auto px-4 text-xs text-muted-foreground mt-4">
              <p className="mb-2">
                18+ Jogue com responsabilidade. Bônus apenas no primeiro depósito PIX. Rollover de 35x no bônus. Depósito mín. R$20.
              </p>
              <p>
                Regras adicionais e elegibilidade se aplicam - 
                <a href={termsLink} target="_blank" rel="noopener noreferrer" className="underline hover:text-chart-3">
                  Termos Completos
                </a>.
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-5">
            <a href="https://discord.gg/gamblorcasino" target="_blank" rel="noopener noreferrer" aria-label="Discord">
              <Bot className="w-5 h-5 text-muted-foreground transition-colors hover:text-foreground" />
            </a>
            <a href="https://x.com/gamblorcasino" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
              <X className="w-5 h-5 text-muted-foreground transition-colors hover:text-foreground" />
            </a>
            <a href="https://t.me/gamblorcasino" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
              <Send className="w-5 h-5 text-muted-foreground transition-colors hover:text-foreground" />
            </a>
          </div>
        </div>
      </footer>

    </main>
  )
}