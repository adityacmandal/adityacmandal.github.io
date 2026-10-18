# Ananya Singha Roy — Fall 2027 Academic Portfolio

Responsive academic portfolio for PhD applications in the United States, focused on scientific machine learning, inverse problems, and computational science.

Publication target: https://adityacmandal.github.io/ananya-academic-site/

## Source

- `index.html`: research, projects, education, and Fall 2027 doctoral interests.
- `styles.css`: responsive layout, keyboard focus, reduced motion, and print styles.
- `script.js`: accessible mobile navigation and footer year.
- `assets/`: original schematic flow illustration and site branding.
- `.nojekyll`: supports serving this folder as a standalone GitHub Pages site.
- `sitemap.xml`: canonical page URL.

There is no dependency installation or framework build. All published paths are relative, so the website also works in a subdirectory.

## Publishing

The intended deployment is the `ananya-academic-site/` folder on the `main` branch of `adityacmandal/adityacmandal.github.io`. Copy the site files into that folder, keeping the existing repository files intact. The existing GitHub Pages build publishes the addition.

For a separate GitHub Pages repository, copy the files into its root, enable Pages for the publishing branch, and update the canonical URL and sitemap to match the new address.

## Local preview

```bash
python3 -m http.server 8000
```

Visit http://localhost:8000. The site also opens directly from `index.html`.

## Content maintenance

Academic details come from the supplied website. The manuscript remains **in preparation**. Experimental percentages from the original draft are omitted because that draft identified them as needing verification. The flow graphic is labeled as a schematic and is not experimental data.

No verified contact address, profile links, or CV were provided with the source. Those links are omitted. To add them, use Ananya's actual details and a supplied CV PDF; do not reuse the hosting account owner's personal profiles as Ananya's.

Site template code is MIT licensed. Personal and research content remains the property of its respective owners.
