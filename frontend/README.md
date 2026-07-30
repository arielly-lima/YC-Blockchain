# Ecoa — frontend

Protótipo navegável da experiência infantil e da área do responsável para a demonstração do hackathon.

## Executar localmente

```bash
npm install
npm run dev
```

O Vite mostrará o endereço local no terminal.

## Gerar versão de produção

```bash
npm run build
npm run preview
```

O build é criado em `dist/` e usa caminhos relativos, podendo ser publicado em uma
subpasta.

## Navegação da demonstração

- Escolha um perfil e entre com a conta fictícia já preenchida.
- Criança: Lia, PIN `1234`.
- Responsável: `renata@demo.ecoa`, senha `demo123`.
- Cada perfil visualiza somente seu próprio fluxo.
- Use os botões “Anterior” e “Próxima tela”.
- Clique nas etapas laterais para acessar uma tela do perfil diretamente.
- As setas esquerda e direita do teclado também mudam de tela.
- A gravação usa o microfone do navegador quando autorizado e possui fallback simulado.
- Consentimentos, intenção e aprovação da amostra possuem estados interativos.

## Fluxo principal

1. Entre como Lia e escolha uma aventura.
2. Selecione a resposta visual e grave a frase proposta.
3. Ouça a gravação e conclua a missão.
4. Entre como Renata.
5. Revise consentimentos e confirme a intenção da amostra.

## Estado técnico

| Componente | Estado |
| --- | --- |
| interface e navegação | funcional |
| captura e reprodução do microfone | real |
| estados de consentimento | interativos |
| reconhecimento do ASR | simulado |
| fine-tuning | simulado |
| Psyche/Solana | simulada |

> [!WARNING]
> O código ainda contém telas experimentais do antigo fluxo profissional. Elas não representam as personas atuais e serão removidas ou refatoradas antes da versão alpha.
