# Validação — Veletra

## Modelo e interface

- 12 testes Node aprovados: palavras/modos, normalização de acentos/caixa, estados pronto/pausado/terminal, vazio sem custo, erro com perda única de chance, acerto/seqüência/pontuação, delta inválido/limitado, prazo com passos de 1/60 s, derrota por três erros/três prazos, vitória com oito acertos e dois prazos perdidos, nove configurações completas, saves e recordes isolados.
- Harness de navegador: 22 verificações aprovadas. Save corrompido, foco real do input, vazio/erro, Escape congelando relógio nativo, retomada com foco/relógio, reset sem loop antigo, blur exigindo retorno, nove travessias completas via controles, prazo real do Kontra expirando um barco após cerca de seis segundos, derrota e bloqueio de input, evento terminal sem duplicar recorde, preferências/records e replay.
- Harness preenche campo e dispara eventos/controles DOM normais, sem escrever estado interno da partida; não é prova de velocidade humana. Blur disparado por Event, sem alegar troca física de aba. Iframe/testes não entram no export.
- Export em viewport 390 × 844: iniciado no desktop e redimensionado durante Livre, mantendo input/canvas corretos. Oficina inteira concluída por teclas sequenciais e Enter, incluindo TRACO para a palavra traço: dez entregues, três chances, 1.050 pontos. Documento útil 375 px e scrollWidth 375 px, Canvas 347 × 210 px, input de 49 px. Override temporário restaurado. Evidência `mobile-win.png`.
- Canvas ilustrado separado de palavra/prazo/controles em DOM. Movimento reduzido mantém a regra de prazo; sem avaliação auditiva humana ou medição de FPS. Loop fixo Kontra 60 Hz é alvo de simulação, sem garantir 60 FPS físico. Livre desenha por eventos; pausa/resultado/menu interrompem o loop.

## Segurança e gratuidade

Build e `npm audit` aprovados sem vulnerabilidades informadas em 02/11/2026. Export só HTML, JS/CSS, favicon e licença; sem mapas de código, fontes, testes, `.git`, ambiente, configuração local ou dados pessoais. Arte/som procedurais e dependência empacotada, sem CDN, imagens, fontes ou APIs de consumo.

Sem conta, backend, telemetria, anúncios, compras, cartão, faturamento ou trial. GitHub Pages de repositório público disponível no GitHub Free: https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages.

## Publicação verificada em 02/11/2026

- Implementação `0dd4fe4b93908ee31583b3b01229144676e97206`; CI `41555413674` concluiu testes, auditoria, build e deploy com sucesso.
- Três travessias completas na URL pública usando teclas sequenciais e Enter: Costa/Corrente, 1.354 pontos; Céu/Livre, 1.090; Oficina/Maré, 1.282. Dez entregues e três chances nos três resultados. Corrente com animação normal e pausa/retomada por Escape; Maré com movimento reduzido mantendo o prazo. Caixa/acentos normalizados conferidos. Evidências `public-corrente-win.png`, `public-livre-win.png`, `public-mare-win.png` e `public-gameplay.png`.
- Outra rodada pública Oficina/Maré encerrou por três prazos realmente esgotados no loop do Kontra, zero entregues e zero pontos. Outra encerrou por três envios incorretos, sem perda por prazo. Ambas desabilitaram input e ofereceram replay. Evidências `public-timeout-loss.png` e `public-wrong-loss.png`.
- Manual reabrível, som/mute, preparar novamente e preferências conferidos. Após reload, a tentativa voltou a pronta e Oficina/Maré manteve três travessias/uma vitória/recorde 1.282. Perder não apagou o melhor resultado nem duplicou registro.
- Sequências conhecidas executadas por automação não medem habilidade humana ou WPM. Os pontos acima são evidência de regras/interface, não benchmark de digitação.
- Cinco arquivos públicos idênticos byte a byte ao build: HTML, favicon, licença, JS e CSS; 28.923 bytes totais. JavaScript principal ~5,9 kB gzip. Sem garantia de FPS físico.
- Gitleaks 8.30.1 com configuração externa confiável sem achados no staged, histórico, export e clone remoto novo. Sem supressões locais. Secret scanning, push protection e alertas/atualizações de dependências gratuitos habilitados.
- API GitHub confirmou somente `gustapaz` como contribuidor. Autor e committer `Gustavo Paz <96732649+gustapaz@users.noreply.github.com>`, sem coautor adicional. Licença Kontra preservada.
- Mensagens de extensão do navegador separadas dos erros do jogo; nenhuma falha de gameplay ou violação CSP identificada nas partidas públicas. Aba e dois servidores próprios de teste encerrados; override de viewport restaurado.

## Limites

Sem celular físico, teclado virtual real/IME de aparelho, Safari, gamepad, auditoria integral de leitor de tela ou análise auditiva humana. Viewport/teclas de automação não comprovam toque físico ou desempenho humano. Colagem e edição do save são possíveis; recordes locais não são competição confiável nem teste formal de WPM. Sem garantia offline, disponibilidade/gratuidade permanente, FPS universal ou ausência absoluta de vulnerabilidades. Tentativa atual não persiste ao recarregar. Navegação via cache de histórico tem tratamento de retorno pausado, sem prova manual de BFCache entre todos navegadores.
