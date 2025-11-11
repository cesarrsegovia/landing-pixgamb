"use client";

import Image from "next/image";
import {
  ShieldCheck,
  Clock,
  Star,
  Bot,
  X,
  Send,
  CreditCard,
  MessageCircle,
  Wallet,
  Lock,
} from "lucide-react";

export default function Home() {
  const portalLink = "https://www.gamblor.io/invite?r=Gamblor_BR";
  const termsLink = "https://www.gamblor.io/help-center?r=Gamblor_BR";

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      
      {/* ===== Micro-banner ===== */}
      <section className="w-full bg-brand py-2 text-center text-sm font-medium text-primary-foreground flex items-center justify-center gap-2 px-4">
        <Image
          src="/img/flag_br.png"
          alt="Bandeira do Brasil"
          width={20}
          height={14}
          className="object-contain"
        />
        <span>
          Feito pro Brasil. Estamos finalizando a versão completa em português, mas
          você já pode jogar hoje.
        </span>
      </section>

      {/* ===== Hero Section ===== */}
      <section
        className="w-full text-center flex flex-col items-center justify-center px-4 bg-no-repeat bg-center relative cursor-pointer bg-hero-sm md:bg-hero-md lg:bg-hero-lg xl:bg-hero-xl bg-cover aspect-[639/498] md:aspect-[872/450] lg:aspect-[1320/429] xl:aspect-[1966/554]"
        onClick={() => window.open(portalLink, "_blank")}
      ></section>

      {/* ===== Hero Content ===== */}
      <section className="w-full text-center flex flex-col items-center pt-16 pb-12 px-4">
        
        <h1 className="text-4xl md:text-6xl font-bold max-w-3xl">
          Jogue em português. Deposite com PIX. Saque em cripto.
        </h1>
        <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl">
          Bônus de 250% no primeiro depósito, até R$ 25.000. Pagamentos rápidos e
          suporte em português.
        </p>

        <div className="mt-8 flex flex-col md:flex-row items-center gap-4">
          <a
            href={portalLink}
            target="_blank"
            rel="noopener noreferrer"
            className="deposit-button transform transition-all duration-200 active:scale-95"
          >
            <span>Jogar agora</span>
          </a>
          <a
            href={portalLink} 
            target="_blank"
            rel="noopener noreferrer"
            className="deposit-button transform transition-all duration-200 active:scale-95"
          >
            <span>Depositar com PIX</span>
          </a>
        </div>
        
        <p className="mt-6 text-sm text-muted-foreground">
          Depósitos via PIX em segundos. Saques em cripto. Sem enrolação.
        </p>

        <div className="w-full max-w-3xl mt-8 text-center text-muted-foreground text-sm">
          <p>
            ⚙️ Transparência: estamos terminando a versão completa em português.
            Todos os jogos e bônus já funcionam no Brasil.
          </p>
        </div>

      </section>

      {/* ===== Trust Row Section ===== */}
      <section className="w-full max-w-5xl mx-auto py-16 px-4">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center items-start">
          
          <div className="flex flex-col items-center justify-center space-y-2">
            <div className="h-6 w-6 flex items-center justify-center">
              <Image
                src="/img/flag_br.png"
                alt="Bandeira do Brasil"
                width={24}
                height={17}
                className="object-contain"
              />
            </div>
            <span className="text-lg">PIX disponível</span>
          </div>
          
          <div className="flex flex-col items-center justify-center space-y-2">
            <Wallet size={24} className="text-chart-3" />
            <span className="text-lg">Pagamentos em cripto</span>
          </div>
          
          <div className="flex flex-col items-center justify-center space-y-2">
            <Clock size={24} className="text-chart-3" />
            <span className="text-lg">Pagamentos rápidos</span>
          </div>

          <div className="flex flex-col items-center justify-center space-y-2">
            <MessageCircle size={24} className="text-chart-3" />
            <span className="text-lg">Atendimento em português</span>
          </div>

          <div className="flex flex-col items-center justify-center space-y-2">
            <Lock size={24} className="text-chart-3" />
            <span className="text-lg">Ambiente seguro</span>
          </div>

        </div>
      </section>

      {/* ===== Bonus Module ===== */}
      <section className="w-full py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          
          {/* Título del modulo de Bono */}
          <div className="flex items-center justify-center space-x-3 mb-8">
            <Image
              src="/img/logo_icon.png"
              alt="Ícone Gamblor"
              width={32}
              height={32}
              className="object-contain"
            />
            <h2 className="text-3xl font-bold">Bônus de 250% até R$ 25.000</h2>
          </div>

          <div className="inline-block text-left space-y-4 text-xl text-muted-foreground max-w-md">
            
            <div className="flex items-center gap-3">
              <Star size={18} className="text-brand shrink-0" />
              <span>Depósito mínimo R$ 20</span>
            </div>

            <div className="flex items-center gap-3">
              <Star size={18} className="text-brand shrink-0" />
              <span>Rollover 40x no bônus</span>
            </div>

            <div className="flex items-center gap-3">
              <Star size={18} className="text-brand shrink-0" />
              <a
                href={termsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-brand"
              >
                Termos completos aqui
              </a>
            </div>

          </div>

        </div>
      </section>


      {/* ===== What to play Section ===== */}
      <section className="w-full max-w-5xl mx-auto py-16 px-4 text-center">
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

        {/* Grid de Juegos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <a
            href={portalLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group transform transition-transform hover:scale-105"
          >
            <div className="relative w-full aspect-square rounded-lg overflow-hidden">
              <Image
                src="/img/juego1.png"
                alt="Jogo Crash - Pig-A-Boom"
                fill
                className="object-cover"
              />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-2xl font-bold transition-colors group-hover:text-chart-3">
                Crash
              </h3>
              <p className="text-muted-foreground">Pig-A-Boom</p>
            </div>
          </a>

          <a
            href={portalLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group transform transition-transform hover:scale-105"
          >
            <div className="relative w-full aspect-square rounded-lg overflow-hidden">
              <Image
                src="/img/juego2.png"
                alt="Slots — Sweet Bonanza, Gates of Olympus, Sugar Rush"
                fill
                className="object-cover"
              />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-2xl font-bold transition-colors group-hover:text-chart-3">
                Slots
              </h3>
              <p className="text-muted-foreground">
                Sweet Bonanza, Gates of Olympus & Sugar Rush
              </p>
            </div>
          </a>

          <a
            href={portalLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group transform transition-transform hover:scale-105"
          >
            <div className="relative w-full aspect-square rounded-lg overflow-hidden">
              <Image
                src="/img/libertadores.png"
                alt="Apostas ao vivo — Brasileirão, Libertadores e Europa"
                fill
                className="object-cover"
              />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-2xl font-bold transition-colors group-hover:text-chart-3">
                Futebol ao Vivo
              </h3>
              <p className="text-muted-foreground">
                Aposte no Brasileirão, Libertadores e Europa ao vivo
              </p>
            </div>
          </a>
        </div>

        {/* --- CTA "Explorar jogos" --- */}
        <div className="mt-12"> 
          <a
            href={portalLink} // Enlazado al portal principal
            target="_blank"
            rel="noopener noreferrer"
            className="deposit-button transform transition-all duration-200 active:scale-95"
          >
            <span>Explorar jogos</span>
          </a>
        </div>

      </section>

      {/* ===== Prova Social ===== */}
      <section className="w-full py-16">
        <div className="max-w-3xl mx-auto px-4 flex flex-col items-center gap-8">
          
          {/* Tarjeta de Testimonio */}
          <blockquote className="w-full p-6 bg-card rounded-lg border border-border text-center">
            <p className="text-xl italic text-foreground">
              “Depositei com PIX e o bônus caiu na hora. Suporte em português de verdade.”
            </p>
            <footer className="mt-4 text-brand">— João, São Paulo</footer>
          </blockquote>
          
          {/* Badge de Soporte */}
          <div className="flex items-center gap-3 text-lg text-muted-foreground">
            <MessageCircle size={20} className="text-chart-3" />
            <span>Atendimento em português 24 horas</span>
          </div>

        </div>
      </section>


      {/* ===== Why Gamblor Section  ===== */}
      <section className="w-full py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
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

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-sm mb-16">
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

          <p className="text-base text-muted-foreground mb-6">
            Prefere cripto? Aceitamos SOL, ETH, USDT.
          </p>

          {/* Logos Crypto */}
          <div className="flex justify-center items-center gap-6">
            <Image
              src="/img/solana.png"
              alt="Solana Logo"
              width={60}
              height={60}
              className="object-contain"
            />
            <Image
              src="/img/eth.png"
              alt="Ethereum Logo"
              width={60}
              height={60}
              className="object-contain"
            />
            <Image
              src="/img/usdt.png"
              alt="USDT Logo"
              width={60}
              height={60}
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* ===== FAQ Section ===== */}
      <section className="w-full py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          {/* Título com ícone */}
          <div className="flex items-center justify-center space-x-3 mb-12">
            <Image
              src="/img/logo_icon.png"
              alt="Ícone Gamblor"
              width={32}
              height={32}
              className="object-contain"
            />
            <h2 className="text-3xl font-bold">FAQ</h2>
          </div>

          {/* Contenido del FAQ */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-brand mb-1">
                Preciso de código?
              </h3>
              <p className="text-muted-foreground">
                Não. Basta optar no depósito para ativar o bônus de 250%.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-brand mb-1">
                Qual o mínimo?
              </h3>
              <p className="text-muted-foreground">
                R$20 por PIX; aposta mínima R$0,50.
              </p>
            </div>
          </div>
        </div>
      </section>

      
      <section className="w-full py-12 px-4 text-center">
        <div className="max-w-3xl mx-auto flex items-start justify-center gap-3">
          <Image
            src="/img/flag_br.png"
            alt="Bandeira do Brasil"
            width={30}
            height={21}
            className="object-contain shrink-0 mt-1" 
          />
          <p className="text-lg text-muted-foreground text-center">
            O Gamblor já está ativo no Brasil. A versão completa em português
            chega em breve. Jogue agora com PIX e suporte em português.
          </p>
        </div>
      </section>


      {/* ===== footer Section ===== */}
      <footer className="w-full mt-16 border-t border-border">
        <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between">
          <div className="shrink-0">
            <a
              href="https://www.gamblor.io/invite?r=Gamblor_BR"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Gamblor Casino"
            >
              <Image
                src="/img/logogamblor.png"
                alt="Logo Gamblor"
                width={140}
                height={35}
                className="object-contain"
              />
            </a>
          </div>

          <div className="my-4 md:my-0 text-center">
            <p className="text-sm text-muted-foreground">
              © 2025 Gamblor. Todos os direitos reservados.
            </p>

            <div className="max-w-4xl mx-auto px-4 text-xs text-muted-foreground mt-4">
              <p className="mb-2">
                18+ Jogue com responsabilidade. Bônus apenas no primeiro
                depósito via PIX. Rollover de 40× no bônus. Depósito mín. R$20.
              </p>
              <p>
                Regras adicionais e elegibilidade se aplicam -
                <a
                  href={termsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-chart-3"
                >
                  Termos Completos
                </a>
                .
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-5">
            <a
              href="https://discord.gg/gamblorcasino"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Discord"
            >
              <Bot className="w-5 h-5 text-muted-foreground transition-colors hover:text-foreground" />
            </a>
            <a
              href="https://x.com/gamblorcasino"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
            >
              <X className="w-5 h-5 text-muted-foreground transition-colors hover:text-foreground" />
            </a>
            {/* <a href="https://t.me/gamblorcasino" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
              <Send className="w-5 h-5 text-muted-foreground transition-colors hover:text-foreground" />
            </a> */}
          </div>
        </div>
      </footer>
    </main>
  );
}