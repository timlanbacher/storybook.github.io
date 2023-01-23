"use strict";
(self["webpackChunktca_shared_ui"] = self["webpackChunktca_shared_ui"] || []).push([[415],{

/***/ "./node_modules/@mdx-js/react/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "MDXContext": () => (/* reexport */ MDXContext),
  "MDXProvider": () => (/* reexport */ MDXProvider),
  "useMDXComponents": () => (/* reexport */ useMDXComponents),
  "withMDXComponents": () => (/* reexport */ withMDXComponents)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
;// CONCATENATED MODULE: ./node_modules/@mdx-js/react/lib/index.js
/**
 * @typedef {import('react').ReactNode} ReactNode
 * @typedef {import('mdx/types').MDXComponents} Components
 *
 * @typedef Props
 *   Configuration.
 * @property {Components} [components]
 *   Mapping of names for JSX components to React components.
 * @property {boolean} [disableParentContext=false]
 *   Turn off outer component context.
 * @property {ReactNode} [children]
 *   Children.
 *
 * @callback MergeComponents
 * @param {Components} currentComponents
 *   Current components from the context.
 * @returns {Components}
 *   Merged components.
 */



/**
 * @type {import('react').Context<Components>}
 * @deprecated
 *   This export is marked as a legacy feature.
 *   That means it’s no longer recommended for use as it might be removed
 *   in a future major release.
 *
 *   Please use `useMDXComponents` to get context based components and
 *   `MDXProvider` to set context based components instead.
 */
const MDXContext = react.createContext({})

/**
 * @param {import('react').ComponentType<any>} Component
 * @deprecated
 *   This export is marked as a legacy feature.
 *   That means it’s no longer recommended for use as it might be removed
 *   in a future major release.
 *
 *   Please use `useMDXComponents` to get context based components instead.
 */
function withMDXComponents(Component) {
  return boundMDXComponent

  /**
   * @param {Record<string, unknown> & {components?: Components}} props
   * @returns {JSX.Element}
   */
  function boundMDXComponent(props) {
    const allComponents = useMDXComponents(props.components)
    return react.createElement(Component, {...props, allComponents})
  }
}

/**
 * Get current components from the MDX Context.
 *
 * @param {Components|MergeComponents} [components]
 *   Additional components to use or a function that takes the current
 *   components and filters/merges/changes them.
 * @returns {Components}
 *   Current components.
 */
function useMDXComponents(components) {
  const contextComponents = react.useContext(MDXContext)
  // Memoize to avoid unnecessary top-level context changes
  return react.useMemo(() => {
    // Custom merge via a function prop
    if (typeof components === 'function') {
      return components(contextComponents)
    }

    return {...contextComponents, ...components}
  }, [contextComponents, components])
}

/** @type {Components} */
const emptyObject = {}

/**
 * Provider for MDX context
 *
 * @param {Props} props
 * @returns {JSX.Element}
 */
function MDXProvider({components, children, disableParentContext}) {
  let allComponents = useMDXComponents(components)

  if (disableParentContext) {
    allComponents = components || emptyObject
  }

  return react.createElement(
    MDXContext.Provider,
    {value: allComponents},
    children
  )
}

;// CONCATENATED MODULE: ./node_modules/@mdx-js/react/index.js



/***/ })

}]);
//# sourceMappingURL=415.acf953ac.iframe.bundle.js.map