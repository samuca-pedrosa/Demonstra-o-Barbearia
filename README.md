# Nobre Barber Studio

Site demonstrativo (fictício) de barbearia premium. HTML, CSS e JavaScript puros: sem build, sem dependências, sem backend.

> Negócio, equipe, preços e endereço são fictícios. Agendamento = **solicitação por WhatsApp**, sujeita à confirmação da equipe.

## Estrutura
```
index.html        página e seções
css/styles.css    identidade visual (variáveis em :root)
js/config.js      TODOS os dados editáveis
js/app.js         lógica (agendamento, galeria, menu)
assets/images/    fotos reais, quando houver
```

## Rodar localmente
Abra `index.html` no navegador, ou rode `python3 -m http.server 8000` e acesse http://localhost:8000.

## Publicar no GitHub Pages
1. Crie um repositório no GitHub e envie estes arquivos (o `index.html` deve ficar na raiz).
2. Vá em **Settings → Pages**.
3. Em **Build and deployment**, escolha **Deploy from a branch**, branch `main`, pasta `/ (root)`, e salve.
4. Em 1–2 minutos o link será `https://SEU-USUARIO.github.io/NOME-DO-REPOSITORIO/`.

## Personalizar para um cliente real
Edite `js/config.js`:
- `name`, `whatsapp` (só números, ex.: `5584999999999`), `instagram`, `address`, `mapsUrl`
- `hours`, `slots` (horários), `services` (nome, descrição, preço, minutos), `team`, `gallery`
- Fotos: salve em `assets/images/` e informe o caminho em `images`, `team[].photo` e `gallery[].src`
- Cores: variáveis no início de `css/styles.css`
- Título, descrição e SEO: `<head>` do `index.html`

Enquanto `whatsapp` estiver vazio, o site funciona em modo demonstrativo e não abre conversa alguma.
Remova os avisos de "demonstrativo/fictício" do `index.html` ao entregar para um cliente real.

## Ainda depende de informações reais
WhatsApp, Instagram, endereço e mapa, fotos, preços, equipe e horários.
