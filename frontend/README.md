# Ecoa — frontend

Protótipo navegável das 12 telas principais da demonstração do hackathon.

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
- Profissional: `rafael@demo.ecoa`, senha `demo123`.
- Cada perfil visualiza somente seu próprio fluxo.
- Use os botões “Anterior” e “Próxima tela”.
- Clique nas etapas laterais para acessar uma tela do perfil diretamente.
- As setas esquerda e direita do teclado também mudam de tela.
- A gravação usa o microfone do navegador quando autorizado e possui fallback simulado.
- Consentimentos, intenção e aprovação da amostra possuem estados interativos.

## Fluxo profissional de missões

1. Entre com o perfil profissional.
2. Clique em **Criar missão**.
3. Preencha contexto, pergunta, pista, alternativas, frase e recompensa.
4. Clique em **Salvar e testar como criança**.
5. Execute a seleção visual, a gravação e o feedback infantil.
6. Volte ao painel e clique em **Atribuir**.

Missões criadas e atribuições ficam salvas no `localStorage` do navegador. Ao entrar
novamente como Lia, as atividades atribuídas aparecem em **Aventuras**.
