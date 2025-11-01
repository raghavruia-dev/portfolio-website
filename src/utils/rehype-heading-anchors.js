// import { visit } from 'unist-util-visit';

// export function rehypeHeadingAnchors() {
//   return (tree) => {
//     visit(tree, 'element', (node) => {
//       if (['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(node.tagName)) {
//         const id = node.properties.id;
//         if (id) {
//           node.children.push({
//             type: 'element',
//             tagName: 'button',
//             properties: {
//               class: 'heading-anchor',
//               'aria-label': 'Copy link to this section',
//               onclick: `navigator.clipboard.writeText(window.location.href + '#${id}'); this.textContent = '✓'; setTimeout(() => { this.textContent = '🔗'; }, 1000); return false;`
//             },
//             // children: [{
//             //   type: 'text',
//             //   value: '🔗'
//             // }],
//             // replace the children block inside the button with this:
//             children: [
//                 {
//                     type: 'element',
//                     tagName: 'svg',
//                     properties: {
//                         xmlns: 'http://www.w3.org/2000/svg',
//                         viewBox: '0 0 24 24',
//                         fill: 'none',
//                         stroke: 'currentColor',
//                         'stroke-width': 2,
//                         class: 'h-4 w-4 align-[-2px]'
//                     },
//                     children: [
//                         { type: 'element', tagName: 'path', properties: { d: 'M10 13a5 5 0 0 1 0-7l1.5-1.5a5 5 0 0 1 7 7L17 13' }, children: [] },
//                         { type: 'element', tagName: 'path', properties: { d: 'M14 11a5 5 0 0 1 0 7L12.5 19.5a5 5 0 1 1-7-7L7 11' }, children: [] }
//                     ]
//                 }   
//             ]
//           });
//         }
//       }
//     });
//   };
// }

// import { visit } from 'unist-util-visit';

// export function rehypeHeadingAnchors() {
//   return (tree) => {
//     visit(tree, 'element', (node) => {
//       if (['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(node.tagName)) {
//         const id = node.properties.id;
//         if (id) {
//           node.children.push({
//             type: 'element',
//             tagName: 'button',
//             properties: {
//               class: 'heading-anchor',
//               'aria-label': 'Copy link to this section',
//               onclick: `
//                 navigator.clipboard.writeText(window.location.origin + window.location.pathname + '#${id}');
//                 const icon = this.querySelector('svg');
//                 const original = icon.outerHTML;
//                 this.innerHTML = '✓';
//                 setTimeout(() => { this.innerHTML = original; }, 1000);
//                 return false;
//               `
//             },
//             // Use the actual PiLinkSimpleBold SVG path
//             children: [
//               {
//                 type: 'element',
//                 tagName: 'svg',
//                 properties: {
//                   xmlns: 'http://www.w3.org/2000/svg',
//                   viewBox: '0 0 256 256',
//                   fill: 'currentColor',
//                   class: 'h-4 w-4 align-[-2px]'
//                 },
//                 children: [
//                   {
//                     type: 'element',
//                     tagName: 'path',
//                     properties: {
//                       d: 'M122.3 133.7a8.1 8.1 0 0 1 0 11.4l-28.3 28.3a32 32 0 0 1-45.3-45.3l28.3-28.3a8.1 8.1 0 0 1 11.4 11.4L60.1 139a16 16 0 1 0 22.6 22.6l28.3-28.3a8.1 8.1 0 0 1 11.3.4Zm85.3-85.4a32.1 32.1 0 0 0-45.3 0l-28.3 28.3a8.1 8.1 0 0 0 11.4 11.4l28.3-28.3a16 16 0 1 1 22.6 22.6l-28.3 28.3a8.1 8.1 0 0 0 11.4 11.4l28.3-28.3a32.1 32.1 0 0 0-.1-45.4Zm-37.1 58.5a8.1 8.1 0 0 0-11.4 0L113.8 152a8.1 8.1 0 1 0 11.4 11.4l45.3-45.3a8.1 8.1 0 0 0 0-11.4Z'
//                     },
//                     children: []
//                   }
//                 ]
//               }
//             ]
//           });
//         }
//       }
//     });
//   };
// }

// import { visit } from 'unist-util-visit';

// export function rehypeHeadingAnchors() {
//   return (tree) => {
//     visit(tree, 'element', (node) => {
//       if (['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(node.tagName)) {
//         const id = node.properties.id;
//         if (id) {
//           node.children.push({
//             type: 'element',
//             tagName: 'button',
//             properties: {
//               class: 'heading-anchor',
//               'aria-label': 'Copy link to this section',
//               onclick: `
//                 navigator.clipboard.writeText(window.location.origin + window.location.pathname + '#${id}');
//                 const icon = this.querySelector('svg');
//                 const original = icon.outerHTML;
//                 this.innerHTML = '✓';
//                 setTimeout(() => { this.innerHTML = original; }, 1000);
//                 return false;
//               `,
//             },
//             children: [
//               {
//                 type: 'element',
//                 tagName: 'svg',
//                 properties: {
//                   xmlns: 'http://www.w3.org/2000/svg',
//                   fill: 'none',
//                   viewBox: '0 0 24 24',
//                   stroke: 'currentColor',
//                   'stroke-width': 2,
//                   class: 'h-4 w-4 align-[-2px]'
//                 },
//                 children: [
//                   {
//                     type: 'element',
//                     tagName: 'path',
//                     properties: {
//                       'stroke-linecap': 'round',
//                       'stroke-linejoin': 'round',
//                       d: 'M13.828 10.172a4 4 0 0 1 0 5.656l-1.414 1.414a4 4 0 0 1-5.656-5.656l1.086-1.086m6.972-1.086a4 4 0 0 1 0 5.656l-1.086 1.086'
//                     },
//                     children: []
//                   }
//                 ]
//               }
//             ]
//           });
//         }
//       }
//     });
//   };
// }

import { visit } from 'unist-util-visit';

export function rehypeHeadingAnchors() {
  return (tree) => {
    visit(tree, 'element', (node) => {
      if (['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(node.tagName)) {
        const id = node.properties.id;
        if (id) {
          node.children.push({
            type: 'element',
            tagName: 'button',
            properties: {
              class: 'heading-anchor',
              'aria-label': 'Copy link to this section',
              onclick: `
                navigator.clipboard.writeText(window.location.origin + window.location.pathname + '#${id}');
                this.textContent = '✓';
                setTimeout(() => { this.textContent = '🔗'; }, 1000);
                return false;
              `,
            },
            children: [
              {
                type: 'text',
                value: '🔗',
              },
            ],
          });
        }
      }
    });
  };
}
