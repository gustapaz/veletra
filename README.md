# Veletra

**Palavras que dão passagem.**

[Jogar gratuitamente](https://gustapaz.github.io/veletra/)

Arcade de digitação com barcos de papel num panorama de rio. Escreva a palavra visível e pressione **Enter** ou **Enviar** para levar o barco ao porto antes do prazo. Três coleções de dez palavras — Costa, Oficina e Céu — e três ritmos, com recordes locais separados.

## Regras e controles

Você começa com três chances. Palavra correta entrega o barco e chama a próxima. Envio errado perde uma chance e mantém a palavra; envio vazio não custa. Prazo esgotado perde uma chance e troca a palavra. Sem chances: derrota. Chegar ao fim das dez palavras com chances: vitória, mesmo com até duas palavras perdidas por prazo.

| Ritmo | Prazo por palavra |
| --- | --- |
| Livre | Sem relógio |
| Corrente | 9 até 6,75 segundos |
| Maré | 6 até 4,2 segundos |

Digite no campo de texto usando seu teclado físico ou o teclado nativo do celular. Edite normalmente antes de enviar. Caixa e acentos são ignorados. **Escape** pausa enquanto você digita; Escape ou o botão de retorno fecham a pausa/manual. P permanece uma letra normal. Botões e seletores também funcionam por Tab/Enter. Não há arraste ou gamepad.

Coleção/ritmo mudam antes da rodada ou depois de preparar novamente. **Preparar de novo** limpa a tentativa e libera seletores; **Tentar novamente** já começa outra rodada com a mesma configuração. Perda de foco exige retomada explícita, sem avanço escondido do relógio.

Pontos por comprimento normalizado, tempo restante nos ritmos cronometrados e sequência (máximo cinco para o bônus). Concluir sem perder chance dá mais 100 pontos. Não é um teste formal de velocidade/WPM: colagem de texto é aceita e resultados locais podem ser alterados pelo usuário. Não há ranking global.

## Implementação

**Kontra.js 10.0.2 + JavaScript + Canvas 2D + DOM + Vite 8.3.5.** Modelo puro independente, loop fixo de 60 Hz somente durante rodada cronometrada, interrompido em pausa/resultado/menu. Livre desenha por eventos. Sem prometer 60 FPS em qualquer aparelho. Delta do modelo limitado; engine descarta atrasos extremos. DPR limitado a 2.

Canvas ilustra o rio e o barco; palavra, prazo, chances, pontuação e controles também estão em DOM. Movimento reduzido fixa o barco e as ondas, preservando relógio e progresso. Som procedural opcional começa desligado e limita sobreposição a quatro vozes. Sem fontes, imagens, áudio ou APIs remotos.

Node 24:

```sh
npm ci
npm test
npm run build
npm run dev
```

Dev: `http://127.0.0.1:4223/`; `npm run preview` serve o export na porta 4224. Harness de interface: `/tests/browser.html` no servidor dev, usando iframe e somente o save da origem local de teste. Não entra no export. Build publica apenas `dist/`, com caminhos relativos compatíveis com `/veletra/`.

## Privacidade, gratuidade e licença

Recordes por coleção/ritmo e preferências no `localStorage`, validados antes do uso. Save corrompido é descartado; armazenamento indisponível não impede jogar. A tentativa atual não persiste ao recarregar. Sem conta, backend, API de consumo, telemetria, anúncios, compras, cartão, faturamento ou trial.

GitHub Pages de repositório público disponível no GitHub Free ([documentação](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages)); o host mantém seus próprios logs. Sem garantia de gratuidade/disponibilidade permanente ou funcionamento offline.

Código e arte originais MIT; licença Kontra.js preservada em `third-party.txt`. Mecânica genérica de digitação contra prazo; palavras naturais e apresentação próprias, sem copiar ativos ou níveis comerciais. [Design](docs/game-design.md), [assets](docs/assets.md), [validação](docs/validation.md).
