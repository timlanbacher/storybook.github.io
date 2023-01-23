"use strict";
(self["webpackChunktca_shared_ui"] = self["webpackChunktca_shared_ui"] || []).push([[435],{

/***/ "./node_modules/@angular/animations/fesm2020/animations.mjs":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LC": () => (/* binding */ AnimationFactory),
/* harmony export */   "SB": () => (/* binding */ state),
/* harmony export */   "X$": () => (/* binding */ trigger),
/* harmony export */   "ZE": () => (/* binding */ AnimationGroupPlayer),
/* harmony export */   "ZN": () => (/* binding */ NoopAnimationPlayer),
/* harmony export */   "_j": () => (/* binding */ AnimationBuilder),
/* harmony export */   "eR": () => (/* binding */ transition),
/* harmony export */   "jt": () => (/* binding */ animate),
/* harmony export */   "k1": () => (/* binding */ ɵPRE_STYLE),
/* harmony export */   "l3": () => (/* binding */ AUTO_STYLE),
/* harmony export */   "oB": () => (/* binding */ style),
/* harmony export */   "vP": () => (/* binding */ sequence)
/* harmony export */ });
/* unused harmony exports animateChild, animation, group, keyframes, query, stagger, useAnimation */
/**
 * @license Angular v13.3.10
 * (c) 2010-2022 Google LLC. https://angular.io/
 * License: MIT
 */

/**
 * An injectable service that produces an animation sequence programmatically within an
 * Angular component or directive.
 * Provided by the `BrowserAnimationsModule` or `NoopAnimationsModule`.
 *
 * @usageNotes
 *
 * To use this service, add it to your component or directive as a dependency.
 * The service is instantiated along with your component.
 *
 * Apps do not typically need to create their own animation players, but if you
 * do need to, follow these steps:
 *
 * 1. Use the <code>[AnimationBuilder.build](api/animations/AnimationBuilder#build)()</code> method
 * to create a programmatic animation. The method returns an `AnimationFactory` instance.
 *
 * 2. Use the factory object to create an `AnimationPlayer` and attach it to a DOM element.
 *
 * 3. Use the player object to control the animation programmatically.
 *
 * For example:
 *
 * ```ts
 * // import the service from BrowserAnimationsModule
 * import {AnimationBuilder} from '@angular/animations';
 * // require the service as a dependency
 * class MyCmp {
 *   constructor(private _builder: AnimationBuilder) {}
 *
 *   makeAnimation(element: any) {
 *     // first define a reusable animation
 *     const myAnimation = this._builder.build([
 *       style({ width: 0 }),
 *       animate(1000, style({ width: '100px' }))
 *     ]);
 *
 *     // use the returned factory object to create a player
 *     const player = myAnimation.create(element);
 *
 *     player.play();
 *   }
 * }
 * ```
 *
 * @publicApi
 */
class AnimationBuilder {
}
/**
 * A factory object returned from the
 * <code>[AnimationBuilder.build](api/animations/AnimationBuilder#build)()</code>
 * method.
 *
 * @publicApi
 */
class AnimationFactory {
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Specifies automatic styling.
 *
 * @publicApi
 */
const AUTO_STYLE = '*';
/**
 * Creates a named animation trigger, containing a  list of [`state()`](api/animations/state)
 * and `transition()` entries to be evaluated when the expression
 * bound to the trigger changes.
 *
 * @param name An identifying string.
 * @param definitions  An animation definition object, containing an array of
 * [`state()`](api/animations/state) and `transition()` declarations.
 *
 * @return An object that encapsulates the trigger data.
 *
 * @usageNotes
 * Define an animation trigger in the `animations` section of `@Component` metadata.
 * In the template, reference the trigger by name and bind it to a trigger expression that
 * evaluates to a defined animation state, using the following format:
 *
 * `[@triggerName]="expression"`
 *
 * Animation trigger bindings convert all values to strings, and then match the
 * previous and current values against any linked transitions.
 * Booleans can be specified as `1` or `true` and `0` or `false`.
 *
 * ### Usage Example
 *
 * The following example creates an animation trigger reference based on the provided
 * name value.
 * The provided animation value is expected to be an array consisting of state and
 * transition declarations.
 *
 * ```typescript
 * @Component({
 *   selector: "my-component",
 *   templateUrl: "my-component-tpl.html",
 *   animations: [
 *     trigger("myAnimationTrigger", [
 *       state(...),
 *       state(...),
 *       transition(...),
 *       transition(...)
 *     ])
 *   ]
 * })
 * class MyComponent {
 *   myStatusExp = "something";
 * }
 * ```
 *
 * The template associated with this component makes use of the defined trigger
 * by binding to an element within its template code.
 *
 * ```html
 * <!-- somewhere inside of my-component-tpl.html -->
 * <div [@myAnimationTrigger]="myStatusExp">...</div>
 * ```
 *
 * ### Using an inline function
 * The `transition` animation method also supports reading an inline function which can decide
 * if its associated animation should be run.
 *
 * ```typescript
 * // this method is run each time the `myAnimationTrigger` trigger value changes.
 * function myInlineMatcherFn(fromState: string, toState: string, element: any, params: {[key:
 string]: any}): boolean {
 *   // notice that `element` and `params` are also available here
 *   return toState == 'yes-please-animate';
 * }
 *
 * @Component({
 *   selector: 'my-component',
 *   templateUrl: 'my-component-tpl.html',
 *   animations: [
 *     trigger('myAnimationTrigger', [
 *       transition(myInlineMatcherFn, [
 *         // the animation sequence code
 *       ]),
 *     ])
 *   ]
 * })
 * class MyComponent {
 *   myStatusExp = "yes-please-animate";
 * }
 * ```
 *
 * ### Disabling Animations
 * When true, the special animation control binding `@.disabled` binding prevents
 * all animations from rendering.
 * Place the  `@.disabled` binding on an element to disable
 * animations on the element itself, as well as any inner animation triggers
 * within the element.
 *
 * The following example shows how to use this feature:
 *
 * ```typescript
 * @Component({
 *   selector: 'my-component',
 *   template: `
 *     <div [@.disabled]="isDisabled">
 *       <div [@childAnimation]="exp"></div>
 *     </div>
 *   `,
 *   animations: [
 *     trigger("childAnimation", [
 *       // ...
 *     ])
 *   ]
 * })
 * class MyComponent {
 *   isDisabled = true;
 *   exp = '...';
 * }
 * ```
 *
 * When `@.disabled` is true, it prevents the `@childAnimation` trigger from animating,
 * along with any inner animations.
 *
 * ### Disable animations application-wide
 * When an area of the template is set to have animations disabled,
 * **all** inner components have their animations disabled as well.
 * This means that you can disable all animations for an app
 * by placing a host binding set on `@.disabled` on the topmost Angular component.
 *
 * ```typescript
 * import {Component, HostBinding} from '@angular/core';
 *
 * @Component({
 *   selector: 'app-component',
 *   templateUrl: 'app.component.html',
 * })
 * class AppComponent {
 *   @HostBinding('@.disabled')
 *   public animationsDisabled = true;
 * }
 * ```
 *
 * ### Overriding disablement of inner animations
 * Despite inner animations being disabled, a parent animation can `query()`
 * for inner elements located in disabled areas of the template and still animate
 * them if needed. This is also the case for when a sub animation is
 * queried by a parent and then later animated using `animateChild()`.
 *
 * ### Detecting when an animation is disabled
 * If a region of the DOM (or the entire application) has its animations disabled, the animation
 * trigger callbacks still fire, but for zero seconds. When the callback fires, it provides
 * an instance of an `AnimationEvent`. If animations are disabled,
 * the `.disabled` flag on the event is true.
 *
 * @publicApi
 */
function trigger(name, definitions) {
    return { type: 7 /* Trigger */, name, definitions, options: {} };
}
/**
 * Defines an animation step that combines styling information with timing information.
 *
 * @param timings Sets `AnimateTimings` for the parent animation.
 * A string in the format "duration [delay] [easing]".
 *  - Duration and delay are expressed as a number and optional time unit,
 * such as "1s" or "10ms" for one second and 10 milliseconds, respectively.
 * The default unit is milliseconds.
 *  - The easing value controls how the animation accelerates and decelerates
 * during its runtime. Value is one of  `ease`, `ease-in`, `ease-out`,
 * `ease-in-out`, or a `cubic-bezier()` function call.
 * If not supplied, no easing is applied.
 *
 * For example, the string "1s 100ms ease-out" specifies a duration of
 * 1000 milliseconds, and delay of 100 ms, and the "ease-out" easing style,
 * which decelerates near the end of the duration.
 * @param styles Sets AnimationStyles for the parent animation.
 * A function call to either `style()` or `keyframes()`
 * that returns a collection of CSS style entries to be applied to the parent animation.
 * When null, uses the styles from the destination state.
 * This is useful when describing an animation step that will complete an animation;
 * see "Animating to the final state" in `transitions()`.
 * @returns An object that encapsulates the animation step.
 *
 * @usageNotes
 * Call within an animation `sequence()`, `{@link animations/group group()}`, or
 * `transition()` call to specify an animation step
 * that applies given style data to the parent animation for a given amount of time.
 *
 * ### Syntax Examples
 * **Timing examples**
 *
 * The following examples show various `timings` specifications.
 * - `animate(500)` : Duration is 500 milliseconds.
 * - `animate("1s")` : Duration is 1000 milliseconds.
 * - `animate("100ms 0.5s")` : Duration is 100 milliseconds, delay is 500 milliseconds.
 * - `animate("5s ease-in")` : Duration is 5000 milliseconds, easing in.
 * - `animate("5s 10ms cubic-bezier(.17,.67,.88,.1)")` : Duration is 5000 milliseconds, delay is 10
 * milliseconds, easing according to a bezier curve.
 *
 * **Style examples**
 *
 * The following example calls `style()` to set a single CSS style.
 * ```typescript
 * animate(500, style({ background: "red" }))
 * ```
 * The following example calls `keyframes()` to set a CSS style
 * to different values for successive keyframes.
 * ```typescript
 * animate(500, keyframes(
 *  [
 *   style({ background: "blue" }),
 *   style({ background: "red" })
 *  ])
 * ```
 *
 * @publicApi
 */
function animate(timings, styles = null) {
    return { type: 4 /* Animate */, styles, timings };
}
/**
 * @description Defines a list of animation steps to be run in parallel.
 *
 * @param steps An array of animation step objects.
 * - When steps are defined by `style()` or `animate()`
 * function calls, each call within the group is executed instantly.
 * - To specify offset styles to be applied at a later time, define steps with
 * `keyframes()`, or use `animate()` calls with a delay value.
 * For example:
 *
 * ```typescript
 * group([
 *   animate("1s", style({ background: "black" })),
 *   animate("2s", style({ color: "white" }))
 * ])
 * ```
 *
 * @param options An options object containing a delay and
 * developer-defined parameters that provide styling defaults and
 * can be overridden on invocation.
 *
 * @return An object that encapsulates the group data.
 *
 * @usageNotes
 * Grouped animations are useful when a series of styles must be
 * animated at different starting times and closed off at different ending times.
 *
 * When called within a `sequence()` or a
 * `transition()` call, does not continue to the next
 * instruction until all of the inner animation steps have completed.
 *
 * @publicApi
 */
function group(steps, options = null) {
    return { type: 3 /* Group */, steps, options };
}
/**
 * Defines a list of animation steps to be run sequentially, one by one.
 *
 * @param steps An array of animation step objects.
 * - Steps defined by `style()` calls apply the styling data immediately.
 * - Steps defined by `animate()` calls apply the styling data over time
 *   as specified by the timing data.
 *
 * ```typescript
 * sequence([
 *   style({ opacity: 0 }),
 *   animate("1s", style({ opacity: 1 }))
 * ])
 * ```
 *
 * @param options An options object containing a delay and
 * developer-defined parameters that provide styling defaults and
 * can be overridden on invocation.
 *
 * @return An object that encapsulates the sequence data.
 *
 * @usageNotes
 * When you pass an array of steps to a
 * `transition()` call, the steps run sequentially by default.
 * Compare this to the `{@link animations/group group()}` call, which runs animation steps in
 *parallel.
 *
 * When a sequence is used within a `{@link animations/group group()}` or a `transition()` call,
 * execution continues to the next instruction only after each of the inner animation
 * steps have completed.
 *
 * @publicApi
 **/
function sequence(steps, options = null) {
    return { type: 2 /* Sequence */, steps, options };
}
/**
 * Declares a key/value object containing CSS properties/styles that
 * can then be used for an animation [`state`](api/animations/state), within an animation
 *`sequence`, or as styling data for calls to `animate()` and `keyframes()`.
 *
 * @param tokens A set of CSS styles or HTML styles associated with an animation state.
 * The value can be any of the following:
 * - A key-value style pair associating a CSS property with a value.
 * - An array of key-value style pairs.
 * - An asterisk (*), to use auto-styling, where styles are derived from the element
 * being animated and applied to the animation when it starts.
 *
 * Auto-styling can be used to define a state that depends on layout or other
 * environmental factors.
 *
 * @return An object that encapsulates the style data.
 *
 * @usageNotes
 * The following examples create animation styles that collect a set of
 * CSS property values:
 *
 * ```typescript
 * // string values for CSS properties
 * style({ background: "red", color: "blue" })
 *
 * // numerical pixel values
 * style({ width: 100, height: 0 })
 * ```
 *
 * The following example uses auto-styling to allow an element to animate from
 * a height of 0 up to its full height:
 *
 * ```
 * style({ height: 0 }),
 * animate("1s", style({ height: "*" }))
 * ```
 *
 * @publicApi
 **/
function style(tokens) {
    return { type: 6 /* Style */, styles: tokens, offset: null };
}
/**
 * Declares an animation state within a trigger attached to an element.
 *
 * @param name One or more names for the defined state in a comma-separated string.
 * The following reserved state names can be supplied to define a style for specific use
 * cases:
 *
 * - `void` You can associate styles with this name to be used when
 * the element is detached from the application. For example, when an `ngIf` evaluates
 * to false, the state of the associated element is void.
 *  - `*` (asterisk) Indicates the default state. You can associate styles with this name
 * to be used as the fallback when the state that is being animated is not declared
 * within the trigger.
 *
 * @param styles A set of CSS styles associated with this state, created using the
 * `style()` function.
 * This set of styles persists on the element once the state has been reached.
 * @param options Parameters that can be passed to the state when it is invoked.
 * 0 or more key-value pairs.
 * @return An object that encapsulates the new state data.
 *
 * @usageNotes
 * Use the `trigger()` function to register states to an animation trigger.
 * Use the `transition()` function to animate between states.
 * When a state is active within a component, its associated styles persist on the element,
 * even when the animation ends.
 *
 * @publicApi
 **/
function state(name, styles, options) {
    return { type: 0 /* State */, name, styles, options };
}
/**
 * Defines a set of animation styles, associating each style with an optional `offset` value.
 *
 * @param steps A set of animation styles with optional offset data.
 * The optional `offset` value for a style specifies a percentage of the total animation
 * time at which that style is applied.
 * @returns An object that encapsulates the keyframes data.
 *
 * @usageNotes
 * Use with the `animate()` call. Instead of applying animations
 * from the current state
 * to the destination state, keyframes describe how each style entry is applied and at what point
 * within the animation arc.
 * Compare [CSS Keyframe Animations](https://www.w3schools.com/css/css3_animations.asp).
 *
 * ### Usage
 *
 * In the following example, the offset values describe
 * when each `backgroundColor` value is applied. The color is red at the start, and changes to
 * blue when 20% of the total time has elapsed.
 *
 * ```typescript
 * // the provided offset values
 * animate("5s", keyframes([
 *   style({ backgroundColor: "red", offset: 0 }),
 *   style({ backgroundColor: "blue", offset: 0.2 }),
 *   style({ backgroundColor: "orange", offset: 0.3 }),
 *   style({ backgroundColor: "black", offset: 1 })
 * ]))
 * ```
 *
 * If there are no `offset` values specified in the style entries, the offsets
 * are calculated automatically.
 *
 * ```typescript
 * animate("5s", keyframes([
 *   style({ backgroundColor: "red" }) // offset = 0
 *   style({ backgroundColor: "blue" }) // offset = 0.33
 *   style({ backgroundColor: "orange" }) // offset = 0.66
 *   style({ backgroundColor: "black" }) // offset = 1
 * ]))
 *```

 * @publicApi
 */
function keyframes(steps) {
    return { type: 5 /* Keyframes */, steps };
}
/**
 * Declares an animation transition which is played when a certain specified condition is met.
 *
 * @param stateChangeExpr A string with a specific format or a function that specifies when the
 * animation transition should occur (see [State Change Expression](#state-change-expression)).
 *
 * @param steps One or more animation objects that represent the animation's instructions.
 *
 * @param options An options object that can be used to specify a delay for the animation or provide
 * custom parameters for it.
 *
 * @returns An object that encapsulates the transition data.
 *
 * @usageNotes
 *
 * ### State Change Expression
 *
 * The State Change Expression instructs Angular when to run the transition's animations, it can
 *either be
 *  - a string with a specific syntax
 *  - or a function that compares the previous and current state (value of the expression bound to
 *    the element's trigger) and returns `true` if the transition should occur or `false` otherwise
 *
 * The string format can be:
 *  - `fromState => toState`, which indicates that the transition's animations should occur then the
 *    expression bound to the trigger's element goes from `fromState` to `toState`
 *
 *    _Example:_
 *      ```typescript
 *        transition('open => closed', animate('.5s ease-out', style({ height: 0 }) ))
 *      ```
 *
 *  - `fromState <=> toState`, which indicates that the transition's animations should occur then
 *    the expression bound to the trigger's element goes from `fromState` to `toState` or vice versa
 *
 *    _Example:_
 *      ```typescript
 *        transition('enabled <=> disabled', animate('1s cubic-bezier(0.8,0.3,0,1)'))
 *      ```
 *
 *  - `:enter`/`:leave`, which indicates that the transition's animations should occur when the
 *    element enters or exists the DOM
 *
 *    _Example:_
 *      ```typescript
 *        transition(':enter', [
 *          style({ opacity: 0 }),
 *          animate('500ms', style({ opacity: 1 }))
 *        ])
 *      ```
 *
 *  - `:increment`/`:decrement`, which indicates that the transition's animations should occur when
 *    the numerical expression bound to the trigger's element has increased in value or decreased
 *
 *    _Example:_
 *      ```typescript
 *        transition(':increment', query('@counter', animateChild()))
 *      ```
 *
 *  - a sequence of any of the above divided by commas, which indicates that transition's animations
 *    should occur whenever one of the state change expressions matches
 *
 *    _Example:_
 *      ```typescript
 *        transition(':increment, * => enabled, :enter', animate('1s ease', keyframes([
 *          style({ transform: 'scale(1)', offset: 0}),
 *          style({ transform: 'scale(1.1)', offset: 0.7}),
 *          style({ transform: 'scale(1)', offset: 1})
 *        ]))),
 *      ```
 *
 * Also note that in such context:
 *  - `void` can be used to indicate the absence of the element
 *  - asterisks can be used as wildcards that match any state
 *  - (as a consequence of the above, `void => *` is equivalent to `:enter` and `* => void` is
 *    equivalent to `:leave`)
 *  - `true` and `false` also match expression values of `1` and `0` respectively (but do not match
 *    _truthy_ and _falsy_ values)
 *
 * <div class="alert is-helpful">
 *
 *  Be careful about entering end leaving elements as their transitions present a common
 *  pitfall for developers.
 *
 *  Note that when an element with a trigger enters the DOM its `:enter` transition always
 *  gets executed, but its `:leave` transition will not be executed if the element is removed
 *  alongside its parent (as it will be removed "without warning" before its transition has
 *  a chance to be executed, the only way that such transition can occur is if the element
 *  is exiting the DOM on its own).
 *
 *
 * </div>
 *
 * ### Animating to a Final State
 *
 * If the final step in a transition is a call to `animate()` that uses a timing value
 * with no `style` data, that step is automatically considered the final animation arc,
 * for the element to reach the final state, in such case Angular automatically adds or removes
 * CSS styles to ensure that the element is in the correct final state.
 *
 *
 * ### Usage Examples
 *
 *  - Transition animations applied based on
 *    the trigger's expression value
 *
 *   ```HTML
 *   <div [@myAnimationTrigger]="myStatusExp">
 *    ...
 *   </div>
 *   ```
 *
 *   ```typescript
 *   trigger("myAnimationTrigger", [
 *     ..., // states
 *     transition("on => off, open => closed", animate(500)),
 *     transition("* <=> error", query('.indicator', animateChild()))
 *   ])
 *   ```
 *
 *  - Transition animations applied based on custom logic dependent
 *    on the trigger's expression value and provided parameters
 *
 *    ```HTML
 *    <div [@myAnimationTrigger]="{
 *     value: stepName,
 *     params: { target: currentTarget }
 *    }">
 *     ...
 *    </div>
 *    ```
 *
 *    ```typescript
 *    trigger("myAnimationTrigger", [
 *      ..., // states
 *      transition(
 *        (fromState, toState, _element, params) =>
 *          ['firststep', 'laststep'].includes(fromState.toLowerCase())
 *          && toState === params?.['target'],
 *        animate('1s')
 *      )
 *    ])
 *    ```
 *
 * @publicApi
 **/
function transition(stateChangeExpr, steps, options = null) {
    return { type: 1 /* Transition */, expr: stateChangeExpr, animation: steps, options };
}
/**
 * Produces a reusable animation that can be invoked in another animation or sequence,
 * by calling the `useAnimation()` function.
 *
 * @param steps One or more animation objects, as returned by the `animate()`
 * or `sequence()` function, that form a transformation from one state to another.
 * A sequence is used by default when you pass an array.
 * @param options An options object that can contain a delay value for the start of the
 * animation, and additional developer-defined parameters.
 * Provided values for additional parameters are used as defaults,
 * and override values can be passed to the caller on invocation.
 * @returns An object that encapsulates the animation data.
 *
 * @usageNotes
 * The following example defines a reusable animation, providing some default parameter
 * values.
 *
 * ```typescript
 * var fadeAnimation = animation([
 *   style({ opacity: '{{ start }}' }),
 *   animate('{{ time }}',
 *   style({ opacity: '{{ end }}'}))
 *   ],
 *   { params: { time: '1000ms', start: 0, end: 1 }});
 * ```
 *
 * The following invokes the defined animation with a call to `useAnimation()`,
 * passing in override parameter values.
 *
 * ```js
 * useAnimation(fadeAnimation, {
 *   params: {
 *     time: '2s',
 *     start: 1,
 *     end: 0
 *   }
 * })
 * ```
 *
 * If any of the passed-in parameter values are missing from this call,
 * the default values are used. If one or more parameter values are missing before a step is
 * animated, `useAnimation()` throws an error.
 *
 * @publicApi
 */
function animation(steps, options = null) {
    return { type: 8 /* Reference */, animation: steps, options };
}
/**
 * Executes a queried inner animation element within an animation sequence.
 *
 * @param options An options object that can contain a delay value for the start of the
 * animation, and additional override values for developer-defined parameters.
 * @return An object that encapsulates the child animation data.
 *
 * @usageNotes
 * Each time an animation is triggered in Angular, the parent animation
 * has priority and any child animations are blocked. In order
 * for a child animation to run, the parent animation must query each of the elements
 * containing child animations, and run them using this function.
 *
 * Note that this feature is designed to be used with `query()` and it will only work
 * with animations that are assigned using the Angular animation library. CSS keyframes
 * and transitions are not handled by this API.
 *
 * @publicApi
 */
function animateChild(options = null) {
    return { type: 9 /* AnimateChild */, options };
}
/**
 * Starts a reusable animation that is created using the `animation()` function.
 *
 * @param animation The reusable animation to start.
 * @param options An options object that can contain a delay value for the start of
 * the animation, and additional override values for developer-defined parameters.
 * @return An object that contains the animation parameters.
 *
 * @publicApi
 */
function useAnimation(animation, options = null) {
    return { type: 10 /* AnimateRef */, animation, options };
}
/**
 * Finds one or more inner elements within the current element that is
 * being animated within a sequence. Use with `animate()`.
 *
 * @param selector The element to query, or a set of elements that contain Angular-specific
 * characteristics, specified with one or more of the following tokens.
 *  - `query(":enter")` or `query(":leave")` : Query for newly inserted/removed elements (not
 *     all elements can be queried via these tokens, see
 *     [Entering and Leaving Elements](#entering-and-leaving-elements))
 *  - `query(":animating")` : Query all currently animating elements.
 *  - `query("@triggerName")` : Query elements that contain an animation trigger.
 *  - `query("@*")` : Query all elements that contain an animation triggers.
 *  - `query(":self")` : Include the current element into the animation sequence.
 *
 * @param animation One or more animation steps to apply to the queried element or elements.
 * An array is treated as an animation sequence.
 * @param options An options object. Use the 'limit' field to limit the total number of
 * items to collect.
 * @return An object that encapsulates the query data.
 *
 * @usageNotes
 *
 * ### Multiple Tokens
 *
 * Tokens can be merged into a combined query selector string. For example:
 *
 * ```typescript
 *  query(':self, .record:enter, .record:leave, @subTrigger', [...])
 * ```
 *
 * The `query()` function collects multiple elements and works internally by using
 * `element.querySelectorAll`. Use the `limit` field of an options object to limit
 * the total number of items to be collected. For example:
 *
 * ```js
 * query('div', [
 *   animate(...),
 *   animate(...)
 * ], { limit: 1 })
 * ```
 *
 * By default, throws an error when zero items are found. Set the
 * `optional` flag to ignore this error. For example:
 *
 * ```js
 * query('.some-element-that-may-not-be-there', [
 *   animate(...),
 *   animate(...)
 * ], { optional: true })
 * ```
 *
 * ### Entering and Leaving Elements
 *
 * Not all elements can be queried via the `:enter` and `:leave` tokens, the only ones
 * that can are those that Angular assumes can enter/leave based on their own logic
 * (if their insertion/removal is simply a consequence of that of their parent they
 * should be queried via a different token in their parent's `:enter`/`:leave` transitions).
 *
 * The only elements Angular assumes can enter/leave based on their own logic (thus the only
 * ones that can be queried via the `:enter` and `:leave` tokens) are:
 *  - Those inserted dynamically (via `ViewContainerRef`)
 *  - Those that have a structural directive (which, under the hood, are a subset of the above ones)
 *
 * <div class="alert is-helpful">
 *
 *  Note that elements will be successfully queried via `:enter`/`:leave` even if their
 *  insertion/removal is not done manually via `ViewContainerRef`or caused by their structural
 *  directive (e.g. they enter/exit alongside their parent).
 *
 * </div>
 *
 * <div class="alert is-important">
 *
 *  There is an exception to what previously mentioned, besides elements entering/leaving based on
 *  their own logic, elements with an animation trigger can always be queried via `:leave` when
 * their parent is also leaving.
 *
 * </div>
 *
 * ### Usage Example
 *
 * The following example queries for inner elements and animates them
 * individually using `animate()`.
 *
 * ```typescript
 * @Component({
 *   selector: 'inner',
 *   template: `
 *     <div [@queryAnimation]="exp">
 *       <h1>Title</h1>
 *       <div class="content">
 *         Blah blah blah
 *       </div>
 *     </div>
 *   `,
 *   animations: [
 *    trigger('queryAnimation', [
 *      transition('* => goAnimate', [
 *        // hide the inner elements
 *        query('h1', style({ opacity: 0 })),
 *        query('.content', style({ opacity: 0 })),
 *
 *        // animate the inner elements in, one by one
 *        query('h1', animate(1000, style({ opacity: 1 }))),
 *        query('.content', animate(1000, style({ opacity: 1 }))),
 *      ])
 *    ])
 *  ]
 * })
 * class Cmp {
 *   exp = '';
 *
 *   goAnimate() {
 *     this.exp = 'goAnimate';
 *   }
 * }
 * ```
 *
 * @publicApi
 */
function query(selector, animation, options = null) {
    return { type: 11 /* Query */, selector, animation, options };
}
/**
 * Use within an animation `query()` call to issue a timing gap after
 * each queried item is animated.
 *
 * @param timings A delay value.
 * @param animation One ore more animation steps.
 * @returns An object that encapsulates the stagger data.
 *
 * @usageNotes
 * In the following example, a container element wraps a list of items stamped out
 * by an `ngFor`. The container element contains an animation trigger that will later be set
 * to query for each of the inner items.
 *
 * Each time items are added, the opacity fade-in animation runs,
 * and each removed item is faded out.
 * When either of these animations occur, the stagger effect is
 * applied after each item's animation is started.
 *
 * ```html
 * <!-- list.component.html -->
 * <button (click)="toggle()">Show / Hide Items</button>
 * <hr />
 * <div [@listAnimation]="items.length">
 *   <div *ngFor="let item of items">
 *     {{ item }}
 *   </div>
 * </div>
 * ```
 *
 * Here is the component code:
 *
 * ```typescript
 * import {trigger, transition, style, animate, query, stagger} from '@angular/animations';
 * @Component({
 *   templateUrl: 'list.component.html',
 *   animations: [
 *     trigger('listAnimation', [
 *     ...
 *     ])
 *   ]
 * })
 * class ListComponent {
 *   items = [];
 *
 *   showItems() {
 *     this.items = [0,1,2,3,4];
 *   }
 *
 *   hideItems() {
 *     this.items = [];
 *   }
 *
 *   toggle() {
 *     this.items.length ? this.hideItems() : this.showItems();
 *    }
 *  }
 * ```
 *
 * Here is the animation trigger code:
 *
 * ```typescript
 * trigger('listAnimation', [
 *   transition('* => *', [ // each time the binding value changes
 *     query(':leave', [
 *       stagger(100, [
 *         animate('0.5s', style({ opacity: 0 }))
 *       ])
 *     ]),
 *     query(':enter', [
 *       style({ opacity: 0 }),
 *       stagger(100, [
 *         animate('0.5s', style({ opacity: 1 }))
 *       ])
 *     ])
 *   ])
 * ])
 * ```
 *
 * @publicApi
 */
function stagger(timings, animation) {
    return { type: 12 /* Stagger */, timings, animation };
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function scheduleMicroTask(cb) {
    Promise.resolve(null).then(cb);
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * An empty programmatic controller for reusable animations.
 * Used internally when animations are disabled, to avoid
 * checking for the null case when an animation player is expected.
 *
 * @see `animate()`
 * @see `AnimationPlayer`
 * @see `GroupPlayer`
 *
 * @publicApi
 */
class NoopAnimationPlayer {
    constructor(duration = 0, delay = 0) {
        this._onDoneFns = [];
        this._onStartFns = [];
        this._onDestroyFns = [];
        this._started = false;
        this._destroyed = false;
        this._finished = false;
        this._position = 0;
        this.parentPlayer = null;
        this.totalTime = duration + delay;
    }
    _onFinish() {
        if (!this._finished) {
            this._finished = true;
            this._onDoneFns.forEach(fn => fn());
            this._onDoneFns = [];
        }
    }
    onStart(fn) {
        this._onStartFns.push(fn);
    }
    onDone(fn) {
        this._onDoneFns.push(fn);
    }
    onDestroy(fn) {
        this._onDestroyFns.push(fn);
    }
    hasStarted() {
        return this._started;
    }
    init() { }
    play() {
        if (!this.hasStarted()) {
            this._onStart();
            this.triggerMicrotask();
        }
        this._started = true;
    }
    /** @internal */
    triggerMicrotask() {
        scheduleMicroTask(() => this._onFinish());
    }
    _onStart() {
        this._onStartFns.forEach(fn => fn());
        this._onStartFns = [];
    }
    pause() { }
    restart() { }
    finish() {
        this._onFinish();
    }
    destroy() {
        if (!this._destroyed) {
            this._destroyed = true;
            if (!this.hasStarted()) {
                this._onStart();
            }
            this.finish();
            this._onDestroyFns.forEach(fn => fn());
            this._onDestroyFns = [];
        }
    }
    reset() {
        this._started = false;
    }
    setPosition(position) {
        this._position = this.totalTime ? position * this.totalTime : 1;
    }
    getPosition() {
        return this.totalTime ? this._position / this.totalTime : 1;
    }
    /** @internal */
    triggerCallback(phaseName) {
        const methods = phaseName == 'start' ? this._onStartFns : this._onDoneFns;
        methods.forEach(fn => fn());
        methods.length = 0;
    }
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * A programmatic controller for a group of reusable animations.
 * Used internally to control animations.
 *
 * @see `AnimationPlayer`
 * @see `{@link animations/group group()}`
 *
 */
class AnimationGroupPlayer {
    constructor(_players) {
        this._onDoneFns = [];
        this._onStartFns = [];
        this._finished = false;
        this._started = false;
        this._destroyed = false;
        this._onDestroyFns = [];
        this.parentPlayer = null;
        this.totalTime = 0;
        this.players = _players;
        let doneCount = 0;
        let destroyCount = 0;
        let startCount = 0;
        const total = this.players.length;
        if (total == 0) {
            scheduleMicroTask(() => this._onFinish());
        }
        else {
            this.players.forEach(player => {
                player.onDone(() => {
                    if (++doneCount == total) {
                        this._onFinish();
                    }
                });
                player.onDestroy(() => {
                    if (++destroyCount == total) {
                        this._onDestroy();
                    }
                });
                player.onStart(() => {
                    if (++startCount == total) {
                        this._onStart();
                    }
                });
            });
        }
        this.totalTime = this.players.reduce((time, player) => Math.max(time, player.totalTime), 0);
    }
    _onFinish() {
        if (!this._finished) {
            this._finished = true;
            this._onDoneFns.forEach(fn => fn());
            this._onDoneFns = [];
        }
    }
    init() {
        this.players.forEach(player => player.init());
    }
    onStart(fn) {
        this._onStartFns.push(fn);
    }
    _onStart() {
        if (!this.hasStarted()) {
            this._started = true;
            this._onStartFns.forEach(fn => fn());
            this._onStartFns = [];
        }
    }
    onDone(fn) {
        this._onDoneFns.push(fn);
    }
    onDestroy(fn) {
        this._onDestroyFns.push(fn);
    }
    hasStarted() {
        return this._started;
    }
    play() {
        if (!this.parentPlayer) {
            this.init();
        }
        this._onStart();
        this.players.forEach(player => player.play());
    }
    pause() {
        this.players.forEach(player => player.pause());
    }
    restart() {
        this.players.forEach(player => player.restart());
    }
    finish() {
        this._onFinish();
        this.players.forEach(player => player.finish());
    }
    destroy() {
        this._onDestroy();
    }
    _onDestroy() {
        if (!this._destroyed) {
            this._destroyed = true;
            this._onFinish();
            this.players.forEach(player => player.destroy());
            this._onDestroyFns.forEach(fn => fn());
            this._onDestroyFns = [];
        }
    }
    reset() {
        this.players.forEach(player => player.reset());
        this._destroyed = false;
        this._finished = false;
        this._started = false;
    }
    setPosition(p) {
        const timeAtPosition = p * this.totalTime;
        this.players.forEach(player => {
            const position = player.totalTime ? Math.min(1, timeAtPosition / player.totalTime) : 1;
            player.setPosition(position);
        });
    }
    getPosition() {
        const longestPlayer = this.players.reduce((longestSoFar, player) => {
            const newPlayerIsLongest = longestSoFar === null || player.totalTime > longestSoFar.totalTime;
            return newPlayerIsLongest ? player : longestSoFar;
        }, null);
        return longestPlayer != null ? longestPlayer.getPosition() : 0;
    }
    beforeDestroy() {
        this.players.forEach(player => {
            if (player.beforeDestroy) {
                player.beforeDestroy();
            }
        });
    }
    /** @internal */
    triggerCallback(phaseName) {
        const methods = phaseName == 'start' ? this._onStartFns : this._onDoneFns;
        methods.forEach(fn => fn());
        methods.length = 0;
    }
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const ɵPRE_STYLE = '!';

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=animations.mjs.map


/***/ }),

/***/ "./node_modules/@angular/cdk/fesm2020/bidi.mjs":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Is": () => (/* binding */ Directionality),
/* harmony export */   "vT": () => (/* binding */ BidiModule)
/* harmony export */ });
/* unused harmony exports DIR_DOCUMENT, Dir */
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs");



/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Injection token used to inject the document into Directionality.
 * This is used so that the value can be faked in tests.
 *
 * We can't use the real document in tests because changing the real `dir` causes geometry-based
 * tests in Safari to fail.
 *
 * We also can't re-provide the DOCUMENT token from platform-brower because the unit tests
 * themselves use things like `querySelector` in test code.
 *
 * This token is defined in a separate file from Directionality as a workaround for
 * https://github.com/angular/angular/issues/22559
 *
 * @docs-private
 */

const DIR_DOCUMENT = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('cdk-dir-doc', {
  providedIn: 'root',
  factory: DIR_DOCUMENT_FACTORY
});
/** @docs-private */

function DIR_DOCUMENT_FACTORY() {
  return (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .DOCUMENT */ .K0);
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Regex that matches locales with an RTL script. Taken from `goog.i18n.bidi.isRtlLanguage`. */


const RTL_LOCALE_PATTERN = /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;
/** Resolves a string value to a specific direction. */

function _resolveDirectionality(rawValue) {
  const value = rawValue?.toLowerCase() || '';

  if (value === 'auto' && typeof navigator !== 'undefined' && navigator?.language) {
    return RTL_LOCALE_PATTERN.test(navigator.language) ? 'rtl' : 'ltr';
  }

  return value === 'rtl' ? 'rtl' : 'ltr';
}
/**
 * The directionality (LTR / RTL) context for the application (or a subtree of it).
 * Exposes the current direction and a stream of direction changes.
 */


class Directionality {
  constructor(_document) {
    /** The current 'ltr' or 'rtl' value. */
    this.value = 'ltr';
    /** Stream that emits whenever the 'ltr' / 'rtl' state changes. */

    this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();

    if (_document) {
      const bodyDir = _document.body ? _document.body.dir : null;
      const htmlDir = _document.documentElement ? _document.documentElement.dir : null;
      this.value = _resolveDirectionality(bodyDir || htmlDir || 'ltr');
    }
  }

  ngOnDestroy() {
    this.change.complete();
  }

}

Directionality.ɵfac = function Directionality_Factory(t) {
  return new (t || Directionality)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](DIR_DOCUMENT, 8));
};

Directionality.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: Directionality,
  factory: Directionality.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Directionality, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [DIR_DOCUMENT]
      }]
    }];
  }, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Directive to listen for changes of direction of part of the DOM.
 *
 * Provides itself as Directionality such that descendant directives only need to ever inject
 * Directionality to get the closest direction.
 */


class Dir {
  constructor() {
    /** Normalized direction that accounts for invalid/unsupported values. */
    this._dir = 'ltr';
    /** Whether the `value` has been set to its initial value. */

    this._isInitialized = false;
    /** Event emitted when the direction changes. */

    this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  /** @docs-private */


  get dir() {
    return this._dir;
  }

  set dir(value) {
    const previousValue = this._dir; // Note: `_resolveDirectionality` resolves the language based on the browser's language,
    // whereas the browser does it based on the content of the element. Since doing so based
    // on the content can be expensive, for now we're doing the simpler matching.

    this._dir = _resolveDirectionality(value);
    this._rawDir = value;

    if (previousValue !== this._dir && this._isInitialized) {
      this.change.emit(this._dir);
    }
  }
  /** Current layout direction of the element. */


  get value() {
    return this.dir;
  }
  /** Initialize once default value has been set. */


  ngAfterContentInit() {
    this._isInitialized = true;
  }

  ngOnDestroy() {
    this.change.complete();
  }

}

Dir.ɵfac = function Dir_Factory(t) {
  return new (t || Dir)();
};

Dir.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: Dir,
  selectors: [["", "dir", ""]],
  hostVars: 1,
  hostBindings: function Dir_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("dir", ctx._rawDir);
    }
  },
  inputs: {
    dir: "dir"
  },
  outputs: {
    change: "dirChange"
  },
  exportAs: ["dir"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
    provide: Directionality,
    useExisting: Dir
  }])]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Dir, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[dir]',
      providers: [{
        provide: Directionality,
        useExisting: Dir
      }],
      host: {
        '[attr.dir]': '_rawDir'
      },
      exportAs: 'dir'
    }]
  }], null, {
    change: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
      args: ['dirChange']
    }],
    dir: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


class BidiModule {}

BidiModule.ɵfac = function BidiModule_Factory(t) {
  return new (t || BidiModule)();
};

BidiModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: BidiModule,
  declarations: [Dir],
  exports: [Dir]
});
BidiModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BidiModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      exports: [Dir],
      declarations: [Dir]
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */


 //# sourceMappingURL=bidi.mjs.map

/***/ }),

/***/ "./node_modules/@angular/cdk/fesm2020/coercion.mjs":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ig": () => (/* binding */ coerceBooleanProperty),
/* harmony export */   "fI": () => (/* binding */ coerceElement),
/* harmony export */   "su": () => (/* binding */ coerceNumberProperty)
/* harmony export */ });
/* unused harmony exports _isNumberValue, coerceArray, coerceCssPixelValue, coerceStringArray */
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs");


/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Coerces a data-bound value (typically a string) to a boolean. */
function coerceBooleanProperty(value) {
    return value != null && `${value}` !== 'false';
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function coerceNumberProperty(value, fallbackValue = 0) {
    return _isNumberValue(value) ? Number(value) : fallbackValue;
}
/**
 * Whether the provided value is considered a number.
 * @docs-private
 */
function _isNumberValue(value) {
    // parseFloat(value) handles most of the cases we're interested in (it treats null, empty string,
    // and other non-number values as NaN, where Number just uses 0) but it considers the string
    // '123hello' to be a valid number. Therefore we also check if Number(value) is NaN.
    return !isNaN(parseFloat(value)) && !isNaN(Number(value));
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function coerceArray(value) {
    return Array.isArray(value) ? value : [value];
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Coerces a value to a CSS pixel value. */
function coerceCssPixelValue(value) {
    if (value == null) {
        return '';
    }
    return typeof value === 'string' ? value : `${value}px`;
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Coerces an ElementRef or an Element into an element.
 * Useful for APIs that can accept either a ref or the native element itself.
 */
function coerceElement(elementOrRef) {
    return elementOrRef instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef ? elementOrRef.nativeElement : elementOrRef;
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Coerces a value to an array of trimmed non-empty strings.
 * Any input that is not an array, `null` or `undefined` will be turned into a string
 * via `toString()` and subsequently split with the given separator.
 * `null` and `undefined` will result in an empty array.
 * This results in the following outcomes:
 * - `null` -&gt; `[]`
 * - `[null]` -&gt; `["null"]`
 * - `["a", "b ", " "]` -&gt; `["a", "b"]`
 * - `[1, [2, 3]]` -&gt; `["1", "2,3"]`
 * - `[{ a: 0 }]` -&gt; `["[object Object]"]`
 * - `{ a: 0 }` -&gt; `["[object", "Object]"]`
 *
 * Useful for defining CSS classes or table columns.
 * @param value the value to coerce into an array of strings
 * @param separator split-separator if value isn't an array
 */
function coerceStringArray(value, separator = /\s+/) {
    const result = [];
    if (value != null) {
        const sourceValues = Array.isArray(value) ? value : `${value}`.split(separator);
        for (const sourceValue of sourceValues) {
            const trimmedString = `${sourceValue}`.trim();
            if (trimmedString) {
                result.push(trimmedString);
            }
        }
    }
    return result;
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


//# sourceMappingURL=coercion.mjs.map


/***/ }),

/***/ "./node_modules/@angular/cdk/fesm2020/observers.mjs":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "wD": () => (/* binding */ CdkObserveContent),
  "yq": () => (/* binding */ ContentObserver),
  "Q8": () => (/* binding */ ObserversModule)
});

// UNUSED EXPORTS: MutationObserverFactory

// EXTERNAL MODULE: ./node_modules/@angular/cdk/fesm2020/coercion.mjs
var coercion = __webpack_require__("./node_modules/@angular/cdk/fesm2020/coercion.mjs");
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2020/core.mjs + 1 modules
var core = __webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs");
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/Observable.js + 1 modules
var Observable = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/Observable.js");
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/Subject.js + 1 modules
var Subject = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/Subject.js");
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/scheduler/async.js + 6 modules
var scheduler_async = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/scheduler/async.js");
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/util/lift.js
var lift = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/lift.js");
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js
var OperatorSubscriber = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js");
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/debounceTime.js



function debounceTime(dueTime, scheduler) {
  if (scheduler === void 0) {
    scheduler = scheduler_async/* asyncScheduler */.z;
  }

  return (0,lift/* operate */.e)(function (source, subscriber) {
    var activeTask = null;
    var lastValue = null;
    var lastTime = null;

    var emit = function () {
      if (activeTask) {
        activeTask.unsubscribe();
        activeTask = null;
        var value = lastValue;
        lastValue = null;
        subscriber.next(value);
      }
    };

    function emitWhenIdle() {
      var targetTime = lastTime + dueTime;
      var now = scheduler.now();

      if (now < targetTime) {
        activeTask = this.schedule(undefined, targetTime - now);
        subscriber.add(activeTask);
        return;
      }

      emit();
    }

    source.subscribe((0,OperatorSubscriber/* createOperatorSubscriber */.x)(subscriber, function (value) {
      lastValue = value;
      lastTime = scheduler.now();

      if (!activeTask) {
        activeTask = scheduler.schedule(emitWhenIdle, dueTime);
        subscriber.add(activeTask);
      }
    }, function () {
      emit();
      subscriber.complete();
    }, undefined, function () {
      lastValue = activeTask = null;
    }));
  });
} //# sourceMappingURL=debounceTime.js.map
;// CONCATENATED MODULE: ./node_modules/@angular/cdk/fesm2020/observers.mjs





/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Factory that creates a new MutationObserver and allows us to stub it out in unit tests.
 * @docs-private
 */

class MutationObserverFactory {
  create(callback) {
    return typeof MutationObserver === 'undefined' ? null : new MutationObserver(callback);
  }

}

MutationObserverFactory.ɵfac = function MutationObserverFactory_Factory(t) {
  return new (t || MutationObserverFactory)();
};

MutationObserverFactory.ɵprov = /* @__PURE__ */core["ɵɵdefineInjectable"]({
  token: MutationObserverFactory,
  factory: MutationObserverFactory.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && core["ɵsetClassMetadata"](MutationObserverFactory, [{
    type: core.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();
/** An injectable service that allows watching elements for changes to their content. */


class ContentObserver {
  constructor(_mutationObserverFactory) {
    this._mutationObserverFactory = _mutationObserverFactory;
    /** Keeps track of the existing MutationObservers so they can be reused. */

    this._observedElements = new Map();
  }

  ngOnDestroy() {
    this._observedElements.forEach((_, element) => this._cleanupObserver(element));
  }

  observe(elementOrRef) {
    const element = (0,coercion/* coerceElement */.fI)(elementOrRef);
    return new Observable/* Observable */.y(observer => {
      const stream = this._observeElement(element);

      const subscription = stream.subscribe(observer);
      return () => {
        subscription.unsubscribe();

        this._unobserveElement(element);
      };
    });
  }
  /**
   * Observes the given element by using the existing MutationObserver if available, or creating a
   * new one if not.
   */


  _observeElement(element) {
    if (!this._observedElements.has(element)) {
      const stream = new Subject/* Subject */.x();

      const observer = this._mutationObserverFactory.create(mutations => stream.next(mutations));

      if (observer) {
        observer.observe(element, {
          characterData: true,
          childList: true,
          subtree: true
        });
      }

      this._observedElements.set(element, {
        observer,
        stream,
        count: 1
      });
    } else {
      this._observedElements.get(element).count++;
    }

    return this._observedElements.get(element).stream;
  }
  /**
   * Un-observes the given element and cleans up the underlying MutationObserver if nobody else is
   * observing this element.
   */


  _unobserveElement(element) {
    if (this._observedElements.has(element)) {
      this._observedElements.get(element).count--;

      if (!this._observedElements.get(element).count) {
        this._cleanupObserver(element);
      }
    }
  }
  /** Clean up the underlying MutationObserver for the specified element. */


  _cleanupObserver(element) {
    if (this._observedElements.has(element)) {
      const {
        observer,
        stream
      } = this._observedElements.get(element);

      if (observer) {
        observer.disconnect();
      }

      stream.complete();

      this._observedElements.delete(element);
    }
  }

}

ContentObserver.ɵfac = function ContentObserver_Factory(t) {
  return new (t || ContentObserver)(core["ɵɵinject"](MutationObserverFactory));
};

ContentObserver.ɵprov = /* @__PURE__ */core["ɵɵdefineInjectable"]({
  token: ContentObserver,
  factory: ContentObserver.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && core["ɵsetClassMetadata"](ContentObserver, [{
    type: core.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: MutationObserverFactory
    }];
  }, null);
})();
/**
 * Directive that triggers a callback whenever the content of
 * its associated element has changed.
 */


class CdkObserveContent {
  constructor(_contentObserver, _elementRef, _ngZone) {
    this._contentObserver = _contentObserver;
    this._elementRef = _elementRef;
    this._ngZone = _ngZone;
    /** Event emitted for each change in the element's content. */

    this.event = new core.EventEmitter();
    this._disabled = false;
    this._currentSubscription = null;
  }
  /**
   * Whether observing content is disabled. This option can be used
   * to disconnect the underlying MutationObserver until it is needed.
   */


  get disabled() {
    return this._disabled;
  }

  set disabled(value) {
    this._disabled = (0,coercion/* coerceBooleanProperty */.Ig)(value);
    this._disabled ? this._unsubscribe() : this._subscribe();
  }
  /** Debounce interval for emitting the changes. */


  get debounce() {
    return this._debounce;
  }

  set debounce(value) {
    this._debounce = (0,coercion/* coerceNumberProperty */.su)(value);

    this._subscribe();
  }

  ngAfterContentInit() {
    if (!this._currentSubscription && !this.disabled) {
      this._subscribe();
    }
  }

  ngOnDestroy() {
    this._unsubscribe();
  }

  _subscribe() {
    this._unsubscribe();

    const stream = this._contentObserver.observe(this._elementRef); // TODO(mmalerba): We shouldn't be emitting on this @Output() outside the zone.
    // Consider brining it back inside the zone next time we're making breaking changes.
    // Bringing it back inside can cause things like infinite change detection loops and changed
    // after checked errors if people's code isn't handling it properly.


    this._ngZone.runOutsideAngular(() => {
      this._currentSubscription = (this.debounce ? stream.pipe(debounceTime(this.debounce)) : stream).subscribe(this.event);
    });
  }

  _unsubscribe() {
    this._currentSubscription?.unsubscribe();
  }

}

CdkObserveContent.ɵfac = function CdkObserveContent_Factory(t) {
  return new (t || CdkObserveContent)(core["ɵɵdirectiveInject"](ContentObserver), core["ɵɵdirectiveInject"](core.ElementRef), core["ɵɵdirectiveInject"](core.NgZone));
};

CdkObserveContent.ɵdir = /* @__PURE__ */core["ɵɵdefineDirective"]({
  type: CdkObserveContent,
  selectors: [["", "cdkObserveContent", ""]],
  inputs: {
    disabled: ["cdkObserveContentDisabled", "disabled"],
    debounce: "debounce"
  },
  outputs: {
    event: "cdkObserveContent"
  },
  exportAs: ["cdkObserveContent"]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && core["ɵsetClassMetadata"](CdkObserveContent, [{
    type: core.Directive,
    args: [{
      selector: '[cdkObserveContent]',
      exportAs: 'cdkObserveContent'
    }]
  }], function () {
    return [{
      type: ContentObserver
    }, {
      type: core.ElementRef
    }, {
      type: core.NgZone
    }];
  }, {
    event: [{
      type: core.Output,
      args: ['cdkObserveContent']
    }],
    disabled: [{
      type: core.Input,
      args: ['cdkObserveContentDisabled']
    }],
    debounce: [{
      type: core.Input
    }]
  });
})();

class ObserversModule {}

ObserversModule.ɵfac = function ObserversModule_Factory(t) {
  return new (t || ObserversModule)();
};

ObserversModule.ɵmod = /* @__PURE__ */core["ɵɵdefineNgModule"]({
  type: ObserversModule,
  declarations: [CdkObserveContent],
  exports: [CdkObserveContent]
});
ObserversModule.ɵinj = /* @__PURE__ */core["ɵɵdefineInjector"]({
  providers: [MutationObserverFactory]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && core["ɵsetClassMetadata"](ObserversModule, [{
    type: core.NgModule,
    args: [{
      exports: [CdkObserveContent],
      declarations: [CdkObserveContent],
      providers: [MutationObserverFactory]
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */


 //# sourceMappingURL=observers.mjs.map

/***/ }),

/***/ "./node_modules/@angular/cdk/fesm2020/platform.mjs":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Oy": () => (/* binding */ _isTestEnvironment),
/* harmony export */   "ht": () => (/* binding */ _getFocusedElementPierceShadowDom),
/* harmony export */   "i$": () => (/* binding */ normalizePassiveListenerOptions),
/* harmony export */   "kV": () => (/* binding */ _getShadowRoot),
/* harmony export */   "qK": () => (/* binding */ getSupportedInputTypes),
/* harmony export */   "sA": () => (/* binding */ _getEventTarget),
/* harmony export */   "t4": () => (/* binding */ Platform)
/* harmony export */ });
/* unused harmony exports PlatformModule, _supportsShadowDom, getRtlScrollAxisType, supportsPassiveEventListeners, supportsScrollBehavior */
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs");



/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Whether the current platform supports the V8 Break Iterator. The V8 check
// is necessary to detect all Blink based browsers.

let hasV8BreakIterator; // We need a try/catch around the reference to `Intl`, because accessing it in some cases can
// cause IE to throw. These cases are tied to particular versions of Windows and can happen if
// the consumer is providing a polyfilled `Map`. See:
// https://github.com/Microsoft/ChakraCore/issues/3189
// https://github.com/angular/components/issues/15687

try {
  hasV8BreakIterator = typeof Intl !== 'undefined' && Intl.v8BreakIterator;
} catch {
  hasV8BreakIterator = false;
}
/**
 * Service to detect the current platform by comparing the userAgent strings and
 * checking browser-specific global properties.
 */


class Platform {
  constructor(_platformId) {
    this._platformId = _platformId; // We want to use the Angular platform check because if the Document is shimmed
    // without the navigator, the following checks will fail. This is preferred because
    // sometimes the Document may be shimmed without the user's knowledge or intention

    /** Whether the Angular application is being rendered in the browser. */

    this.isBrowser = this._platformId ? (0,_angular_common__WEBPACK_IMPORTED_MODULE_0__/* .isPlatformBrowser */ .NF)(this._platformId) : typeof document === 'object' && !!document;
    /** Whether the current browser is Microsoft Edge. */

    this.EDGE = this.isBrowser && /(edge)/i.test(navigator.userAgent);
    /** Whether the current rendering engine is Microsoft Trident. */

    this.TRIDENT = this.isBrowser && /(msie|trident)/i.test(navigator.userAgent); // EdgeHTML and Trident mock Blink specific things and need to be excluded from this check.

    /** Whether the current rendering engine is Blink. */

    this.BLINK = this.isBrowser && !!(window.chrome || hasV8BreakIterator) && typeof CSS !== 'undefined' && !this.EDGE && !this.TRIDENT; // Webkit is part of the userAgent in EdgeHTML, Blink and Trident. Therefore we need to
    // ensure that Webkit runs standalone and is not used as another engine's base.

    /** Whether the current rendering engine is WebKit. */

    this.WEBKIT = this.isBrowser && /AppleWebKit/i.test(navigator.userAgent) && !this.BLINK && !this.EDGE && !this.TRIDENT;
    /** Whether the current platform is Apple iOS. */

    this.IOS = this.isBrowser && /iPad|iPhone|iPod/.test(navigator.userAgent) && !('MSStream' in window); // It's difficult to detect the plain Gecko engine, because most of the browsers identify
    // them self as Gecko-like browsers and modify the userAgent's according to that.
    // Since we only cover one explicit Firefox case, we can simply check for Firefox
    // instead of having an unstable check for Gecko.

    /** Whether the current browser is Firefox. */

    this.FIREFOX = this.isBrowser && /(firefox|minefield)/i.test(navigator.userAgent);
    /** Whether the current platform is Android. */
    // Trident on mobile adds the android platform to the userAgent to trick detections.

    this.ANDROID = this.isBrowser && /android/i.test(navigator.userAgent) && !this.TRIDENT; // Safari browsers will include the Safari keyword in their userAgent. Some browsers may fake
    // this and just place the Safari keyword in the userAgent. To be more safe about Safari every
    // Safari browser should also use Webkit as its layout engine.

    /** Whether the current browser is Safari. */

    this.SAFARI = this.isBrowser && /safari/i.test(navigator.userAgent) && this.WEBKIT;
  }

}

Platform.ɵfac = function Platform_Factory(t) {
  return new (t || Platform)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID));
};

Platform.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: Platform,
  factory: Platform.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Platform, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: Object,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID]
      }]
    }];
  }, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


class PlatformModule {}

PlatformModule.ɵfac = function PlatformModule_Factory(t) {
  return new (t || PlatformModule)();
};

PlatformModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: PlatformModule
});
PlatformModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PlatformModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
    args: [{}]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Cached result Set of input types support by the current browser. */


let supportedInputTypes;
/** Types of `<input>` that *might* be supported. */

const candidateInputTypes = [// `color` must come first. Chrome 56 shows a warning if we change the type to `color` after
// first changing it to something else:
// The specified value "" does not conform to the required format.
// The format is "#rrggbb" where rr, gg, bb are two-digit hexadecimal numbers.
'color', 'button', 'checkbox', 'date', 'datetime-local', 'email', 'file', 'hidden', 'image', 'month', 'number', 'password', 'radio', 'range', 'reset', 'search', 'submit', 'tel', 'text', 'time', 'url', 'week'];
/** @returns The input types supported by this browser. */

function getSupportedInputTypes() {
  // Result is cached.
  if (supportedInputTypes) {
    return supportedInputTypes;
  } // We can't check if an input type is not supported until we're on the browser, so say that
  // everything is supported when not on the browser. We don't use `Platform` here since it's
  // just a helper function and can't inject it.


  if (typeof document !== 'object' || !document) {
    supportedInputTypes = new Set(candidateInputTypes);
    return supportedInputTypes;
  }

  let featureTestInput = document.createElement('input');
  supportedInputTypes = new Set(candidateInputTypes.filter(value => {
    featureTestInput.setAttribute('type', value);
    return featureTestInput.type === value;
  }));
  return supportedInputTypes;
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Cached result of whether the user's browser supports passive event listeners. */


let supportsPassiveEvents;
/**
 * Checks whether the user's browser supports passive event listeners.
 * See: https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
 */

function supportsPassiveEventListeners() {
  if (supportsPassiveEvents == null && typeof window !== 'undefined') {
    try {
      window.addEventListener('test', null, Object.defineProperty({}, 'passive', {
        get: () => supportsPassiveEvents = true
      }));
    } finally {
      supportsPassiveEvents = supportsPassiveEvents || false;
    }
  }

  return supportsPassiveEvents;
}
/**
 * Normalizes an `AddEventListener` object to something that can be passed
 * to `addEventListener` on any browser, no matter whether it supports the
 * `options` parameter.
 * @param options Object to be normalized.
 */


function normalizePassiveListenerOptions(options) {
  return supportsPassiveEventListeners() ? options : !!options.capture;
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Cached result of the way the browser handles the horizontal scroll axis in RTL mode. */


let rtlScrollAxisType;
/** Cached result of the check that indicates whether the browser supports scroll behaviors. */

let scrollBehaviorSupported;
/** Check whether the browser supports scroll behaviors. */

function supportsScrollBehavior() {
  if (scrollBehaviorSupported == null) {
    // If we're not in the browser, it can't be supported. Also check for `Element`, because
    // some projects stub out the global `document` during SSR which can throw us off.
    if (typeof document !== 'object' || !document || typeof Element !== 'function' || !Element) {
      scrollBehaviorSupported = false;
      return scrollBehaviorSupported;
    } // If the element can have a `scrollBehavior` style, we can be sure that it's supported.


    if ('scrollBehavior' in document.documentElement.style) {
      scrollBehaviorSupported = true;
    } else {
      // At this point we have 3 possibilities: `scrollTo` isn't supported at all, it's
      // supported but it doesn't handle scroll behavior, or it has been polyfilled.
      const scrollToFunction = Element.prototype.scrollTo;

      if (scrollToFunction) {
        // We can detect if the function has been polyfilled by calling `toString` on it. Native
        // functions are obfuscated using `[native code]`, whereas if it was overwritten we'd get
        // the actual function source. Via https://davidwalsh.name/detect-native-function. Consider
        // polyfilled functions as supporting scroll behavior.
        scrollBehaviorSupported = !/\{\s*\[native code\]\s*\}/.test(scrollToFunction.toString());
      } else {
        scrollBehaviorSupported = false;
      }
    }
  }

  return scrollBehaviorSupported;
}
/**
 * Checks the type of RTL scroll axis used by this browser. As of time of writing, Chrome is NORMAL,
 * Firefox & Safari are NEGATED, and IE & Edge are INVERTED.
 */


function getRtlScrollAxisType() {
  // We can't check unless we're on the browser. Just assume 'normal' if we're not.
  if (typeof document !== 'object' || !document) {
    return 0
    /* NORMAL */
    ;
  }

  if (rtlScrollAxisType == null) {
    // Create a 1px wide scrolling container and a 2px wide content element.
    const scrollContainer = document.createElement('div');
    const containerStyle = scrollContainer.style;
    scrollContainer.dir = 'rtl';
    containerStyle.width = '1px';
    containerStyle.overflow = 'auto';
    containerStyle.visibility = 'hidden';
    containerStyle.pointerEvents = 'none';
    containerStyle.position = 'absolute';
    const content = document.createElement('div');
    const contentStyle = content.style;
    contentStyle.width = '2px';
    contentStyle.height = '1px';
    scrollContainer.appendChild(content);
    document.body.appendChild(scrollContainer);
    rtlScrollAxisType = 0
    /* NORMAL */
    ; // The viewport starts scrolled all the way to the right in RTL mode. If we are in a NORMAL
    // browser this would mean that the scrollLeft should be 1. If it's zero instead we know we're
    // dealing with one of the other two types of browsers.

    if (scrollContainer.scrollLeft === 0) {
      // In a NEGATED browser the scrollLeft is always somewhere in [-maxScrollAmount, 0]. For an
      // INVERTED browser it is always somewhere in [0, maxScrollAmount]. We can determine which by
      // setting to the scrollLeft to 1. This is past the max for a NEGATED browser, so it will
      // return 0 when we read it again.
      scrollContainer.scrollLeft = 1;
      rtlScrollAxisType = scrollContainer.scrollLeft === 0 ? 1
      /* NEGATED */
      : 2
      /* INVERTED */
      ;
    }

    scrollContainer.remove();
  }

  return rtlScrollAxisType;
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


let shadowDomIsSupported;
/** Checks whether the user's browser support Shadow DOM. */

function _supportsShadowDom() {
  if (shadowDomIsSupported == null) {
    const head = typeof document !== 'undefined' ? document.head : null;
    shadowDomIsSupported = !!(head && (head.createShadowRoot || head.attachShadow));
  }

  return shadowDomIsSupported;
}
/** Gets the shadow root of an element, if supported and the element is inside the Shadow DOM. */


function _getShadowRoot(element) {
  if (_supportsShadowDom()) {
    const rootNode = element.getRootNode ? element.getRootNode() : null; // Note that this should be caught by `_supportsShadowDom`, but some
    // teams have been able to hit this code path on unsupported browsers.

    if (typeof ShadowRoot !== 'undefined' && ShadowRoot && rootNode instanceof ShadowRoot) {
      return rootNode;
    }
  }

  return null;
}
/**
 * Gets the currently-focused element on the page while
 * also piercing through Shadow DOM boundaries.
 */


function _getFocusedElementPierceShadowDom() {
  let activeElement = typeof document !== 'undefined' && document ? document.activeElement : null;

  while (activeElement && activeElement.shadowRoot) {
    const newActiveElement = activeElement.shadowRoot.activeElement;

    if (newActiveElement === activeElement) {
      break;
    } else {
      activeElement = newActiveElement;
    }
  }

  return activeElement;
}
/** Gets the target of an event while accounting for Shadow DOM. */


function _getEventTarget(event) {
  // If an event is bound outside the Shadow DOM, the `event.target` will
  // point to the shadow root so we have to use `composedPath` instead.
  return event.composedPath ? event.composedPath()[0] : event.target;
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Gets whether the code is currently running in a test environment. */


function _isTestEnvironment() {
  // We can't use `declare const` because it causes conflicts inside Google with the real typings
  // for these symbols and we can't read them off the global object, because they don't appear to
  // be attached there for some runners like Jest.
  // (see: https://github.com/angular/components/issues/23365#issuecomment-938146643)
  return (// @ts-ignore
    typeof __karma__ !== 'undefined' && !!__karma__ || // @ts-ignore
    typeof jasmine !== 'undefined' && !!jasmine || // @ts-ignore
    typeof jest !== 'undefined' && !!jest || // @ts-ignore
    typeof Mocha !== 'undefined' && !!Mocha
  );
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */


 //# sourceMappingURL=platform.mjs.map

/***/ }),

/***/ "./node_modules/@angular/material/fesm2020/core.mjs":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "rD": () => (/* binding */ ErrorStateMatcher),
  "BQ": () => (/* binding */ MatCommonModule),
  "pj": () => (/* binding */ mixinColor),
  "FD": () => (/* binding */ mixinErrorState)
});

// UNUSED EXPORTS: AnimationCurves, AnimationDurations, DateAdapter, MATERIAL_SANITY_CHECKS, MAT_DATE_FORMATS, MAT_DATE_LOCALE, MAT_DATE_LOCALE_FACTORY, MAT_NATIVE_DATE_FORMATS, MAT_OPTGROUP, MAT_OPTION_PARENT_COMPONENT, MAT_RIPPLE_GLOBAL_OPTIONS, MatLine, MatLineModule, MatNativeDateModule, MatOptgroup, MatOption, MatOptionModule, MatOptionSelectionChange, MatPseudoCheckbox, MatPseudoCheckboxModule, MatRipple, MatRippleModule, NativeDateAdapter, NativeDateModule, RippleRef, RippleRenderer, ShowOnDirtyErrorStateMatcher, VERSION, _MatOptgroupBase, _MatOptionBase, _countGroupLabelsBeforeOption, _getOptionScrollPosition, defaultRippleAnimationConfig, mixinDisableRipple, mixinDisabled, mixinInitialized, mixinTabIndex, setLines

// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2020/core.mjs + 1 modules
var core = __webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs");
// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2020/common.mjs
var common = __webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs");
// EXTERNAL MODULE: ./node_modules/@angular/cdk/fesm2020/platform.mjs
var platform = __webpack_require__("./node_modules/@angular/cdk/fesm2020/platform.mjs");
// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("./node_modules/tslib/tslib.es6.js");
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/Subject.js + 1 modules
var internal_Subject = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/Subject.js");
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/BehaviorSubject.js


var BehaviorSubject = (function (_super) {
    (0,tslib_es6/* __extends */.ZT)(BehaviorSubject, _super);
    function BehaviorSubject(_value) {
        var _this = _super.call(this) || this;
        _this._value = _value;
        return _this;
    }
    Object.defineProperty(BehaviorSubject.prototype, "value", {
        get: function () {
            return this.getValue();
        },
        enumerable: false,
        configurable: true
    });
    BehaviorSubject.prototype._subscribe = function (subscriber) {
        var subscription = _super.prototype._subscribe.call(this, subscriber);
        !subscription.closed && subscriber.next(this._value);
        return subscription;
    };
    BehaviorSubject.prototype.getValue = function () {
        var _a = this, hasError = _a.hasError, thrownError = _a.thrownError, _value = _a._value;
        if (hasError) {
            throw thrownError;
        }
        this._throwIfClosed();
        return _value;
    };
    BehaviorSubject.prototype.next = function (value) {
        _super.prototype.next.call(this, (this._value = value));
    };
    return BehaviorSubject;
}(internal_Subject/* Subject */.x));

//# sourceMappingURL=BehaviorSubject.js.map
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/util/args.js
var util_args = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/args.js");
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/observable/from.js + 9 modules
var from = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/from.js");
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/observable/of.js


function of() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var scheduler = (0,util_args/* popScheduler */.yG)(args);
    return (0,from/* from */.D)(args, scheduler);
}
//# sourceMappingURL=of.js.map
;// CONCATENATED MODULE: ./node_modules/@angular/cdk/fesm2020/keycodes.mjs
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const MAC_ENTER = 3;
const BACKSPACE = 8;
const keycodes_TAB = 9;
const NUM_CENTER = 12;
const ENTER = 13;
const SHIFT = 16;
const CONTROL = 17;
const ALT = 18;
const PAUSE = 19;
const CAPS_LOCK = 20;
const ESCAPE = 27;
const SPACE = 32;
const PAGE_UP = 33;
const PAGE_DOWN = 34;
const keycodes_END = 35;
const keycodes_HOME = 36;
const keycodes_LEFT_ARROW = 37;
const keycodes_UP_ARROW = 38;
const keycodes_RIGHT_ARROW = 39;
const keycodes_DOWN_ARROW = 40;
const PLUS_SIGN = 43;
const PRINT_SCREEN = 44;
const INSERT = 45;
const DELETE = 46;
const keycodes_ZERO = 48;
const ONE = 49;
const TWO = 50;
const THREE = 51;
const FOUR = 52;
const FIVE = 53;
const SIX = 54;
const SEVEN = 55;
const EIGHT = 56;
const keycodes_NINE = 57;
const FF_SEMICOLON = 59; // Firefox (Gecko) fires this for semicolon instead of 186
const FF_EQUALS = 61; // Firefox (Gecko) fires this for equals instead of 187
const QUESTION_MARK = 63;
const AT_SIGN = 64;
const keycodes_A = 65;
const B = 66;
const C = 67;
const D = 68;
const E = 69;
const F = 70;
const G = 71;
const H = 72;
const I = 73;
const J = 74;
const K = 75;
const L = 76;
const M = 77;
const N = 78;
const O = 79;
const P = 80;
const Q = 81;
const R = 82;
const S = 83;
const T = 84;
const U = 85;
const V = 86;
const W = 87;
const X = 88;
const Y = 89;
const keycodes_Z = 90;
const META = 91; // WIN_KEY_LEFT
const MAC_WK_CMD_LEFT = 91;
const MAC_WK_CMD_RIGHT = 93;
const CONTEXT_MENU = 93;
const NUMPAD_ZERO = 96;
const NUMPAD_ONE = 97;
const NUMPAD_TWO = 98;
const NUMPAD_THREE = 99;
const NUMPAD_FOUR = 100;
const NUMPAD_FIVE = 101;
const NUMPAD_SIX = 102;
const NUMPAD_SEVEN = 103;
const NUMPAD_EIGHT = 104;
const NUMPAD_NINE = 105;
const NUMPAD_MULTIPLY = 106;
const NUMPAD_PLUS = 107;
const NUMPAD_MINUS = 109;
const NUMPAD_PERIOD = 110;
const NUMPAD_DIVIDE = 111;
const F1 = 112;
const F2 = 113;
const F3 = 114;
const F4 = 115;
const F5 = 116;
const F6 = 117;
const F7 = 118;
const F8 = 119;
const F9 = 120;
const F10 = 121;
const F11 = 122;
const F12 = 123;
const NUM_LOCK = 144;
const SCROLL_LOCK = 145;
const FIRST_MEDIA = 166;
const FF_MINUS = 173;
const MUTE = 173; // Firefox (Gecko) fires 181 for MUTE
const VOLUME_DOWN = 174; // Firefox (Gecko) fires 182 for VOLUME_DOWN
const VOLUME_UP = 175; // Firefox (Gecko) fires 183 for VOLUME_UP
const FF_MUTE = 181;
const FF_VOLUME_DOWN = 182;
const LAST_MEDIA = 183;
const FF_VOLUME_UP = 183;
const SEMICOLON = 186; // Firefox (Gecko) fires 59 for SEMICOLON
const EQUALS = 187; // Firefox (Gecko) fires 61 for EQUALS
const COMMA = 188;
const DASH = 189; // Firefox (Gecko) fires 173 for DASH/MINUS
const PERIOD = 190;
const SLASH = 191;
const APOSTROPHE = 192;
const TILDE = 192;
const OPEN_SQUARE_BRACKET = 219;
const BACKSLASH = 220;
const CLOSE_SQUARE_BRACKET = 221;
const SINGLE_QUOTE = 222;
const MAC_META = 224;

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Checks whether a modifier key is pressed.
 * @param event Event to be checked.
 */
function keycodes_hasModifierKey(event, ...modifiers) {
    if (modifiers.length) {
        return modifiers.some(modifier => event[modifier]);
    }
    return event.altKey || event.shiftKey || event.ctrlKey || event.metaKey;
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=keycodes.mjs.map

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/take.js
var take = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/take.js");
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/util/lift.js
var lift = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/lift.js");
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js
var OperatorSubscriber = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js");
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/filter.js


function filter_filter(predicate, thisArg) {
    return (0,lift/* operate */.e)(function (source, subscriber) {
        var index = 0;
        source.subscribe((0,OperatorSubscriber/* createOperatorSubscriber */.x)(subscriber, function (value) { return predicate.call(thisArg, value, index++) && subscriber.next(value); }));
    });
}
//# sourceMappingURL=filter.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/skip.js

function skip(count) {
    return filter_filter(function (_, index) { return count <= index; });
}
//# sourceMappingURL=skip.js.map
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/util/identity.js
var identity = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/identity.js");
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/distinctUntilChanged.js



function distinctUntilChanged(comparator, keySelector) {
    if (keySelector === void 0) { keySelector = identity/* identity */.y; }
    comparator = comparator !== null && comparator !== void 0 ? comparator : defaultCompare;
    return (0,lift/* operate */.e)(function (source, subscriber) {
        var previousKey;
        var first = true;
        source.subscribe((0,OperatorSubscriber/* createOperatorSubscriber */.x)(subscriber, function (value) {
            var currentKey = keySelector(value);
            if (first || !comparator(previousKey, currentKey)) {
                first = false;
                previousKey = currentKey;
                subscriber.next(value);
            }
        }));
    });
}
function defaultCompare(a, b) {
    return a === b;
}
//# sourceMappingURL=distinctUntilChanged.js.map
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/takeUntil.js
var takeUntil = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/takeUntil.js");
// EXTERNAL MODULE: ./node_modules/@angular/cdk/fesm2020/coercion.mjs
var coercion = __webpack_require__("./node_modules/@angular/cdk/fesm2020/coercion.mjs");
// EXTERNAL MODULE: ./node_modules/@angular/cdk/fesm2020/observers.mjs + 1 modules
var observers = __webpack_require__("./node_modules/@angular/cdk/fesm2020/observers.mjs");
;// CONCATENATED MODULE: ./node_modules/@angular/cdk/fesm2020/a11y.mjs











/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** IDs are delimited by an empty space, as per the spec. */

const ID_DELIMITER = ' ';
/**
 * Adds the given ID to the specified ARIA attribute on an element.
 * Used for attributes such as aria-labelledby, aria-owns, etc.
 */

function addAriaReferencedId(el, attr, id) {
  const ids = getAriaReferenceIds(el, attr);

  if (ids.some(existingId => existingId.trim() == id.trim())) {
    return;
  }

  ids.push(id.trim());
  el.setAttribute(attr, ids.join(ID_DELIMITER));
}
/**
 * Removes the given ID from the specified ARIA attribute on an element.
 * Used for attributes such as aria-labelledby, aria-owns, etc.
 */


function removeAriaReferencedId(el, attr, id) {
  const ids = getAriaReferenceIds(el, attr);
  const filteredIds = ids.filter(val => val != id.trim());

  if (filteredIds.length) {
    el.setAttribute(attr, filteredIds.join(ID_DELIMITER));
  } else {
    el.removeAttribute(attr);
  }
}
/**
 * Gets the list of IDs referenced by the given ARIA attribute on an element.
 * Used for attributes such as aria-labelledby, aria-owns, etc.
 */


function getAriaReferenceIds(el, attr) {
  // Get string array of all individual ids (whitespace delimited) in the attribute value
  return (el.getAttribute(attr) || '').match(/\S+/g) || [];
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * ID used for the body container where all messages are appended.
 * @deprecated No longer being used. To be removed.
 * @breaking-change 14.0.0
 */


const MESSAGES_CONTAINER_ID = 'cdk-describedby-message-container';
/**
 * ID prefix used for each created message element.
 * @deprecated To be turned into a private variable.
 * @breaking-change 14.0.0
 */

const CDK_DESCRIBEDBY_ID_PREFIX = 'cdk-describedby-message';
/**
 * Attribute given to each host element that is described by a message element.
 * @deprecated To be turned into a private variable.
 * @breaking-change 14.0.0
 */

const CDK_DESCRIBEDBY_HOST_ATTRIBUTE = 'cdk-describedby-host';
/** Global incremental identifier for each registered message element. */

let nextId = 0;
/**
 * Utility that creates visually hidden elements with a message content. Useful for elements that
 * want to use aria-describedby to further describe themselves without adding additional visual
 * content.
 */

class AriaDescriber {
  constructor(_document,
  /**
   * @deprecated To be turned into a required parameter.
   * @breaking-change 14.0.0
   */
  _platform) {
    this._platform = _platform;
    /** Map of all registered message elements that have been placed into the document. */

    this._messageRegistry = new Map();
    /** Container for all registered messages. */

    this._messagesContainer = null;
    /** Unique ID for the service. */

    this._id = `${nextId++}`;
    this._document = _document;
  }

  describe(hostElement, message, role) {
    if (!this._canBeDescribed(hostElement, message)) {
      return;
    }

    const key = getKey(message, role);

    if (typeof message !== 'string') {
      // We need to ensure that the element has an ID.
      setMessageId(message);

      this._messageRegistry.set(key, {
        messageElement: message,
        referenceCount: 0
      });
    } else if (!this._messageRegistry.has(key)) {
      this._createMessageElement(message, role);
    }

    if (!this._isElementDescribedByMessage(hostElement, key)) {
      this._addMessageReference(hostElement, key);
    }
  }

  removeDescription(hostElement, message, role) {
    if (!message || !this._isElementNode(hostElement)) {
      return;
    }

    const key = getKey(message, role);

    if (this._isElementDescribedByMessage(hostElement, key)) {
      this._removeMessageReference(hostElement, key);
    } // If the message is a string, it means that it's one that we created for the
    // consumer so we can remove it safely, otherwise we should leave it in place.


    if (typeof message === 'string') {
      const registeredMessage = this._messageRegistry.get(key);

      if (registeredMessage && registeredMessage.referenceCount === 0) {
        this._deleteMessageElement(key);
      }
    }

    if (this._messagesContainer?.childNodes.length === 0) {
      this._messagesContainer.remove();

      this._messagesContainer = null;
    }
  }
  /** Unregisters all created message elements and removes the message container. */


  ngOnDestroy() {
    const describedElements = this._document.querySelectorAll(`[${CDK_DESCRIBEDBY_HOST_ATTRIBUTE}="${this._id}"]`);

    for (let i = 0; i < describedElements.length; i++) {
      this._removeCdkDescribedByReferenceIds(describedElements[i]);

      describedElements[i].removeAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE);
    }

    this._messagesContainer?.remove();
    this._messagesContainer = null;

    this._messageRegistry.clear();
  }
  /**
   * Creates a new element in the visually hidden message container element with the message
   * as its content and adds it to the message registry.
   */


  _createMessageElement(message, role) {
    const messageElement = this._document.createElement('div');

    setMessageId(messageElement);
    messageElement.textContent = message;

    if (role) {
      messageElement.setAttribute('role', role);
    }

    this._createMessagesContainer();

    this._messagesContainer.appendChild(messageElement);

    this._messageRegistry.set(getKey(message, role), {
      messageElement,
      referenceCount: 0
    });
  }
  /** Deletes the message element from the global messages container. */


  _deleteMessageElement(key) {
    this._messageRegistry.get(key)?.messageElement?.remove();

    this._messageRegistry.delete(key);
  }
  /** Creates the global container for all aria-describedby messages. */


  _createMessagesContainer() {
    if (this._messagesContainer) {
      return;
    }

    const containerClassName = 'cdk-describedby-message-container';

    const serverContainers = this._document.querySelectorAll(`.${containerClassName}[platform="server"]`);

    for (let i = 0; i < serverContainers.length; i++) {
      // When going from the server to the client, we may end up in a situation where there's
      // already a container on the page, but we don't have a reference to it. Clear the
      // old container so we don't get duplicates. Doing this, instead of emptying the previous
      // container, should be slightly faster.
      serverContainers[i].remove();
    }

    const messagesContainer = this._document.createElement('div'); // We add `visibility: hidden` in order to prevent text in this container from
    // being searchable by the browser's Ctrl + F functionality.
    // Screen-readers will still read the description for elements with aria-describedby even
    // when the description element is not visible.


    messagesContainer.style.visibility = 'hidden'; // Even though we use `visibility: hidden`, we still apply `cdk-visually-hidden` so that
    // the description element doesn't impact page layout.

    messagesContainer.classList.add(containerClassName);
    messagesContainer.classList.add('cdk-visually-hidden'); // @breaking-change 14.0.0 Remove null check for `_platform`.

    if (this._platform && !this._platform.isBrowser) {
      messagesContainer.setAttribute('platform', 'server');
    }

    this._document.body.appendChild(messagesContainer);

    this._messagesContainer = messagesContainer;
  }
  /** Removes all cdk-describedby messages that are hosted through the element. */


  _removeCdkDescribedByReferenceIds(element) {
    // Remove all aria-describedby reference IDs that are prefixed by CDK_DESCRIBEDBY_ID_PREFIX
    const originalReferenceIds = getAriaReferenceIds(element, 'aria-describedby').filter(id => id.indexOf(CDK_DESCRIBEDBY_ID_PREFIX) != 0);
    element.setAttribute('aria-describedby', originalReferenceIds.join(' '));
  }
  /**
   * Adds a message reference to the element using aria-describedby and increments the registered
   * message's reference count.
   */


  _addMessageReference(element, key) {
    const registeredMessage = this._messageRegistry.get(key); // Add the aria-describedby reference and set the
    // describedby_host attribute to mark the element.


    addAriaReferencedId(element, 'aria-describedby', registeredMessage.messageElement.id);
    element.setAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE, this._id);
    registeredMessage.referenceCount++;
  }
  /**
   * Removes a message reference from the element using aria-describedby
   * and decrements the registered message's reference count.
   */


  _removeMessageReference(element, key) {
    const registeredMessage = this._messageRegistry.get(key);

    registeredMessage.referenceCount--;
    removeAriaReferencedId(element, 'aria-describedby', registeredMessage.messageElement.id);
    element.removeAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE);
  }
  /** Returns true if the element has been described by the provided message ID. */


  _isElementDescribedByMessage(element, key) {
    const referenceIds = getAriaReferenceIds(element, 'aria-describedby');

    const registeredMessage = this._messageRegistry.get(key);

    const messageId = registeredMessage && registeredMessage.messageElement.id;
    return !!messageId && referenceIds.indexOf(messageId) != -1;
  }
  /** Determines whether a message can be described on a particular element. */


  _canBeDescribed(element, message) {
    if (!this._isElementNode(element)) {
      return false;
    }

    if (message && typeof message === 'object') {
      // We'd have to make some assumptions about the description element's text, if the consumer
      // passed in an element. Assume that if an element is passed in, the consumer has verified
      // that it can be used as a description.
      return true;
    }

    const trimmedMessage = message == null ? '' : `${message}`.trim();
    const ariaLabel = element.getAttribute('aria-label'); // We shouldn't set descriptions if they're exactly the same as the `aria-label` of the
    // element, because screen readers will end up reading out the same text twice in a row.

    return trimmedMessage ? !ariaLabel || ariaLabel.trim() !== trimmedMessage : false;
  }
  /** Checks whether a node is an Element node. */


  _isElementNode(element) {
    return element.nodeType === this._document.ELEMENT_NODE;
  }

}

AriaDescriber.ɵfac = function AriaDescriber_Factory(t) {
  return new (t || AriaDescriber)(core["ɵɵinject"](common/* DOCUMENT */.K0), core["ɵɵinject"](platform/* Platform */.t4));
};

AriaDescriber.ɵprov = /* @__PURE__ */core["ɵɵdefineInjectable"]({
  token: AriaDescriber,
  factory: AriaDescriber.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && core["ɵsetClassMetadata"](AriaDescriber, [{
    type: core.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: core.Inject,
        args: [common/* DOCUMENT */.K0]
      }]
    }, {
      type: platform/* Platform */.t4
    }];
  }, null);
})();
/** Gets a key that can be used to look messages up in the registry. */


function getKey(message, role) {
  return typeof message === 'string' ? `${role || ''}/${message}` : message;
}
/** Assigns a unique ID to an element, if it doesn't have one already. */


function setMessageId(element) {
  if (!element.id) {
    element.id = `${CDK_DESCRIBEDBY_ID_PREFIX}-${nextId++}`;
  }
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * This class manages keyboard events for selectable lists. If you pass it a query list
 * of items, it will set the active item correctly when arrow events occur.
 */


class ListKeyManager {
  constructor(_items) {
    this._items = _items;
    this._activeItemIndex = -1;
    this._activeItem = null;
    this._wrap = false;
    this._letterKeyStream = new Subject();
    this._typeaheadSubscription = Subscription.EMPTY;
    this._vertical = true;
    this._allowedModifierKeys = [];
    this._homeAndEnd = false;
    /**
     * Predicate function that can be used to check whether an item should be skipped
     * by the key manager. By default, disabled items are skipped.
     */

    this._skipPredicateFn = item => item.disabled; // Buffer for the letters that the user has pressed when the typeahead option is turned on.


    this._pressedLetters = [];
    /**
     * Stream that emits any time the TAB key is pressed, so components can react
     * when focus is shifted off of the list.
     */

    this.tabOut = new Subject();
    /** Stream that emits whenever the active item of the list manager changes. */

    this.change = new Subject(); // We allow for the items to be an array because, in some cases, the consumer may
    // not have access to a QueryList of the items they want to manage (e.g. when the
    // items aren't being collected via `ViewChildren` or `ContentChildren`).

    if (_items instanceof QueryList) {
      _items.changes.subscribe(newItems => {
        if (this._activeItem) {
          const itemArray = newItems.toArray();
          const newIndex = itemArray.indexOf(this._activeItem);

          if (newIndex > -1 && newIndex !== this._activeItemIndex) {
            this._activeItemIndex = newIndex;
          }
        }
      });
    }
  }
  /**
   * Sets the predicate function that determines which items should be skipped by the
   * list key manager.
   * @param predicate Function that determines whether the given item should be skipped.
   */


  skipPredicate(predicate) {
    this._skipPredicateFn = predicate;
    return this;
  }
  /**
   * Configures wrapping mode, which determines whether the active item will wrap to
   * the other end of list when there are no more items in the given direction.
   * @param shouldWrap Whether the list should wrap when reaching the end.
   */


  withWrap(shouldWrap = true) {
    this._wrap = shouldWrap;
    return this;
  }
  /**
   * Configures whether the key manager should be able to move the selection vertically.
   * @param enabled Whether vertical selection should be enabled.
   */


  withVerticalOrientation(enabled = true) {
    this._vertical = enabled;
    return this;
  }
  /**
   * Configures the key manager to move the selection horizontally.
   * Passing in `null` will disable horizontal movement.
   * @param direction Direction in which the selection can be moved.
   */


  withHorizontalOrientation(direction) {
    this._horizontal = direction;
    return this;
  }
  /**
   * Modifier keys which are allowed to be held down and whose default actions will be prevented
   * as the user is pressing the arrow keys. Defaults to not allowing any modifier keys.
   */


  withAllowedModifierKeys(keys) {
    this._allowedModifierKeys = keys;
    return this;
  }
  /**
   * Turns on typeahead mode which allows users to set the active item by typing.
   * @param debounceInterval Time to wait after the last keystroke before setting the active item.
   */


  withTypeAhead(debounceInterval = 200) {
    if ((typeof ngDevMode === 'undefined' || ngDevMode) && this._items.length && this._items.some(item => typeof item.getLabel !== 'function')) {
      throw Error('ListKeyManager items in typeahead mode must implement the `getLabel` method.');
    }

    this._typeaheadSubscription.unsubscribe(); // Debounce the presses of non-navigational keys, collect the ones that correspond to letters
    // and convert those letters back into a string. Afterwards find the first item that starts
    // with that string and select it.


    this._typeaheadSubscription = this._letterKeyStream.pipe(tap(letter => this._pressedLetters.push(letter)), debounceTime(debounceInterval), filter(() => this._pressedLetters.length > 0), map(() => this._pressedLetters.join(''))).subscribe(inputString => {
      const items = this._getItemsArray(); // Start at 1 because we want to start searching at the item immediately
      // following the current active item.


      for (let i = 1; i < items.length + 1; i++) {
        const index = (this._activeItemIndex + i) % items.length;
        const item = items[index];

        if (!this._skipPredicateFn(item) && item.getLabel().toUpperCase().trim().indexOf(inputString) === 0) {
          this.setActiveItem(index);
          break;
        }
      }

      this._pressedLetters = [];
    });
    return this;
  }
  /**
   * Configures the key manager to activate the first and last items
   * respectively when the Home or End key is pressed.
   * @param enabled Whether pressing the Home or End key activates the first/last item.
   */


  withHomeAndEnd(enabled = true) {
    this._homeAndEnd = enabled;
    return this;
  }

  setActiveItem(item) {
    const previousActiveItem = this._activeItem;
    this.updateActiveItem(item);

    if (this._activeItem !== previousActiveItem) {
      this.change.next(this._activeItemIndex);
    }
  }
  /**
   * Sets the active item depending on the key event passed in.
   * @param event Keyboard event to be used for determining which element should be active.
   */


  onKeydown(event) {
    const keyCode = event.keyCode;
    const modifiers = ['altKey', 'ctrlKey', 'metaKey', 'shiftKey'];
    const isModifierAllowed = modifiers.every(modifier => {
      return !event[modifier] || this._allowedModifierKeys.indexOf(modifier) > -1;
    });

    switch (keyCode) {
      case TAB:
        this.tabOut.next();
        return;

      case DOWN_ARROW:
        if (this._vertical && isModifierAllowed) {
          this.setNextItemActive();
          break;
        } else {
          return;
        }

      case UP_ARROW:
        if (this._vertical && isModifierAllowed) {
          this.setPreviousItemActive();
          break;
        } else {
          return;
        }

      case RIGHT_ARROW:
        if (this._horizontal && isModifierAllowed) {
          this._horizontal === 'rtl' ? this.setPreviousItemActive() : this.setNextItemActive();
          break;
        } else {
          return;
        }

      case LEFT_ARROW:
        if (this._horizontal && isModifierAllowed) {
          this._horizontal === 'rtl' ? this.setNextItemActive() : this.setPreviousItemActive();
          break;
        } else {
          return;
        }

      case HOME:
        if (this._homeAndEnd && isModifierAllowed) {
          this.setFirstItemActive();
          break;
        } else {
          return;
        }

      case END:
        if (this._homeAndEnd && isModifierAllowed) {
          this.setLastItemActive();
          break;
        } else {
          return;
        }

      default:
        if (isModifierAllowed || hasModifierKey(event, 'shiftKey')) {
          // Attempt to use the `event.key` which also maps it to the user's keyboard language,
          // otherwise fall back to resolving alphanumeric characters via the keyCode.
          if (event.key && event.key.length === 1) {
            this._letterKeyStream.next(event.key.toLocaleUpperCase());
          } else if (keyCode >= A && keyCode <= Z || keyCode >= ZERO && keyCode <= NINE) {
            this._letterKeyStream.next(String.fromCharCode(keyCode));
          }
        } // Note that we return here, in order to avoid preventing
        // the default action of non-navigational keys.


        return;
    }

    this._pressedLetters = [];
    event.preventDefault();
  }
  /** Index of the currently active item. */


  get activeItemIndex() {
    return this._activeItemIndex;
  }
  /** The active item. */


  get activeItem() {
    return this._activeItem;
  }
  /** Gets whether the user is currently typing into the manager using the typeahead feature. */


  isTyping() {
    return this._pressedLetters.length > 0;
  }
  /** Sets the active item to the first enabled item in the list. */


  setFirstItemActive() {
    this._setActiveItemByIndex(0, 1);
  }
  /** Sets the active item to the last enabled item in the list. */


  setLastItemActive() {
    this._setActiveItemByIndex(this._items.length - 1, -1);
  }
  /** Sets the active item to the next enabled item in the list. */


  setNextItemActive() {
    this._activeItemIndex < 0 ? this.setFirstItemActive() : this._setActiveItemByDelta(1);
  }
  /** Sets the active item to a previous enabled item in the list. */


  setPreviousItemActive() {
    this._activeItemIndex < 0 && this._wrap ? this.setLastItemActive() : this._setActiveItemByDelta(-1);
  }

  updateActiveItem(item) {
    const itemArray = this._getItemsArray();

    const index = typeof item === 'number' ? item : itemArray.indexOf(item);
    const activeItem = itemArray[index]; // Explicitly check for `null` and `undefined` because other falsy values are valid.

    this._activeItem = activeItem == null ? null : activeItem;
    this._activeItemIndex = index;
  }
  /**
   * This method sets the active item, given a list of items and the delta between the
   * currently active item and the new active item. It will calculate differently
   * depending on whether wrap mode is turned on.
   */


  _setActiveItemByDelta(delta) {
    this._wrap ? this._setActiveInWrapMode(delta) : this._setActiveInDefaultMode(delta);
  }
  /**
   * Sets the active item properly given "wrap" mode. In other words, it will continue to move
   * down the list until it finds an item that is not disabled, and it will wrap if it
   * encounters either end of the list.
   */


  _setActiveInWrapMode(delta) {
    const items = this._getItemsArray();

    for (let i = 1; i <= items.length; i++) {
      const index = (this._activeItemIndex + delta * i + items.length) % items.length;
      const item = items[index];

      if (!this._skipPredicateFn(item)) {
        this.setActiveItem(index);
        return;
      }
    }
  }
  /**
   * Sets the active item properly given the default mode. In other words, it will
   * continue to move down the list until it finds an item that is not disabled. If
   * it encounters either end of the list, it will stop and not wrap.
   */


  _setActiveInDefaultMode(delta) {
    this._setActiveItemByIndex(this._activeItemIndex + delta, delta);
  }
  /**
   * Sets the active item to the first enabled item starting at the index specified. If the
   * item is disabled, it will move in the fallbackDelta direction until it either
   * finds an enabled item or encounters the end of the list.
   */


  _setActiveItemByIndex(index, fallbackDelta) {
    const items = this._getItemsArray();

    if (!items[index]) {
      return;
    }

    while (this._skipPredicateFn(items[index])) {
      index += fallbackDelta;

      if (!items[index]) {
        return;
      }
    }

    this.setActiveItem(index);
  }
  /** Returns the items as an array. */


  _getItemsArray() {
    return this._items instanceof QueryList ? this._items.toArray() : this._items;
  }

}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


class ActiveDescendantKeyManager extends (/* unused pure expression or super */ null && (ListKeyManager)) {
  setActiveItem(index) {
    if (this.activeItem) {
      this.activeItem.setInactiveStyles();
    }

    super.setActiveItem(index);

    if (this.activeItem) {
      this.activeItem.setActiveStyles();
    }
  }

}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


class FocusKeyManager extends (/* unused pure expression or super */ null && (ListKeyManager)) {
  constructor() {
    super(...arguments);
    this._origin = 'program';
  }
  /**
   * Sets the focus origin that will be passed in to the items for any subsequent `focus` calls.
   * @param origin Focus origin to be used when focusing items.
   */


  setFocusOrigin(origin) {
    this._origin = origin;
    return this;
  }

  setActiveItem(item) {
    super.setActiveItem(item);

    if (this.activeItem) {
      this.activeItem.focus(this._origin);
    }
  }

}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Configuration for the isFocusable method.
 */


class IsFocusableConfig {
  constructor() {
    /**
     * Whether to count an element as focusable even if it is not currently visible.
     */
    this.ignoreVisibility = false;
  }

} // The InteractivityChecker leans heavily on the ally.js accessibility utilities.
// Methods like `isTabbable` are only covering specific edge-cases for the browsers which are
// supported.

/**
 * Utility for checking the interactivity of an element, such as whether is is focusable or
 * tabbable.
 */


class InteractivityChecker {
  constructor(_platform) {
    this._platform = _platform;
  }
  /**
   * Gets whether an element is disabled.
   *
   * @param element Element to be checked.
   * @returns Whether the element is disabled.
   */


  isDisabled(element) {
    // This does not capture some cases, such as a non-form control with a disabled attribute or
    // a form control inside of a disabled form, but should capture the most common cases.
    return element.hasAttribute('disabled');
  }
  /**
   * Gets whether an element is visible for the purposes of interactivity.
   *
   * This will capture states like `display: none` and `visibility: hidden`, but not things like
   * being clipped by an `overflow: hidden` parent or being outside the viewport.
   *
   * @returns Whether the element is visible.
   */


  isVisible(element) {
    return hasGeometry(element) && getComputedStyle(element).visibility === 'visible';
  }
  /**
   * Gets whether an element can be reached via Tab key.
   * Assumes that the element has already been checked with isFocusable.
   *
   * @param element Element to be checked.
   * @returns Whether the element is tabbable.
   */


  isTabbable(element) {
    // Nothing is tabbable on the server 😎
    if (!this._platform.isBrowser) {
      return false;
    }

    const frameElement = getFrameElement(getWindow(element));

    if (frameElement) {
      // Frame elements inherit their tabindex onto all child elements.
      if (getTabIndexValue(frameElement) === -1) {
        return false;
      } // Browsers disable tabbing to an element inside of an invisible frame.


      if (!this.isVisible(frameElement)) {
        return false;
      }
    }

    let nodeName = element.nodeName.toLowerCase();
    let tabIndexValue = getTabIndexValue(element);

    if (element.hasAttribute('contenteditable')) {
      return tabIndexValue !== -1;
    }

    if (nodeName === 'iframe' || nodeName === 'object') {
      // The frame or object's content may be tabbable depending on the content, but it's
      // not possibly to reliably detect the content of the frames. We always consider such
      // elements as non-tabbable.
      return false;
    } // In iOS, the browser only considers some specific elements as tabbable.


    if (this._platform.WEBKIT && this._platform.IOS && !isPotentiallyTabbableIOS(element)) {
      return false;
    }

    if (nodeName === 'audio') {
      // Audio elements without controls enabled are never tabbable, regardless
      // of the tabindex attribute explicitly being set.
      if (!element.hasAttribute('controls')) {
        return false;
      } // Audio elements with controls are by default tabbable unless the
      // tabindex attribute is set to `-1` explicitly.


      return tabIndexValue !== -1;
    }

    if (nodeName === 'video') {
      // For all video elements, if the tabindex attribute is set to `-1`, the video
      // is not tabbable. Note: We cannot rely on the default `HTMLElement.tabIndex`
      // property as that one is set to `-1` in Chrome, Edge and Safari v13.1. The
      // tabindex attribute is the source of truth here.
      if (tabIndexValue === -1) {
        return false;
      } // If the tabindex is explicitly set, and not `-1` (as per check before), the
      // video element is always tabbable (regardless of whether it has controls or not).


      if (tabIndexValue !== null) {
        return true;
      } // Otherwise (when no explicit tabindex is set), a video is only tabbable if it
      // has controls enabled. Firefox is special as videos are always tabbable regardless
      // of whether there are controls or not.


      return this._platform.FIREFOX || element.hasAttribute('controls');
    }

    return element.tabIndex >= 0;
  }
  /**
   * Gets whether an element can be focused by the user.
   *
   * @param element Element to be checked.
   * @param config The config object with options to customize this method's behavior
   * @returns Whether the element is focusable.
   */


  isFocusable(element, config) {
    // Perform checks in order of left to most expensive.
    // Again, naive approach that does not capture many edge cases and browser quirks.
    return isPotentiallyFocusable(element) && !this.isDisabled(element) && (config?.ignoreVisibility || this.isVisible(element));
  }

}

InteractivityChecker.ɵfac = function InteractivityChecker_Factory(t) {
  return new (t || InteractivityChecker)(core["ɵɵinject"](platform/* Platform */.t4));
};

InteractivityChecker.ɵprov = /* @__PURE__ */core["ɵɵdefineInjectable"]({
  token: InteractivityChecker,
  factory: InteractivityChecker.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && core["ɵsetClassMetadata"](InteractivityChecker, [{
    type: core.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: platform/* Platform */.t4
    }];
  }, null);
})();
/**
 * Returns the frame element from a window object. Since browsers like MS Edge throw errors if
 * the frameElement property is being accessed from a different host address, this property
 * should be accessed carefully.
 */


function getFrameElement(window) {
  try {
    return window.frameElement;
  } catch {
    return null;
  }
}
/** Checks whether the specified element has any geometry / rectangles. */


function hasGeometry(element) {
  // Use logic from jQuery to check for an invisible element.
  // See https://github.com/jquery/jquery/blob/master/src/css/hiddenVisibleSelectors.js#L12
  return !!(element.offsetWidth || element.offsetHeight || typeof element.getClientRects === 'function' && element.getClientRects().length);
}
/** Gets whether an element's  */


function isNativeFormElement(element) {
  let nodeName = element.nodeName.toLowerCase();
  return nodeName === 'input' || nodeName === 'select' || nodeName === 'button' || nodeName === 'textarea';
}
/** Gets whether an element is an `<input type="hidden">`. */


function isHiddenInput(element) {
  return isInputElement(element) && element.type == 'hidden';
}
/** Gets whether an element is an anchor that has an href attribute. */


function isAnchorWithHref(element) {
  return isAnchorElement(element) && element.hasAttribute('href');
}
/** Gets whether an element is an input element. */


function isInputElement(element) {
  return element.nodeName.toLowerCase() == 'input';
}
/** Gets whether an element is an anchor element. */


function isAnchorElement(element) {
  return element.nodeName.toLowerCase() == 'a';
}
/** Gets whether an element has a valid tabindex. */


function hasValidTabIndex(element) {
  if (!element.hasAttribute('tabindex') || element.tabIndex === undefined) {
    return false;
  }

  let tabIndex = element.getAttribute('tabindex');
  return !!(tabIndex && !isNaN(parseInt(tabIndex, 10)));
}
/**
 * Returns the parsed tabindex from the element attributes instead of returning the
 * evaluated tabindex from the browsers defaults.
 */


function getTabIndexValue(element) {
  if (!hasValidTabIndex(element)) {
    return null;
  } // See browser issue in Gecko https://bugzilla.mozilla.org/show_bug.cgi?id=1128054


  const tabIndex = parseInt(element.getAttribute('tabindex') || '', 10);
  return isNaN(tabIndex) ? -1 : tabIndex;
}
/** Checks whether the specified element is potentially tabbable on iOS */


function isPotentiallyTabbableIOS(element) {
  let nodeName = element.nodeName.toLowerCase();
  let inputType = nodeName === 'input' && element.type;
  return inputType === 'text' || inputType === 'password' || nodeName === 'select' || nodeName === 'textarea';
}
/**
 * Gets whether an element is potentially focusable without taking current visible/disabled state
 * into account.
 */


function isPotentiallyFocusable(element) {
  // Inputs are potentially focusable *unless* they're type="hidden".
  if (isHiddenInput(element)) {
    return false;
  }

  return isNativeFormElement(element) || isAnchorWithHref(element) || element.hasAttribute('contenteditable') || hasValidTabIndex(element);
}
/** Gets the parent window of a DOM node with regards of being inside of an iframe. */


function getWindow(node) {
  // ownerDocument is null if `node` itself *is* a document.
  return node.ownerDocument && node.ownerDocument.defaultView || window;
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Class that allows for trapping focus within a DOM element.
 *
 * This class currently uses a relatively simple approach to focus trapping.
 * It assumes that the tab order is the same as DOM order, which is not necessarily true.
 * Things like `tabIndex > 0`, flex `order`, and shadow roots can cause the two to be misaligned.
 *
 * @deprecated Use `ConfigurableFocusTrap` instead.
 * @breaking-change 11.0.0
 */


class FocusTrap {
  constructor(_element, _checker, _ngZone, _document, deferAnchors = false) {
    this._element = _element;
    this._checker = _checker;
    this._ngZone = _ngZone;
    this._document = _document;
    this._hasAttached = false; // Event listeners for the anchors. Need to be regular functions so that we can unbind them later.

    this.startAnchorListener = () => this.focusLastTabbableElement();

    this.endAnchorListener = () => this.focusFirstTabbableElement();

    this._enabled = true;

    if (!deferAnchors) {
      this.attachAnchors();
    }
  }
  /** Whether the focus trap is active. */


  get enabled() {
    return this._enabled;
  }

  set enabled(value) {
    this._enabled = value;

    if (this._startAnchor && this._endAnchor) {
      this._toggleAnchorTabIndex(value, this._startAnchor);

      this._toggleAnchorTabIndex(value, this._endAnchor);
    }
  }
  /** Destroys the focus trap by cleaning up the anchors. */


  destroy() {
    const startAnchor = this._startAnchor;
    const endAnchor = this._endAnchor;

    if (startAnchor) {
      startAnchor.removeEventListener('focus', this.startAnchorListener);
      startAnchor.remove();
    }

    if (endAnchor) {
      endAnchor.removeEventListener('focus', this.endAnchorListener);
      endAnchor.remove();
    }

    this._startAnchor = this._endAnchor = null;
    this._hasAttached = false;
  }
  /**
   * Inserts the anchors into the DOM. This is usually done automatically
   * in the constructor, but can be deferred for cases like directives with `*ngIf`.
   * @returns Whether the focus trap managed to attach successfully. This may not be the case
   * if the target element isn't currently in the DOM.
   */


  attachAnchors() {
    // If we're not on the browser, there can be no focus to trap.
    if (this._hasAttached) {
      return true;
    }

    this._ngZone.runOutsideAngular(() => {
      if (!this._startAnchor) {
        this._startAnchor = this._createAnchor();

        this._startAnchor.addEventListener('focus', this.startAnchorListener);
      }

      if (!this._endAnchor) {
        this._endAnchor = this._createAnchor();

        this._endAnchor.addEventListener('focus', this.endAnchorListener);
      }
    });

    if (this._element.parentNode) {
      this._element.parentNode.insertBefore(this._startAnchor, this._element);

      this._element.parentNode.insertBefore(this._endAnchor, this._element.nextSibling);

      this._hasAttached = true;
    }

    return this._hasAttached;
  }
  /**
   * Waits for the zone to stabilize, then focuses the first tabbable element.
   * @returns Returns a promise that resolves with a boolean, depending
   * on whether focus was moved successfully.
   */


  focusInitialElementWhenReady(options) {
    return new Promise(resolve => {
      this._executeOnStable(() => resolve(this.focusInitialElement(options)));
    });
  }
  /**
   * Waits for the zone to stabilize, then focuses
   * the first tabbable element within the focus trap region.
   * @returns Returns a promise that resolves with a boolean, depending
   * on whether focus was moved successfully.
   */


  focusFirstTabbableElementWhenReady(options) {
    return new Promise(resolve => {
      this._executeOnStable(() => resolve(this.focusFirstTabbableElement(options)));
    });
  }
  /**
   * Waits for the zone to stabilize, then focuses
   * the last tabbable element within the focus trap region.
   * @returns Returns a promise that resolves with a boolean, depending
   * on whether focus was moved successfully.
   */


  focusLastTabbableElementWhenReady(options) {
    return new Promise(resolve => {
      this._executeOnStable(() => resolve(this.focusLastTabbableElement(options)));
    });
  }
  /**
   * Get the specified boundary element of the trapped region.
   * @param bound The boundary to get (start or end of trapped region).
   * @returns The boundary element.
   */


  _getRegionBoundary(bound) {
    // Contains the deprecated version of selector, for temporary backwards comparability.
    const markers = this._element.querySelectorAll(`[cdk-focus-region-${bound}], ` + `[cdkFocusRegion${bound}], ` + `[cdk-focus-${bound}]`);

    if (typeof ngDevMode === 'undefined' || ngDevMode) {
      for (let i = 0; i < markers.length; i++) {
        // @breaking-change 8.0.0
        if (markers[i].hasAttribute(`cdk-focus-${bound}`)) {
          console.warn(`Found use of deprecated attribute 'cdk-focus-${bound}', ` + `use 'cdkFocusRegion${bound}' instead. The deprecated ` + `attribute will be removed in 8.0.0.`, markers[i]);
        } else if (markers[i].hasAttribute(`cdk-focus-region-${bound}`)) {
          console.warn(`Found use of deprecated attribute 'cdk-focus-region-${bound}', ` + `use 'cdkFocusRegion${bound}' instead. The deprecated attribute ` + `will be removed in 8.0.0.`, markers[i]);
        }
      }
    }

    if (bound == 'start') {
      return markers.length ? markers[0] : this._getFirstTabbableElement(this._element);
    }

    return markers.length ? markers[markers.length - 1] : this._getLastTabbableElement(this._element);
  }
  /**
   * Focuses the element that should be focused when the focus trap is initialized.
   * @returns Whether focus was moved successfully.
   */


  focusInitialElement(options) {
    // Contains the deprecated version of selector, for temporary backwards comparability.
    const redirectToElement = this._element.querySelector(`[cdk-focus-initial], ` + `[cdkFocusInitial]`);

    if (redirectToElement) {
      // @breaking-change 8.0.0
      if ((typeof ngDevMode === 'undefined' || ngDevMode) && redirectToElement.hasAttribute(`cdk-focus-initial`)) {
        console.warn(`Found use of deprecated attribute 'cdk-focus-initial', ` + `use 'cdkFocusInitial' instead. The deprecated attribute ` + `will be removed in 8.0.0`, redirectToElement);
      } // Warn the consumer if the element they've pointed to
      // isn't focusable, when not in production mode.


      if ((typeof ngDevMode === 'undefined' || ngDevMode) && !this._checker.isFocusable(redirectToElement)) {
        console.warn(`Element matching '[cdkFocusInitial]' is not focusable.`, redirectToElement);
      }

      if (!this._checker.isFocusable(redirectToElement)) {
        const focusableChild = this._getFirstTabbableElement(redirectToElement);

        focusableChild?.focus(options);
        return !!focusableChild;
      }

      redirectToElement.focus(options);
      return true;
    }

    return this.focusFirstTabbableElement(options);
  }
  /**
   * Focuses the first tabbable element within the focus trap region.
   * @returns Whether focus was moved successfully.
   */


  focusFirstTabbableElement(options) {
    const redirectToElement = this._getRegionBoundary('start');

    if (redirectToElement) {
      redirectToElement.focus(options);
    }

    return !!redirectToElement;
  }
  /**
   * Focuses the last tabbable element within the focus trap region.
   * @returns Whether focus was moved successfully.
   */


  focusLastTabbableElement(options) {
    const redirectToElement = this._getRegionBoundary('end');

    if (redirectToElement) {
      redirectToElement.focus(options);
    }

    return !!redirectToElement;
  }
  /**
   * Checks whether the focus trap has successfully been attached.
   */


  hasAttached() {
    return this._hasAttached;
  }
  /** Get the first tabbable element from a DOM subtree (inclusive). */


  _getFirstTabbableElement(root) {
    if (this._checker.isFocusable(root) && this._checker.isTabbable(root)) {
      return root;
    }

    const children = root.children;

    for (let i = 0; i < children.length; i++) {
      const tabbableChild = children[i].nodeType === this._document.ELEMENT_NODE ? this._getFirstTabbableElement(children[i]) : null;

      if (tabbableChild) {
        return tabbableChild;
      }
    }

    return null;
  }
  /** Get the last tabbable element from a DOM subtree (inclusive). */


  _getLastTabbableElement(root) {
    if (this._checker.isFocusable(root) && this._checker.isTabbable(root)) {
      return root;
    } // Iterate in reverse DOM order.


    const children = root.children;

    for (let i = children.length - 1; i >= 0; i--) {
      const tabbableChild = children[i].nodeType === this._document.ELEMENT_NODE ? this._getLastTabbableElement(children[i]) : null;

      if (tabbableChild) {
        return tabbableChild;
      }
    }

    return null;
  }
  /** Creates an anchor element. */


  _createAnchor() {
    const anchor = this._document.createElement('div');

    this._toggleAnchorTabIndex(this._enabled, anchor);

    anchor.classList.add('cdk-visually-hidden');
    anchor.classList.add('cdk-focus-trap-anchor');
    anchor.setAttribute('aria-hidden', 'true');
    return anchor;
  }
  /**
   * Toggles the `tabindex` of an anchor, based on the enabled state of the focus trap.
   * @param isEnabled Whether the focus trap is enabled.
   * @param anchor Anchor on which to toggle the tabindex.
   */


  _toggleAnchorTabIndex(isEnabled, anchor) {
    // Remove the tabindex completely, rather than setting it to -1, because if the
    // element has a tabindex, the user might still hit it when navigating with the arrow keys.
    isEnabled ? anchor.setAttribute('tabindex', '0') : anchor.removeAttribute('tabindex');
  }
  /**
   * Toggles the`tabindex` of both anchors to either trap Tab focus or allow it to escape.
   * @param enabled: Whether the anchors should trap Tab.
   */


  toggleAnchors(enabled) {
    if (this._startAnchor && this._endAnchor) {
      this._toggleAnchorTabIndex(enabled, this._startAnchor);

      this._toggleAnchorTabIndex(enabled, this._endAnchor);
    }
  }
  /** Executes a function when the zone is stable. */


  _executeOnStable(fn) {
    if (this._ngZone.isStable) {
      fn();
    } else {
      this._ngZone.onStable.pipe((0,take/* take */.q)(1)).subscribe(fn);
    }
  }

}
/**
 * Factory that allows easy instantiation of focus traps.
 * @deprecated Use `ConfigurableFocusTrapFactory` instead.
 * @breaking-change 11.0.0
 */


class FocusTrapFactory {
  constructor(_checker, _ngZone, _document) {
    this._checker = _checker;
    this._ngZone = _ngZone;
    this._document = _document;
  }
  /**
   * Creates a focus-trapped region around the given element.
   * @param element The element around which focus will be trapped.
   * @param deferCaptureElements Defers the creation of focus-capturing elements to be done
   *     manually by the user.
   * @returns The created focus trap instance.
   */


  create(element, deferCaptureElements = false) {
    return new FocusTrap(element, this._checker, this._ngZone, this._document, deferCaptureElements);
  }

}

FocusTrapFactory.ɵfac = function FocusTrapFactory_Factory(t) {
  return new (t || FocusTrapFactory)(core["ɵɵinject"](InteractivityChecker), core["ɵɵinject"](core.NgZone), core["ɵɵinject"](common/* DOCUMENT */.K0));
};

FocusTrapFactory.ɵprov = /* @__PURE__ */core["ɵɵdefineInjectable"]({
  token: FocusTrapFactory,
  factory: FocusTrapFactory.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && core["ɵsetClassMetadata"](FocusTrapFactory, [{
    type: core.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: InteractivityChecker
    }, {
      type: core.NgZone
    }, {
      type: undefined,
      decorators: [{
        type: core.Inject,
        args: [common/* DOCUMENT */.K0]
      }]
    }];
  }, null);
})();
/** Directive for trapping focus within a region. */


class CdkTrapFocus {
  constructor(_elementRef, _focusTrapFactory,
  /**
   * @deprecated No longer being used. To be removed.
   * @breaking-change 13.0.0
   */
  _document) {
    this._elementRef = _elementRef;
    this._focusTrapFactory = _focusTrapFactory;
    /** Previously focused element to restore focus to upon destroy when using autoCapture. */

    this._previouslyFocusedElement = null;
    this.focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement, true);
  }
  /** Whether the focus trap is active. */


  get enabled() {
    return this.focusTrap.enabled;
  }

  set enabled(value) {
    this.focusTrap.enabled = (0,coercion/* coerceBooleanProperty */.Ig)(value);
  }
  /**
   * Whether the directive should automatically move focus into the trapped region upon
   * initialization and return focus to the previous activeElement upon destruction.
   */


  get autoCapture() {
    return this._autoCapture;
  }

  set autoCapture(value) {
    this._autoCapture = (0,coercion/* coerceBooleanProperty */.Ig)(value);
  }

  ngOnDestroy() {
    this.focusTrap.destroy(); // If we stored a previously focused element when using autoCapture, return focus to that
    // element now that the trapped region is being destroyed.

    if (this._previouslyFocusedElement) {
      this._previouslyFocusedElement.focus();

      this._previouslyFocusedElement = null;
    }
  }

  ngAfterContentInit() {
    this.focusTrap.attachAnchors();

    if (this.autoCapture) {
      this._captureFocus();
    }
  }

  ngDoCheck() {
    if (!this.focusTrap.hasAttached()) {
      this.focusTrap.attachAnchors();
    }
  }

  ngOnChanges(changes) {
    const autoCaptureChange = changes['autoCapture'];

    if (autoCaptureChange && !autoCaptureChange.firstChange && this.autoCapture && this.focusTrap.hasAttached()) {
      this._captureFocus();
    }
  }

  _captureFocus() {
    this._previouslyFocusedElement = (0,platform/* _getFocusedElementPierceShadowDom */.ht)();
    this.focusTrap.focusInitialElementWhenReady();
  }

}

CdkTrapFocus.ɵfac = function CdkTrapFocus_Factory(t) {
  return new (t || CdkTrapFocus)(core["ɵɵdirectiveInject"](core.ElementRef), core["ɵɵdirectiveInject"](FocusTrapFactory), core["ɵɵdirectiveInject"](common/* DOCUMENT */.K0));
};

CdkTrapFocus.ɵdir = /* @__PURE__ */core["ɵɵdefineDirective"]({
  type: CdkTrapFocus,
  selectors: [["", "cdkTrapFocus", ""]],
  inputs: {
    enabled: ["cdkTrapFocus", "enabled"],
    autoCapture: ["cdkTrapFocusAutoCapture", "autoCapture"]
  },
  exportAs: ["cdkTrapFocus"],
  features: [core["ɵɵNgOnChangesFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && core["ɵsetClassMetadata"](CdkTrapFocus, [{
    type: core.Directive,
    args: [{
      selector: '[cdkTrapFocus]',
      exportAs: 'cdkTrapFocus'
    }]
  }], function () {
    return [{
      type: core.ElementRef
    }, {
      type: FocusTrapFactory
    }, {
      type: undefined,
      decorators: [{
        type: core.Inject,
        args: [common/* DOCUMENT */.K0]
      }]
    }];
  }, {
    enabled: [{
      type: core.Input,
      args: ['cdkTrapFocus']
    }],
    autoCapture: [{
      type: core.Input,
      args: ['cdkTrapFocusAutoCapture']
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Class that allows for trapping focus within a DOM element.
 *
 * This class uses a strategy pattern that determines how it traps focus.
 * See FocusTrapInertStrategy.
 */


class ConfigurableFocusTrap extends FocusTrap {
  constructor(_element, _checker, _ngZone, _document, _focusTrapManager, _inertStrategy, config) {
    super(_element, _checker, _ngZone, _document, config.defer);
    this._focusTrapManager = _focusTrapManager;
    this._inertStrategy = _inertStrategy;

    this._focusTrapManager.register(this);
  }
  /** Whether the FocusTrap is enabled. */


  get enabled() {
    return this._enabled;
  }

  set enabled(value) {
    this._enabled = value;

    if (this._enabled) {
      this._focusTrapManager.register(this);
    } else {
      this._focusTrapManager.deregister(this);
    }
  }
  /** Notifies the FocusTrapManager that this FocusTrap will be destroyed. */


  destroy() {
    this._focusTrapManager.deregister(this);

    super.destroy();
  }
  /** @docs-private Implemented as part of ManagedFocusTrap. */


  _enable() {
    this._inertStrategy.preventFocus(this);

    this.toggleAnchors(true);
  }
  /** @docs-private Implemented as part of ManagedFocusTrap. */


  _disable() {
    this._inertStrategy.allowFocus(this);

    this.toggleAnchors(false);
  }

}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** The injection token used to specify the inert strategy. */


const FOCUS_TRAP_INERT_STRATEGY = new core.InjectionToken('FOCUS_TRAP_INERT_STRATEGY');
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Lightweight FocusTrapInertStrategy that adds a document focus event
 * listener to redirect focus back inside the FocusTrap.
 */

class EventListenerFocusTrapInertStrategy {
  constructor() {
    /** Focus event handler. */
    this._listener = null;
  }
  /** Adds a document event listener that keeps focus inside the FocusTrap. */


  preventFocus(focusTrap) {
    // Ensure there's only one listener per document
    if (this._listener) {
      focusTrap._document.removeEventListener('focus', this._listener, true);
    }

    this._listener = e => this._trapFocus(focusTrap, e);

    focusTrap._ngZone.runOutsideAngular(() => {
      focusTrap._document.addEventListener('focus', this._listener, true);
    });
  }
  /** Removes the event listener added in preventFocus. */


  allowFocus(focusTrap) {
    if (!this._listener) {
      return;
    }

    focusTrap._document.removeEventListener('focus', this._listener, true);

    this._listener = null;
  }
  /**
   * Refocuses the first element in the FocusTrap if the focus event target was outside
   * the FocusTrap.
   *
   * This is an event listener callback. The event listener is added in runOutsideAngular,
   * so all this code runs outside Angular as well.
   */


  _trapFocus(focusTrap, event) {
    const target = event.target;
    const focusTrapRoot = focusTrap._element; // Don't refocus if target was in an overlay, because the overlay might be associated
    // with an element inside the FocusTrap, ex. mat-select.

    if (target && !focusTrapRoot.contains(target) && !target.closest?.('div.cdk-overlay-pane')) {
      // Some legacy FocusTrap usages have logic that focuses some element on the page
      // just before FocusTrap is destroyed. For backwards compatibility, wait
      // to be sure FocusTrap is still enabled before refocusing.
      setTimeout(() => {
        // Check whether focus wasn't put back into the focus trap while the timeout was pending.
        if (focusTrap.enabled && !focusTrapRoot.contains(focusTrap._document.activeElement)) {
          focusTrap.focusFirstTabbableElement();
        }
      });
    }
  }

}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Injectable that ensures only the most recently enabled FocusTrap is active. */


class FocusTrapManager {
  constructor() {
    // A stack of the FocusTraps on the page. Only the FocusTrap at the
    // top of the stack is active.
    this._focusTrapStack = [];
  }
  /**
   * Disables the FocusTrap at the top of the stack, and then pushes
   * the new FocusTrap onto the stack.
   */


  register(focusTrap) {
    // Dedupe focusTraps that register multiple times.
    this._focusTrapStack = this._focusTrapStack.filter(ft => ft !== focusTrap);
    let stack = this._focusTrapStack;

    if (stack.length) {
      stack[stack.length - 1]._disable();
    }

    stack.push(focusTrap);

    focusTrap._enable();
  }
  /**
   * Removes the FocusTrap from the stack, and activates the
   * FocusTrap that is the new top of the stack.
   */


  deregister(focusTrap) {
    focusTrap._disable();

    const stack = this._focusTrapStack;
    const i = stack.indexOf(focusTrap);

    if (i !== -1) {
      stack.splice(i, 1);

      if (stack.length) {
        stack[stack.length - 1]._enable();
      }
    }
  }

}

FocusTrapManager.ɵfac = function FocusTrapManager_Factory(t) {
  return new (t || FocusTrapManager)();
};

FocusTrapManager.ɵprov = /* @__PURE__ */core["ɵɵdefineInjectable"]({
  token: FocusTrapManager,
  factory: FocusTrapManager.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && core["ɵsetClassMetadata"](FocusTrapManager, [{
    type: core.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Factory that allows easy instantiation of configurable focus traps. */


class ConfigurableFocusTrapFactory {
  constructor(_checker, _ngZone, _focusTrapManager, _document, _inertStrategy) {
    this._checker = _checker;
    this._ngZone = _ngZone;
    this._focusTrapManager = _focusTrapManager;
    this._document = _document; // TODO split up the strategies into different modules, similar to DateAdapter.

    this._inertStrategy = _inertStrategy || new EventListenerFocusTrapInertStrategy();
  }

  create(element, config = {
    defer: false
  }) {
    let configObject;

    if (typeof config === 'boolean') {
      configObject = {
        defer: config
      };
    } else {
      configObject = config;
    }

    return new ConfigurableFocusTrap(element, this._checker, this._ngZone, this._document, this._focusTrapManager, this._inertStrategy, configObject);
  }

}

ConfigurableFocusTrapFactory.ɵfac = function ConfigurableFocusTrapFactory_Factory(t) {
  return new (t || ConfigurableFocusTrapFactory)(core["ɵɵinject"](InteractivityChecker), core["ɵɵinject"](core.NgZone), core["ɵɵinject"](FocusTrapManager), core["ɵɵinject"](common/* DOCUMENT */.K0), core["ɵɵinject"](FOCUS_TRAP_INERT_STRATEGY, 8));
};

ConfigurableFocusTrapFactory.ɵprov = /* @__PURE__ */core["ɵɵdefineInjectable"]({
  token: ConfigurableFocusTrapFactory,
  factory: ConfigurableFocusTrapFactory.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && core["ɵsetClassMetadata"](ConfigurableFocusTrapFactory, [{
    type: core.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: InteractivityChecker
    }, {
      type: core.NgZone
    }, {
      type: FocusTrapManager
    }, {
      type: undefined,
      decorators: [{
        type: core.Inject,
        args: [common/* DOCUMENT */.K0]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: core.Optional
      }, {
        type: core.Inject,
        args: [FOCUS_TRAP_INERT_STRATEGY]
      }]
    }];
  }, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Gets whether an event could be a faked `mousedown` event dispatched by a screen reader. */


function isFakeMousedownFromScreenReader(event) {
  // Some screen readers will dispatch a fake `mousedown` event when pressing enter or space on
  // a clickable element. We can distinguish these events when both `offsetX` and `offsetY` are
  // zero or `event.buttons` is zero, depending on the browser:
  // - `event.buttons` works on Firefox, but fails on Chrome.
  // - `offsetX` and `offsetY` work on Chrome, but fail on Firefox.
  // Note that there's an edge case where the user could click the 0x0 spot of the
  // screen themselves, but that is unlikely to contain interactive elements.
  return event.buttons === 0 || event.offsetX === 0 && event.offsetY === 0;
}
/** Gets whether an event could be a faked `touchstart` event dispatched by a screen reader. */


function isFakeTouchstartFromScreenReader(event) {
  const touch = event.touches && event.touches[0] || event.changedTouches && event.changedTouches[0]; // A fake `touchstart` can be distinguished from a real one by looking at the `identifier`
  // which is typically >= 0 on a real device versus -1 from a screen reader. Just to be safe,
  // we can also look at `radiusX` and `radiusY`. This behavior was observed against a Windows 10
  // device with a touch screen running NVDA v2020.4 and Firefox 85 or Chrome 88.

  return !!touch && touch.identifier === -1 && (touch.radiusX == null || touch.radiusX === 1) && (touch.radiusY == null || touch.radiusY === 1);
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Injectable options for the InputModalityDetector. These are shallowly merged with the default
 * options.
 */


const INPUT_MODALITY_DETECTOR_OPTIONS = new core.InjectionToken('cdk-input-modality-detector-options');
/**
 * Default options for the InputModalityDetector.
 *
 * Modifier keys are ignored by default (i.e. when pressed won't cause the service to detect
 * keyboard input modality) for two reasons:
 *
 * 1. Modifier keys are commonly used with mouse to perform actions such as 'right click' or 'open
 *    in new tab', and are thus less representative of actual keyboard interaction.
 * 2. VoiceOver triggers some keyboard events when linearly navigating with Control + Option (but
 *    confusingly not with Caps Lock). Thus, to have parity with other screen readers, we ignore
 *    these keys so as to not update the input modality.
 *
 * Note that we do not by default ignore the right Meta key on Safari because it has the same key
 * code as the ContextMenu key on other browsers. When we switch to using event.key, we can
 * distinguish between the two.
 */

const INPUT_MODALITY_DETECTOR_DEFAULT_OPTIONS = {
  ignoreKeys: [ALT, CONTROL, MAC_META, META, SHIFT]
};
/**
 * The amount of time needed to pass after a touchstart event in order for a subsequent mousedown
 * event to be attributed as mouse and not touch.
 *
 * This is the value used by AngularJS Material. Through trial and error (on iPhone 6S) they found
 * that a value of around 650ms seems appropriate.
 */

const TOUCH_BUFFER_MS = 650;
/**
 * Event listener options that enable capturing and also mark the listener as passive if the browser
 * supports it.
 */

const modalityEventListenerOptions = (0,platform/* normalizePassiveListenerOptions */.i$)({
  passive: true,
  capture: true
});
/**
 * Service that detects the user's input modality.
 *
 * This service does not update the input modality when a user navigates with a screen reader
 * (e.g. linear navigation with VoiceOver, object navigation / browse mode with NVDA, virtual PC
 * cursor mode with JAWS). This is in part due to technical limitations (i.e. keyboard events do not
 * fire as expected in these modes) but is also arguably the correct behavior. Navigating with a
 * screen reader is akin to visually scanning a page, and should not be interpreted as actual user
 * input interaction.
 *
 * When a user is not navigating but *interacting* with a screen reader, this service attempts to
 * update the input modality to keyboard, but in general this service's behavior is largely
 * undefined.
 */

class InputModalityDetector {
  constructor(_platform, ngZone, document, options) {
    this._platform = _platform;
    /**
     * The most recently detected input modality event target. Is null if no input modality has been
     * detected or if the associated event target is null for some unknown reason.
     */

    this._mostRecentTarget = null;
    /** The underlying BehaviorSubject that emits whenever an input modality is detected. */

    this._modality = new BehaviorSubject(null);
    /**
     * The timestamp of the last touch input modality. Used to determine whether mousedown events
     * should be attributed to mouse or touch.
     */

    this._lastTouchMs = 0;
    /**
     * Handles keydown events. Must be an arrow function in order to preserve the context when it gets
     * bound.
     */

    this._onKeydown = event => {
      // If this is one of the keys we should ignore, then ignore it and don't update the input
      // modality to keyboard.
      if (this._options?.ignoreKeys?.some(keyCode => keyCode === event.keyCode)) {
        return;
      }

      this._modality.next('keyboard');

      this._mostRecentTarget = (0,platform/* _getEventTarget */.sA)(event);
    };
    /**
     * Handles mousedown events. Must be an arrow function in order to preserve the context when it
     * gets bound.
     */


    this._onMousedown = event => {
      // Touches trigger both touch and mouse events, so we need to distinguish between mouse events
      // that were triggered via mouse vs touch. To do so, check if the mouse event occurs closely
      // after the previous touch event.
      if (Date.now() - this._lastTouchMs < TOUCH_BUFFER_MS) {
        return;
      } // Fake mousedown events are fired by some screen readers when controls are activated by the
      // screen reader. Attribute them to keyboard input modality.


      this._modality.next(isFakeMousedownFromScreenReader(event) ? 'keyboard' : 'mouse');

      this._mostRecentTarget = (0,platform/* _getEventTarget */.sA)(event);
    };
    /**
     * Handles touchstart events. Must be an arrow function in order to preserve the context when it
     * gets bound.
     */


    this._onTouchstart = event => {
      // Same scenario as mentioned in _onMousedown, but on touch screen devices, fake touchstart
      // events are fired. Again, attribute to keyboard input modality.
      if (isFakeTouchstartFromScreenReader(event)) {
        this._modality.next('keyboard');

        return;
      } // Store the timestamp of this touch event, as it's used to distinguish between mouse events
      // triggered via mouse vs touch.


      this._lastTouchMs = Date.now();

      this._modality.next('touch');

      this._mostRecentTarget = (0,platform/* _getEventTarget */.sA)(event);
    };

    this._options = { ...INPUT_MODALITY_DETECTOR_DEFAULT_OPTIONS,
      ...options
    }; // Skip the first emission as it's null.

    this.modalityDetected = this._modality.pipe(skip(1));
    this.modalityChanged = this.modalityDetected.pipe(distinctUntilChanged()); // If we're not in a browser, this service should do nothing, as there's no relevant input
    // modality to detect.

    if (_platform.isBrowser) {
      ngZone.runOutsideAngular(() => {
        document.addEventListener('keydown', this._onKeydown, modalityEventListenerOptions);
        document.addEventListener('mousedown', this._onMousedown, modalityEventListenerOptions);
        document.addEventListener('touchstart', this._onTouchstart, modalityEventListenerOptions);
      });
    }
  }
  /** The most recently detected input modality. */


  get mostRecentModality() {
    return this._modality.value;
  }

  ngOnDestroy() {
    this._modality.complete();

    if (this._platform.isBrowser) {
      document.removeEventListener('keydown', this._onKeydown, modalityEventListenerOptions);
      document.removeEventListener('mousedown', this._onMousedown, modalityEventListenerOptions);
      document.removeEventListener('touchstart', this._onTouchstart, modalityEventListenerOptions);
    }
  }

}

InputModalityDetector.ɵfac = function InputModalityDetector_Factory(t) {
  return new (t || InputModalityDetector)(core["ɵɵinject"](platform/* Platform */.t4), core["ɵɵinject"](core.NgZone), core["ɵɵinject"](common/* DOCUMENT */.K0), core["ɵɵinject"](INPUT_MODALITY_DETECTOR_OPTIONS, 8));
};

InputModalityDetector.ɵprov = /* @__PURE__ */core["ɵɵdefineInjectable"]({
  token: InputModalityDetector,
  factory: InputModalityDetector.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && core["ɵsetClassMetadata"](InputModalityDetector, [{
    type: core.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: platform/* Platform */.t4
    }, {
      type: core.NgZone
    }, {
      type: Document,
      decorators: [{
        type: core.Inject,
        args: [common/* DOCUMENT */.K0]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: core.Optional
      }, {
        type: core.Inject,
        args: [INPUT_MODALITY_DETECTOR_OPTIONS]
      }]
    }];
  }, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


const LIVE_ANNOUNCER_ELEMENT_TOKEN = new core.InjectionToken('liveAnnouncerElement', {
  providedIn: 'root',
  factory: LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY
});
/** @docs-private */

function LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY() {
  return null;
}
/** Injection token that can be used to configure the default options for the LiveAnnouncer. */


const LIVE_ANNOUNCER_DEFAULT_OPTIONS = new core.InjectionToken('LIVE_ANNOUNCER_DEFAULT_OPTIONS');
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

class LiveAnnouncer {
  constructor(elementToken, _ngZone, _document, _defaultOptions) {
    this._ngZone = _ngZone;
    this._defaultOptions = _defaultOptions; // We inject the live element and document as `any` because the constructor signature cannot
    // reference browser globals (HTMLElement, Document) on non-browser environments, since having
    // a class decorator causes TypeScript to preserve the constructor signature types.

    this._document = _document;
    this._liveElement = elementToken || this._createLiveElement();
  }

  announce(message, ...args) {
    const defaultOptions = this._defaultOptions;
    let politeness;
    let duration;

    if (args.length === 1 && typeof args[0] === 'number') {
      duration = args[0];
    } else {
      [politeness, duration] = args;
    }

    this.clear();
    clearTimeout(this._previousTimeout);

    if (!politeness) {
      politeness = defaultOptions && defaultOptions.politeness ? defaultOptions.politeness : 'polite';
    }

    if (duration == null && defaultOptions) {
      duration = defaultOptions.duration;
    } // TODO: ensure changing the politeness works on all environments we support.


    this._liveElement.setAttribute('aria-live', politeness); // This 100ms timeout is necessary for some browser + screen-reader combinations:
    // - Both JAWS and NVDA over IE11 will not announce anything without a non-zero timeout.
    // - With Chrome and IE11 with NVDA or JAWS, a repeated (identical) message won't be read a
    //   second time without clearing and then using a non-zero delay.
    // (using JAWS 17 at time of this writing).


    return this._ngZone.runOutsideAngular(() => {
      if (!this._currentPromise) {
        this._currentPromise = new Promise(resolve => this._currentResolve = resolve);
      }

      clearTimeout(this._previousTimeout);
      this._previousTimeout = setTimeout(() => {
        this._liveElement.textContent = message;

        if (typeof duration === 'number') {
          this._previousTimeout = setTimeout(() => this.clear(), duration);
        }

        this._currentResolve();

        this._currentPromise = this._currentResolve = undefined;
      }, 100);
      return this._currentPromise;
    });
  }
  /**
   * Clears the current text from the announcer element. Can be used to prevent
   * screen readers from reading the text out again while the user is going
   * through the page landmarks.
   */


  clear() {
    if (this._liveElement) {
      this._liveElement.textContent = '';
    }
  }

  ngOnDestroy() {
    clearTimeout(this._previousTimeout);
    this._liveElement?.remove();
    this._liveElement = null;
    this._currentResolve?.();
    this._currentPromise = this._currentResolve = undefined;
  }

  _createLiveElement() {
    const elementClass = 'cdk-live-announcer-element';

    const previousElements = this._document.getElementsByClassName(elementClass);

    const liveEl = this._document.createElement('div'); // Remove any old containers. This can happen when coming in from a server-side-rendered page.


    for (let i = 0; i < previousElements.length; i++) {
      previousElements[i].remove();
    }

    liveEl.classList.add(elementClass);
    liveEl.classList.add('cdk-visually-hidden');
    liveEl.setAttribute('aria-atomic', 'true');
    liveEl.setAttribute('aria-live', 'polite');

    this._document.body.appendChild(liveEl);

    return liveEl;
  }

}

LiveAnnouncer.ɵfac = function LiveAnnouncer_Factory(t) {
  return new (t || LiveAnnouncer)(core["ɵɵinject"](LIVE_ANNOUNCER_ELEMENT_TOKEN, 8), core["ɵɵinject"](core.NgZone), core["ɵɵinject"](common/* DOCUMENT */.K0), core["ɵɵinject"](LIVE_ANNOUNCER_DEFAULT_OPTIONS, 8));
};

LiveAnnouncer.ɵprov = /* @__PURE__ */core["ɵɵdefineInjectable"]({
  token: LiveAnnouncer,
  factory: LiveAnnouncer.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && core["ɵsetClassMetadata"](LiveAnnouncer, [{
    type: core.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: core.Optional
      }, {
        type: core.Inject,
        args: [LIVE_ANNOUNCER_ELEMENT_TOKEN]
      }]
    }, {
      type: core.NgZone
    }, {
      type: undefined,
      decorators: [{
        type: core.Inject,
        args: [common/* DOCUMENT */.K0]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: core.Optional
      }, {
        type: core.Inject,
        args: [LIVE_ANNOUNCER_DEFAULT_OPTIONS]
      }]
    }];
  }, null);
})();
/**
 * A directive that works similarly to aria-live, but uses the LiveAnnouncer to ensure compatibility
 * with a wider range of browsers and screen readers.
 */


class CdkAriaLive {
  constructor(_elementRef, _liveAnnouncer, _contentObserver, _ngZone) {
    this._elementRef = _elementRef;
    this._liveAnnouncer = _liveAnnouncer;
    this._contentObserver = _contentObserver;
    this._ngZone = _ngZone;
    this._politeness = 'polite';
  }
  /** The aria-live politeness level to use when announcing messages. */


  get politeness() {
    return this._politeness;
  }

  set politeness(value) {
    this._politeness = value === 'off' || value === 'assertive' ? value : 'polite';

    if (this._politeness === 'off') {
      if (this._subscription) {
        this._subscription.unsubscribe();

        this._subscription = null;
      }
    } else if (!this._subscription) {
      this._subscription = this._ngZone.runOutsideAngular(() => {
        return this._contentObserver.observe(this._elementRef).subscribe(() => {
          // Note that we use textContent here, rather than innerText, in order to avoid a reflow.
          const elementText = this._elementRef.nativeElement.textContent; // The `MutationObserver` fires also for attribute
          // changes which we don't want to announce.

          if (elementText !== this._previousAnnouncedText) {
            this._liveAnnouncer.announce(elementText, this._politeness);

            this._previousAnnouncedText = elementText;
          }
        });
      });
    }
  }

  ngOnDestroy() {
    if (this._subscription) {
      this._subscription.unsubscribe();
    }
  }

}

CdkAriaLive.ɵfac = function CdkAriaLive_Factory(t) {
  return new (t || CdkAriaLive)(core["ɵɵdirectiveInject"](core.ElementRef), core["ɵɵdirectiveInject"](LiveAnnouncer), core["ɵɵdirectiveInject"](observers/* ContentObserver */.yq), core["ɵɵdirectiveInject"](core.NgZone));
};

CdkAriaLive.ɵdir = /* @__PURE__ */core["ɵɵdefineDirective"]({
  type: CdkAriaLive,
  selectors: [["", "cdkAriaLive", ""]],
  inputs: {
    politeness: ["cdkAriaLive", "politeness"]
  },
  exportAs: ["cdkAriaLive"]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && core["ɵsetClassMetadata"](CdkAriaLive, [{
    type: core.Directive,
    args: [{
      selector: '[cdkAriaLive]',
      exportAs: 'cdkAriaLive'
    }]
  }], function () {
    return [{
      type: core.ElementRef
    }, {
      type: LiveAnnouncer
    }, {
      type: observers/* ContentObserver */.yq
    }, {
      type: core.NgZone
    }];
  }, {
    politeness: [{
      type: core.Input,
      args: ['cdkAriaLive']
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** InjectionToken for FocusMonitorOptions. */


const FOCUS_MONITOR_DEFAULT_OPTIONS = new core.InjectionToken('cdk-focus-monitor-default-options');
/**
 * Event listener options that enable capturing and also
 * mark the listener as passive if the browser supports it.
 */

const captureEventListenerOptions = (0,platform/* normalizePassiveListenerOptions */.i$)({
  passive: true,
  capture: true
});
/** Monitors mouse and keyboard events to determine the cause of focus events. */

class FocusMonitor {
  constructor(_ngZone, _platform, _inputModalityDetector,
  /** @breaking-change 11.0.0 make document required */
  document, options) {
    this._ngZone = _ngZone;
    this._platform = _platform;
    this._inputModalityDetector = _inputModalityDetector;
    /** The focus origin that the next focus event is a result of. */

    this._origin = null;
    /** Whether the window has just been focused. */

    this._windowFocused = false;
    /**
     * Whether the origin was determined via a touch interaction. Necessary as properly attributing
     * focus events to touch interactions requires special logic.
     */

    this._originFromTouchInteraction = false;
    /** Map of elements being monitored to their info. */

    this._elementInfo = new Map();
    /** The number of elements currently being monitored. */

    this._monitoredElementCount = 0;
    /**
     * Keeps track of the root nodes to which we've currently bound a focus/blur handler,
     * as well as the number of monitored elements that they contain. We have to treat focus/blur
     * handlers differently from the rest of the events, because the browser won't emit events
     * to the document when focus moves inside of a shadow root.
     */

    this._rootNodeFocusListenerCount = new Map();
    /**
     * Event listener for `focus` events on the window.
     * Needs to be an arrow function in order to preserve the context when it gets bound.
     */

    this._windowFocusListener = () => {
      // Make a note of when the window regains focus, so we can
      // restore the origin info for the focused element.
      this._windowFocused = true;
      this._windowFocusTimeoutId = window.setTimeout(() => this._windowFocused = false);
    };
    /** Subject for stopping our InputModalityDetector subscription. */


    this._stopInputModalityDetector = new internal_Subject/* Subject */.x();
    /**
     * Event listener for `focus` and 'blur' events on the document.
     * Needs to be an arrow function in order to preserve the context when it gets bound.
     */

    this._rootNodeFocusAndBlurListener = event => {
      const target = (0,platform/* _getEventTarget */.sA)(event);

      const handler = event.type === 'focus' ? this._onFocus : this._onBlur; // We need to walk up the ancestor chain in order to support `checkChildren`.

      for (let element = target; element; element = element.parentElement) {
        handler.call(this, event, element);
      }
    };

    this._document = document;
    this._detectionMode = options?.detectionMode || 0
    /* IMMEDIATE */
    ;
  }

  monitor(element, checkChildren = false) {
    const nativeElement = (0,coercion/* coerceElement */.fI)(element); // Do nothing if we're not on the browser platform or the passed in node isn't an element.

    if (!this._platform.isBrowser || nativeElement.nodeType !== 1) {
      return of(null);
    } // If the element is inside the shadow DOM, we need to bind our focus/blur listeners to
    // the shadow root, rather than the `document`, because the browser won't emit focus events
    // to the `document`, if focus is moving within the same shadow root.


    const rootNode = (0,platform/* _getShadowRoot */.kV)(nativeElement) || this._getDocument();

    const cachedInfo = this._elementInfo.get(nativeElement); // Check if we're already monitoring this element.


    if (cachedInfo) {
      if (checkChildren) {
        // TODO(COMP-318): this can be problematic, because it'll turn all non-checkChildren
        // observers into ones that behave as if `checkChildren` was turned on. We need a more
        // robust solution.
        cachedInfo.checkChildren = true;
      }

      return cachedInfo.subject;
    } // Create monitored element info.


    const info = {
      checkChildren: checkChildren,
      subject: new internal_Subject/* Subject */.x(),
      rootNode
    };

    this._elementInfo.set(nativeElement, info);

    this._registerGlobalListeners(info);

    return info.subject;
  }

  stopMonitoring(element) {
    const nativeElement = (0,coercion/* coerceElement */.fI)(element);

    const elementInfo = this._elementInfo.get(nativeElement);

    if (elementInfo) {
      elementInfo.subject.complete();

      this._setClasses(nativeElement);

      this._elementInfo.delete(nativeElement);

      this._removeGlobalListeners(elementInfo);
    }
  }

  focusVia(element, origin, options) {
    const nativeElement = (0,coercion/* coerceElement */.fI)(element);

    const focusedElement = this._getDocument().activeElement; // If the element is focused already, calling `focus` again won't trigger the event listener
    // which means that the focus classes won't be updated. If that's the case, update the classes
    // directly without waiting for an event.


    if (nativeElement === focusedElement) {
      this._getClosestElementsInfo(nativeElement).forEach(([currentElement, info]) => this._originChanged(currentElement, origin, info));
    } else {
      this._setOrigin(origin); // `focus` isn't available on the server


      if (typeof nativeElement.focus === 'function') {
        nativeElement.focus(options);
      }
    }
  }

  ngOnDestroy() {
    this._elementInfo.forEach((_info, element) => this.stopMonitoring(element));
  }
  /** Access injected document if available or fallback to global document reference */


  _getDocument() {
    return this._document || document;
  }
  /** Use defaultView of injected document if available or fallback to global window reference */


  _getWindow() {
    const doc = this._getDocument();

    return doc.defaultView || window;
  }

  _getFocusOrigin(focusEventTarget) {
    if (this._origin) {
      // If the origin was realized via a touch interaction, we need to perform additional checks
      // to determine whether the focus origin should be attributed to touch or program.
      if (this._originFromTouchInteraction) {
        return this._shouldBeAttributedToTouch(focusEventTarget) ? 'touch' : 'program';
      } else {
        return this._origin;
      }
    } // If the window has just regained focus, we can restore the most recent origin from before the
    // window blurred. Otherwise, we've reached the point where we can't identify the source of the
    // focus. This typically means one of two things happened:
    //
    // 1) The element was programmatically focused, or
    // 2) The element was focused via screen reader navigation (which generally doesn't fire
    //    events).
    //
    // Because we can't distinguish between these two cases, we default to setting `program`.


    return this._windowFocused && this._lastFocusOrigin ? this._lastFocusOrigin : 'program';
  }
  /**
   * Returns whether the focus event should be attributed to touch. Recall that in IMMEDIATE mode, a
   * touch origin isn't immediately reset at the next tick (see _setOrigin). This means that when we
   * handle a focus event following a touch interaction, we need to determine whether (1) the focus
   * event was directly caused by the touch interaction or (2) the focus event was caused by a
   * subsequent programmatic focus call triggered by the touch interaction.
   * @param focusEventTarget The target of the focus event under examination.
   */


  _shouldBeAttributedToTouch(focusEventTarget) {
    // Please note that this check is not perfect. Consider the following edge case:
    //
    // <div #parent tabindex="0">
    //   <div #child tabindex="0" (click)="#parent.focus()"></div>
    // </div>
    //
    // Suppose there is a FocusMonitor in IMMEDIATE mode attached to #parent. When the user touches
    // #child, #parent is programmatically focused. This code will attribute the focus to touch
    // instead of program. This is a relatively minor edge-case that can be worked around by using
    // focusVia(parent, 'program') to focus #parent.
    return this._detectionMode === 1
    /* EVENTUAL */
    || !!focusEventTarget?.contains(this._inputModalityDetector._mostRecentTarget);
  }
  /**
   * Sets the focus classes on the element based on the given focus origin.
   * @param element The element to update the classes on.
   * @param origin The focus origin.
   */


  _setClasses(element, origin) {
    element.classList.toggle('cdk-focused', !!origin);
    element.classList.toggle('cdk-touch-focused', origin === 'touch');
    element.classList.toggle('cdk-keyboard-focused', origin === 'keyboard');
    element.classList.toggle('cdk-mouse-focused', origin === 'mouse');
    element.classList.toggle('cdk-program-focused', origin === 'program');
  }
  /**
   * Updates the focus origin. If we're using immediate detection mode, we schedule an async
   * function to clear the origin at the end of a timeout. The duration of the timeout depends on
   * the origin being set.
   * @param origin The origin to set.
   * @param isFromInteraction Whether we are setting the origin from an interaction event.
   */


  _setOrigin(origin, isFromInteraction = false) {
    this._ngZone.runOutsideAngular(() => {
      this._origin = origin;
      this._originFromTouchInteraction = origin === 'touch' && isFromInteraction; // If we're in IMMEDIATE mode, reset the origin at the next tick (or in `TOUCH_BUFFER_MS` ms
      // for a touch event). We reset the origin at the next tick because Firefox focuses one tick
      // after the interaction event. We wait `TOUCH_BUFFER_MS` ms before resetting the origin for
      // a touch event because when a touch event is fired, the associated focus event isn't yet in
      // the event queue. Before doing so, clear any pending timeouts.

      if (this._detectionMode === 0
      /* IMMEDIATE */
      ) {
        clearTimeout(this._originTimeoutId);
        const ms = this._originFromTouchInteraction ? TOUCH_BUFFER_MS : 1;
        this._originTimeoutId = setTimeout(() => this._origin = null, ms);
      }
    });
  }
  /**
   * Handles focus events on a registered element.
   * @param event The focus event.
   * @param element The monitored element.
   */


  _onFocus(event, element) {
    // NOTE(mmalerba): We currently set the classes based on the focus origin of the most recent
    // focus event affecting the monitored element. If we want to use the origin of the first event
    // instead we should check for the cdk-focused class here and return if the element already has
    // it. (This only matters for elements that have includesChildren = true).
    // If we are not counting child-element-focus as focused, make sure that the event target is the
    // monitored element itself.
    const elementInfo = this._elementInfo.get(element);

    const focusEventTarget = (0,platform/* _getEventTarget */.sA)(event);

    if (!elementInfo || !elementInfo.checkChildren && element !== focusEventTarget) {
      return;
    }

    this._originChanged(element, this._getFocusOrigin(focusEventTarget), elementInfo);
  }
  /**
   * Handles blur events on a registered element.
   * @param event The blur event.
   * @param element The monitored element.
   */


  _onBlur(event, element) {
    // If we are counting child-element-focus as focused, make sure that we aren't just blurring in
    // order to focus another child of the monitored element.
    const elementInfo = this._elementInfo.get(element);

    if (!elementInfo || elementInfo.checkChildren && event.relatedTarget instanceof Node && element.contains(event.relatedTarget)) {
      return;
    }

    this._setClasses(element);

    this._emitOrigin(elementInfo.subject, null);
  }

  _emitOrigin(subject, origin) {
    this._ngZone.run(() => subject.next(origin));
  }

  _registerGlobalListeners(elementInfo) {
    if (!this._platform.isBrowser) {
      return;
    }

    const rootNode = elementInfo.rootNode;
    const rootNodeFocusListeners = this._rootNodeFocusListenerCount.get(rootNode) || 0;

    if (!rootNodeFocusListeners) {
      this._ngZone.runOutsideAngular(() => {
        rootNode.addEventListener('focus', this._rootNodeFocusAndBlurListener, captureEventListenerOptions);
        rootNode.addEventListener('blur', this._rootNodeFocusAndBlurListener, captureEventListenerOptions);
      });
    }

    this._rootNodeFocusListenerCount.set(rootNode, rootNodeFocusListeners + 1); // Register global listeners when first element is monitored.


    if (++this._monitoredElementCount === 1) {
      // Note: we listen to events in the capture phase so we
      // can detect them even if the user stops propagation.
      this._ngZone.runOutsideAngular(() => {
        const window = this._getWindow();

        window.addEventListener('focus', this._windowFocusListener);
      }); // The InputModalityDetector is also just a collection of global listeners.


      this._inputModalityDetector.modalityDetected.pipe((0,takeUntil/* takeUntil */.R)(this._stopInputModalityDetector)).subscribe(modality => {
        this._setOrigin(modality, true
        /* isFromInteraction */
        );
      });
    }
  }

  _removeGlobalListeners(elementInfo) {
    const rootNode = elementInfo.rootNode;

    if (this._rootNodeFocusListenerCount.has(rootNode)) {
      const rootNodeFocusListeners = this._rootNodeFocusListenerCount.get(rootNode);

      if (rootNodeFocusListeners > 1) {
        this._rootNodeFocusListenerCount.set(rootNode, rootNodeFocusListeners - 1);
      } else {
        rootNode.removeEventListener('focus', this._rootNodeFocusAndBlurListener, captureEventListenerOptions);
        rootNode.removeEventListener('blur', this._rootNodeFocusAndBlurListener, captureEventListenerOptions);

        this._rootNodeFocusListenerCount.delete(rootNode);
      }
    } // Unregister global listeners when last element is unmonitored.


    if (! --this._monitoredElementCount) {
      const window = this._getWindow();

      window.removeEventListener('focus', this._windowFocusListener); // Equivalently, stop our InputModalityDetector subscription.

      this._stopInputModalityDetector.next(); // Clear timeouts for all potentially pending timeouts to prevent the leaks.


      clearTimeout(this._windowFocusTimeoutId);
      clearTimeout(this._originTimeoutId);
    }
  }
  /** Updates all the state on an element once its focus origin has changed. */


  _originChanged(element, origin, elementInfo) {
    this._setClasses(element, origin);

    this._emitOrigin(elementInfo.subject, origin);

    this._lastFocusOrigin = origin;
  }
  /**
   * Collects the `MonitoredElementInfo` of a particular element and
   * all of its ancestors that have enabled `checkChildren`.
   * @param element Element from which to start the search.
   */


  _getClosestElementsInfo(element) {
    const results = [];

    this._elementInfo.forEach((info, currentElement) => {
      if (currentElement === element || info.checkChildren && currentElement.contains(element)) {
        results.push([currentElement, info]);
      }
    });

    return results;
  }

}

FocusMonitor.ɵfac = function FocusMonitor_Factory(t) {
  return new (t || FocusMonitor)(core["ɵɵinject"](core.NgZone), core["ɵɵinject"](platform/* Platform */.t4), core["ɵɵinject"](InputModalityDetector), core["ɵɵinject"](common/* DOCUMENT */.K0, 8), core["ɵɵinject"](FOCUS_MONITOR_DEFAULT_OPTIONS, 8));
};

FocusMonitor.ɵprov = /* @__PURE__ */core["ɵɵdefineInjectable"]({
  token: FocusMonitor,
  factory: FocusMonitor.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && core["ɵsetClassMetadata"](FocusMonitor, [{
    type: core.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: core.NgZone
    }, {
      type: platform/* Platform */.t4
    }, {
      type: InputModalityDetector
    }, {
      type: undefined,
      decorators: [{
        type: core.Optional
      }, {
        type: core.Inject,
        args: [common/* DOCUMENT */.K0]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: core.Optional
      }, {
        type: core.Inject,
        args: [FOCUS_MONITOR_DEFAULT_OPTIONS]
      }]
    }];
  }, null);
})();
/**
 * Directive that determines how a particular element was focused (via keyboard, mouse, touch, or
 * programmatically) and adds corresponding classes to the element.
 *
 * There are two variants of this directive:
 * 1) cdkMonitorElementFocus: does not consider an element to be focused if one of its children is
 *    focused.
 * 2) cdkMonitorSubtreeFocus: considers an element focused if it or any of its children are focused.
 */


class CdkMonitorFocus {
  constructor(_elementRef, _focusMonitor) {
    this._elementRef = _elementRef;
    this._focusMonitor = _focusMonitor;
    this.cdkFocusChange = new core.EventEmitter();
  }

  ngAfterViewInit() {
    const element = this._elementRef.nativeElement;
    this._monitorSubscription = this._focusMonitor.monitor(element, element.nodeType === 1 && element.hasAttribute('cdkMonitorSubtreeFocus')).subscribe(origin => this.cdkFocusChange.emit(origin));
  }

  ngOnDestroy() {
    this._focusMonitor.stopMonitoring(this._elementRef);

    if (this._monitorSubscription) {
      this._monitorSubscription.unsubscribe();
    }
  }

}

CdkMonitorFocus.ɵfac = function CdkMonitorFocus_Factory(t) {
  return new (t || CdkMonitorFocus)(core["ɵɵdirectiveInject"](core.ElementRef), core["ɵɵdirectiveInject"](FocusMonitor));
};

CdkMonitorFocus.ɵdir = /* @__PURE__ */core["ɵɵdefineDirective"]({
  type: CdkMonitorFocus,
  selectors: [["", "cdkMonitorElementFocus", ""], ["", "cdkMonitorSubtreeFocus", ""]],
  outputs: {
    cdkFocusChange: "cdkFocusChange"
  }
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && core["ɵsetClassMetadata"](CdkMonitorFocus, [{
    type: core.Directive,
    args: [{
      selector: '[cdkMonitorElementFocus], [cdkMonitorSubtreeFocus]'
    }]
  }], function () {
    return [{
      type: core.ElementRef
    }, {
      type: FocusMonitor
    }];
  }, {
    cdkFocusChange: [{
      type: core.Output
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** CSS class applied to the document body when in black-on-white high-contrast mode. */


const BLACK_ON_WHITE_CSS_CLASS = 'cdk-high-contrast-black-on-white';
/** CSS class applied to the document body when in white-on-black high-contrast mode. */

const WHITE_ON_BLACK_CSS_CLASS = 'cdk-high-contrast-white-on-black';
/** CSS class applied to the document body when in high-contrast mode. */

const HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS = 'cdk-high-contrast-active';
/**
 * Service to determine whether the browser is currently in a high-contrast-mode environment.
 *
 * Microsoft Windows supports an accessibility feature called "High Contrast Mode". This mode
 * changes the appearance of all applications, including web applications, to dramatically increase
 * contrast.
 *
 * IE, Edge, and Firefox currently support this mode. Chrome does not support Windows High Contrast
 * Mode. This service does not detect high-contrast mode as added by the Chrome "High Contrast"
 * browser extension.
 */

class HighContrastModeDetector {
  constructor(_platform, document) {
    this._platform = _platform;
    this._document = document;
  }
  /** Gets the current high-contrast-mode for the page. */


  getHighContrastMode() {
    if (!this._platform.isBrowser) {
      return 0
      /* NONE */
      ;
    } // Create a test element with an arbitrary background-color that is neither black nor
    // white; high-contrast mode will coerce the color to either black or white. Also ensure that
    // appending the test element to the DOM does not affect layout by absolutely positioning it


    const testElement = this._document.createElement('div');

    testElement.style.backgroundColor = 'rgb(1,2,3)';
    testElement.style.position = 'absolute';

    this._document.body.appendChild(testElement); // Get the computed style for the background color, collapsing spaces to normalize between
    // browsers. Once we get this color, we no longer need the test element. Access the `window`
    // via the document so we can fake it in tests. Note that we have extra null checks, because
    // this logic will likely run during app bootstrap and throwing can break the entire app.


    const documentWindow = this._document.defaultView || window;
    const computedStyle = documentWindow && documentWindow.getComputedStyle ? documentWindow.getComputedStyle(testElement) : null;
    const computedColor = (computedStyle && computedStyle.backgroundColor || '').replace(/ /g, '');
    testElement.remove();

    switch (computedColor) {
      case 'rgb(0,0,0)':
        return 2
        /* WHITE_ON_BLACK */
        ;

      case 'rgb(255,255,255)':
        return 1
        /* BLACK_ON_WHITE */
        ;
    }

    return 0
    /* NONE */
    ;
  }
  /** Applies CSS classes indicating high-contrast mode to document body (browser-only). */


  _applyBodyHighContrastModeCssClasses() {
    if (!this._hasCheckedHighContrastMode && this._platform.isBrowser && this._document.body) {
      const bodyClasses = this._document.body.classList; // IE11 doesn't support `classList` operations with multiple arguments

      bodyClasses.remove(HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS);
      bodyClasses.remove(BLACK_ON_WHITE_CSS_CLASS);
      bodyClasses.remove(WHITE_ON_BLACK_CSS_CLASS);
      this._hasCheckedHighContrastMode = true;
      const mode = this.getHighContrastMode();

      if (mode === 1
      /* BLACK_ON_WHITE */
      ) {
        bodyClasses.add(HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS);
        bodyClasses.add(BLACK_ON_WHITE_CSS_CLASS);
      } else if (mode === 2
      /* WHITE_ON_BLACK */
      ) {
        bodyClasses.add(HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS);
        bodyClasses.add(WHITE_ON_BLACK_CSS_CLASS);
      }
    }
  }

}

HighContrastModeDetector.ɵfac = function HighContrastModeDetector_Factory(t) {
  return new (t || HighContrastModeDetector)(core["ɵɵinject"](platform/* Platform */.t4), core["ɵɵinject"](common/* DOCUMENT */.K0));
};

HighContrastModeDetector.ɵprov = /* @__PURE__ */core["ɵɵdefineInjectable"]({
  token: HighContrastModeDetector,
  factory: HighContrastModeDetector.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && core["ɵsetClassMetadata"](HighContrastModeDetector, [{
    type: core.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: platform/* Platform */.t4
    }, {
      type: undefined,
      decorators: [{
        type: core.Inject,
        args: [common/* DOCUMENT */.K0]
      }]
    }];
  }, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


class A11yModule {
  constructor(highContrastModeDetector) {
    highContrastModeDetector._applyBodyHighContrastModeCssClasses();
  }

}

A11yModule.ɵfac = function A11yModule_Factory(t) {
  return new (t || A11yModule)(core["ɵɵinject"](HighContrastModeDetector));
};

A11yModule.ɵmod = /* @__PURE__ */core["ɵɵdefineNgModule"]({
  type: A11yModule,
  declarations: [CdkAriaLive, CdkTrapFocus, CdkMonitorFocus],
  imports: [observers/* ObserversModule */.Q8],
  exports: [CdkAriaLive, CdkTrapFocus, CdkMonitorFocus]
});
A11yModule.ɵinj = /* @__PURE__ */core["ɵɵdefineInjector"]({
  imports: [[observers/* ObserversModule */.Q8]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && core["ɵsetClassMetadata"](A11yModule, [{
    type: core.NgModule,
    args: [{
      imports: [observers/* ObserversModule */.Q8],
      declarations: [CdkAriaLive, CdkTrapFocus, CdkMonitorFocus],
      exports: [CdkAriaLive, CdkTrapFocus, CdkMonitorFocus]
    }]
  }], function () {
    return [{
      type: HighContrastModeDetector
    }];
  }, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */


 //# sourceMappingURL=a11y.mjs.map
// EXTERNAL MODULE: ./node_modules/@angular/cdk/fesm2020/bidi.mjs
var bidi = __webpack_require__("./node_modules/@angular/cdk/fesm2020/bidi.mjs");
;// CONCATENATED MODULE: ./node_modules/@angular/cdk/fesm2020/cdk.mjs


/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Current version of the Angular Component Development Kit. */
const VERSION = new core.Version('13.3.9');

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


//# sourceMappingURL=cdk.mjs.map

// EXTERNAL MODULE: ./node_modules/@angular/platform-browser/fesm2020/animations.mjs + 1 modules
var animations = __webpack_require__("./node_modules/@angular/platform-browser/fesm2020/animations.mjs");
;// CONCATENATED MODULE: ./node_modules/@angular/material/fesm2020/core.mjs















/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Current version of Angular Material. */

const _c0 = ["*", [["mat-option"], ["ng-container"]]];
const _c1 = ["*", "mat-option, ng-container"];

function MatOption_mat_pseudo_checkbox_0_Template(rf, ctx) {
  if (rf & 1) {
    core["ɵɵelement"](0, "mat-pseudo-checkbox", 4);
  }

  if (rf & 2) {
    const ctx_r0 = core["ɵɵnextContext"]();
    core["ɵɵproperty"]("state", ctx_r0.selected ? "checked" : "unchecked")("disabled", ctx_r0.disabled);
  }
}

function MatOption_span_3_Template(rf, ctx) {
  if (rf & 1) {
    core["ɵɵelementStart"](0, "span", 5);
    core["ɵɵtext"](1);
    core["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = core["ɵɵnextContext"]();
    core["ɵɵadvance"](1);
    core["ɵɵtextInterpolate1"]("(", ctx_r1.group.label, ")");
  }
}

const _c2 = ["*"];
const core_VERSION = new core.Version('13.3.9');
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** @docs-private */

class AnimationCurves {}

AnimationCurves.STANDARD_CURVE = 'cubic-bezier(0.4,0.0,0.2,1)';
AnimationCurves.DECELERATION_CURVE = 'cubic-bezier(0.0,0.0,0.2,1)';
AnimationCurves.ACCELERATION_CURVE = 'cubic-bezier(0.4,0.0,1,1)';
AnimationCurves.SHARP_CURVE = 'cubic-bezier(0.4,0.0,0.6,1)';
/** @docs-private */

class AnimationDurations {}

AnimationDurations.COMPLEX = '375ms';
AnimationDurations.ENTERING = '225ms';
AnimationDurations.EXITING = '195ms';
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** @docs-private */

function MATERIAL_SANITY_CHECKS_FACTORY() {
  return true;
}
/** Injection token that configures whether the Material sanity checks are enabled. */


const MATERIAL_SANITY_CHECKS = new core.InjectionToken('mat-sanity-checks', {
  providedIn: 'root',
  factory: MATERIAL_SANITY_CHECKS_FACTORY
});
/**
 * Module that captures anything that should be loaded and/or run for *all* Angular Material
 * components. This includes Bidi, etc.
 *
 * This module should be imported to each top-level component module (e.g., MatTabsModule).
 */

class MatCommonModule {
  constructor(highContrastModeDetector, _sanityChecks, _document) {
    this._sanityChecks = _sanityChecks;
    this._document = _document;
    /** Whether we've done the global sanity checks (e.g. a theme is loaded, there is a doctype). */

    this._hasDoneGlobalChecks = false; // While A11yModule also does this, we repeat it here to avoid importing A11yModule
    // in MatCommonModule.

    highContrastModeDetector._applyBodyHighContrastModeCssClasses();

    if (!this._hasDoneGlobalChecks) {
      this._hasDoneGlobalChecks = true;

      if (typeof ngDevMode === 'undefined' || ngDevMode) {
        if (this._checkIsEnabled('doctype')) {
          _checkDoctypeIsDefined(this._document);
        }

        if (this._checkIsEnabled('theme')) {
          _checkThemeIsPresent(this._document);
        }

        if (this._checkIsEnabled('version')) {
          _checkCdkVersionMatch();
        }
      }
    }
  }
  /** Gets whether a specific sanity check is enabled. */


  _checkIsEnabled(name) {
    if ((0,platform/* _isTestEnvironment */.Oy)()) {
      return false;
    }

    if (typeof this._sanityChecks === 'boolean') {
      return this._sanityChecks;
    }

    return !!this._sanityChecks[name];
  }

}

MatCommonModule.ɵfac = function MatCommonModule_Factory(t) {
  return new (t || MatCommonModule)(core["ɵɵinject"](HighContrastModeDetector), core["ɵɵinject"](MATERIAL_SANITY_CHECKS, 8), core["ɵɵinject"](common/* DOCUMENT */.K0));
};

MatCommonModule.ɵmod = /* @__PURE__ */core["ɵɵdefineNgModule"]({
  type: MatCommonModule,
  imports: [bidi/* BidiModule */.vT],
  exports: [bidi/* BidiModule */.vT]
});
MatCommonModule.ɵinj = /* @__PURE__ */core["ɵɵdefineInjector"]({
  imports: [[bidi/* BidiModule */.vT], bidi/* BidiModule */.vT]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && core["ɵsetClassMetadata"](MatCommonModule, [{
    type: core.NgModule,
    args: [{
      imports: [bidi/* BidiModule */.vT],
      exports: [bidi/* BidiModule */.vT]
    }]
  }], function () {
    return [{
      type: HighContrastModeDetector
    }, {
      type: undefined,
      decorators: [{
        type: core.Optional
      }, {
        type: core.Inject,
        args: [MATERIAL_SANITY_CHECKS]
      }]
    }, {
      type: Document,
      decorators: [{
        type: core.Inject,
        args: [common/* DOCUMENT */.K0]
      }]
    }];
  }, null);
})();
/** Checks that the page has a doctype. */


function _checkDoctypeIsDefined(doc) {
  if (!doc.doctype) {
    console.warn('Current document does not have a doctype. This may cause ' + 'some Angular Material components not to behave as expected.');
  }
}
/** Checks that a theme has been included. */


function _checkThemeIsPresent(doc) {
  // We need to assert that the `body` is defined, because these checks run very early
  // and the `body` won't be defined if the consumer put their scripts in the `head`.
  if (!doc.body || typeof getComputedStyle !== 'function') {
    return;
  }

  const testElement = doc.createElement('div');
  testElement.classList.add('mat-theme-loaded-marker');
  doc.body.appendChild(testElement);
  const computedStyle = getComputedStyle(testElement); // In some situations the computed style of the test element can be null. For example in
  // Firefox, the computed style is null if an application is running inside of a hidden iframe.
  // See: https://bugzilla.mozilla.org/show_bug.cgi?id=548397

  if (computedStyle && computedStyle.display !== 'none') {
    console.warn('Could not find Angular Material core theme. Most Material ' + 'components may not work as expected. For more info refer ' + 'to the theming guide: https://material.angular.io/guide/theming');
  }

  testElement.remove();
}
/** Checks whether the Material version matches the CDK version. */


function _checkCdkVersionMatch() {
  if (core_VERSION.full !== VERSION.full) {
    console.warn('The Angular Material version (' + core_VERSION.full + ') does not match ' + 'the Angular CDK version (' + VERSION.full + ').\n' + 'Please ensure the versions of these two packages exactly match.');
  }
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


function mixinDisabled(base) {
  return class extends base {
    constructor(...args) {
      super(...args);
      this._disabled = false;
    }

    get disabled() {
      return this._disabled;
    }

    set disabled(value) {
      this._disabled = (0,coercion/* coerceBooleanProperty */.Ig)(value);
    }

  };
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


function mixinColor(base, defaultColor) {
  return class extends base {
    constructor(...args) {
      super(...args);
      this.defaultColor = defaultColor; // Set the default color that can be specified from the mixin.

      this.color = defaultColor;
    }

    get color() {
      return this._color;
    }

    set color(value) {
      const colorPalette = value || this.defaultColor;

      if (colorPalette !== this._color) {
        if (this._color) {
          this._elementRef.nativeElement.classList.remove(`mat-${this._color}`);
        }

        if (colorPalette) {
          this._elementRef.nativeElement.classList.add(`mat-${colorPalette}`);
        }

        this._color = colorPalette;
      }
    }

  };
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


function mixinDisableRipple(base) {
  return class extends base {
    constructor(...args) {
      super(...args);
      this._disableRipple = false;
    }
    /** Whether the ripple effect is disabled or not. */


    get disableRipple() {
      return this._disableRipple;
    }

    set disableRipple(value) {
      this._disableRipple = coerceBooleanProperty(value);
    }

  };
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


function mixinTabIndex(base, defaultTabIndex = 0) {
  return class extends base {
    constructor(...args) {
      super(...args);
      this._tabIndex = defaultTabIndex;
      this.defaultTabIndex = defaultTabIndex;
    }

    get tabIndex() {
      return this.disabled ? -1 : this._tabIndex;
    }

    set tabIndex(value) {
      // If the specified tabIndex value is null or undefined, fall back to the default value.
      this._tabIndex = value != null ? coerceNumberProperty(value) : this.defaultTabIndex;
    }

  };
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


function mixinErrorState(base) {
  return class extends base {
    constructor(...args) {
      super(...args); // This class member exists as an interop with `MatFormFieldControl` which expects
      // a public `stateChanges` observable to emit whenever the form field should be updated.
      // The description is not specifically mentioning the error state, as classes using this
      // mixin can/should emit an event in other cases too.

      /** Emits whenever the component state changes. */

      this.stateChanges = new internal_Subject/* Subject */.x();
      /** Whether the component is in an error state. */

      this.errorState = false;
    }
    /** Updates the error state based on the provided error state matcher. */


    updateErrorState() {
      const oldState = this.errorState;
      const parent = this._parentFormGroup || this._parentForm;
      const matcher = this.errorStateMatcher || this._defaultErrorStateMatcher;
      const control = this.ngControl ? this.ngControl.control : null;
      const newState = matcher.isErrorState(control, parent);

      if (newState !== oldState) {
        this.errorState = newState;
        this.stateChanges.next();
      }
    }

  };
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Mixin to augment a directive with an initialized property that will emits when ngOnInit ends. */


function mixinInitialized(base) {
  return class extends base {
    constructor(...args) {
      super(...args);
      /** Whether this directive has been marked as initialized. */

      this._isInitialized = false;
      /**
       * List of subscribers that subscribed before the directive was initialized. Should be notified
       * during _markInitialized. Set to null after pending subscribers are notified, and should
       * not expect to be populated after.
       */

      this._pendingSubscribers = [];
      /**
       * Observable stream that emits when the directive initializes. If already initialized, the
       * subscriber is stored to be notified once _markInitialized is called.
       */

      this.initialized = new Observable(subscriber => {
        // If initialized, immediately notify the subscriber. Otherwise store the subscriber to notify
        // when _markInitialized is called.
        if (this._isInitialized) {
          this._notifySubscriber(subscriber);
        } else {
          this._pendingSubscribers.push(subscriber);
        }
      });
    }
    /**
     * Marks the state as initialized and notifies pending subscribers. Should be called at the end
     * of ngOnInit.
     * @docs-private
     */


    _markInitialized() {
      if (this._isInitialized && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw Error('This directive has already been marked as initialized and ' + 'should not be called twice.');
      }

      this._isInitialized = true;

      this._pendingSubscribers.forEach(this._notifySubscriber);

      this._pendingSubscribers = null;
    }
    /** Emits and completes the subscriber stream (should only emit once). */


    _notifySubscriber(subscriber) {
      subscriber.next();
      subscriber.complete();
    }

  };
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** InjectionToken for datepicker that can be used to override default locale code. */


const MAT_DATE_LOCALE = new core.InjectionToken('MAT_DATE_LOCALE', {
  providedIn: 'root',
  factory: MAT_DATE_LOCALE_FACTORY
});
/** @docs-private */

function MAT_DATE_LOCALE_FACTORY() {
  return (0,core.inject)(core.LOCALE_ID);
}
/** Adapts type `D` to be usable as a date by cdk-based components that work with dates. */


class DateAdapter {
  constructor() {
    this._localeChanges = new internal_Subject/* Subject */.x();
    /** A stream that emits when the locale changes. */

    this.localeChanges = this._localeChanges;
  }
  /**
   * Given a potential date object, returns that same date object if it is
   * a valid date, or `null` if it's not a valid date.
   * @param obj The object to check.
   * @returns A date or `null`.
   */


  getValidDateOrNull(obj) {
    return this.isDateInstance(obj) && this.isValid(obj) ? obj : null;
  }
  /**
   * Attempts to deserialize a value to a valid date object. This is different from parsing in that
   * deserialize should only accept non-ambiguous, locale-independent formats (e.g. a ISO 8601
   * string). The default implementation does not allow any deserialization, it simply checks that
   * the given value is already a valid date object or null. The `<mat-datepicker>` will call this
   * method on all of its `@Input()` properties that accept dates. It is therefore possible to
   * support passing values from your backend directly to these properties by overriding this method
   * to also deserialize the format used by your backend.
   * @param value The value to be deserialized into a date object.
   * @returns The deserialized date object, either a valid date, null if the value can be
   *     deserialized into a null date (e.g. the empty string), or an invalid date.
   */


  deserialize(value) {
    if (value == null || this.isDateInstance(value) && this.isValid(value)) {
      return value;
    }

    return this.invalid();
  }
  /**
   * Sets the locale used for all dates.
   * @param locale The new locale.
   */


  setLocale(locale) {
    this.locale = locale;

    this._localeChanges.next();
  }
  /**
   * Compares two dates.
   * @param first The first date to compare.
   * @param second The second date to compare.
   * @returns 0 if the dates are equal, a number less than 0 if the first date is earlier,
   *     a number greater than 0 if the first date is later.
   */


  compareDate(first, second) {
    return this.getYear(first) - this.getYear(second) || this.getMonth(first) - this.getMonth(second) || this.getDate(first) - this.getDate(second);
  }
  /**
   * Checks if two dates are equal.
   * @param first The first date to check.
   * @param second The second date to check.
   * @returns Whether the two dates are equal.
   *     Null dates are considered equal to other null dates.
   */


  sameDate(first, second) {
    if (first && second) {
      let firstValid = this.isValid(first);
      let secondValid = this.isValid(second);

      if (firstValid && secondValid) {
        return !this.compareDate(first, second);
      }

      return firstValid == secondValid;
    }

    return first == second;
  }
  /**
   * Clamp the given date between min and max dates.
   * @param date The date to clamp.
   * @param min The minimum value to allow. If null or omitted no min is enforced.
   * @param max The maximum value to allow. If null or omitted no max is enforced.
   * @returns `min` if `date` is less than `min`, `max` if date is greater than `max`,
   *     otherwise `date`.
   */


  clampDate(date, min, max) {
    if (min && this.compareDate(date, min) < 0) {
      return min;
    }

    if (max && this.compareDate(date, max) > 0) {
      return max;
    }

    return date;
  }

}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


const MAT_DATE_FORMATS = new core.InjectionToken('mat-date-formats');
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Matches strings that have the form of a valid RFC 3339 string
 * (https://tools.ietf.org/html/rfc3339). Note that the string may not actually be a valid date
 * because the regex will match strings an with out of bounds month, date, etc.
 */

const ISO_8601_REGEX = /^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|(?:(?:\+|-)\d{2}:\d{2}))?)?$/;
/** Creates an array and fills it with values. */

function range(length, valueFunction) {
  const valuesArray = Array(length);

  for (let i = 0; i < length; i++) {
    valuesArray[i] = valueFunction(i);
  }

  return valuesArray;
}
/** Adapts the native JS Date for use with cdk-based components that work with dates. */


class NativeDateAdapter extends DateAdapter {
  constructor(matDateLocale,
  /**
   * @deprecated No longer being used. To be removed.
   * @breaking-change 14.0.0
   */
  _platform) {
    super();
    /**
     * @deprecated No longer being used. To be removed.
     * @breaking-change 14.0.0
     */

    this.useUtcForDisplay = false;
    super.setLocale(matDateLocale);
  }

  getYear(date) {
    return date.getFullYear();
  }

  getMonth(date) {
    return date.getMonth();
  }

  getDate(date) {
    return date.getDate();
  }

  getDayOfWeek(date) {
    return date.getDay();
  }

  getMonthNames(style) {
    const dtf = new Intl.DateTimeFormat(this.locale, {
      month: style,
      timeZone: 'utc'
    });
    return range(12, i => this._format(dtf, new Date(2017, i, 1)));
  }

  getDateNames() {
    const dtf = new Intl.DateTimeFormat(this.locale, {
      day: 'numeric',
      timeZone: 'utc'
    });
    return range(31, i => this._format(dtf, new Date(2017, 0, i + 1)));
  }

  getDayOfWeekNames(style) {
    const dtf = new Intl.DateTimeFormat(this.locale, {
      weekday: style,
      timeZone: 'utc'
    });
    return range(7, i => this._format(dtf, new Date(2017, 0, i + 1)));
  }

  getYearName(date) {
    const dtf = new Intl.DateTimeFormat(this.locale, {
      year: 'numeric',
      timeZone: 'utc'
    });
    return this._format(dtf, date);
  }

  getFirstDayOfWeek() {
    // We can't tell using native JS Date what the first day of the week is, we default to Sunday.
    return 0;
  }

  getNumDaysInMonth(date) {
    return this.getDate(this._createDateWithOverflow(this.getYear(date), this.getMonth(date) + 1, 0));
  }

  clone(date) {
    return new Date(date.getTime());
  }

  createDate(year, month, date) {
    if (typeof ngDevMode === 'undefined' || ngDevMode) {
      // Check for invalid month and date (except upper bound on date which we have to check after
      // creating the Date).
      if (month < 0 || month > 11) {
        throw Error(`Invalid month index "${month}". Month index has to be between 0 and 11.`);
      }

      if (date < 1) {
        throw Error(`Invalid date "${date}". Date has to be greater than 0.`);
      }
    }

    let result = this._createDateWithOverflow(year, month, date); // Check that the date wasn't above the upper bound for the month, causing the month to overflow


    if (result.getMonth() != month && (typeof ngDevMode === 'undefined' || ngDevMode)) {
      throw Error(`Invalid date "${date}" for month with index "${month}".`);
    }

    return result;
  }

  today() {
    return new Date();
  }

  parse(value) {
    // We have no way using the native JS Date to set the parse format or locale, so we ignore these
    // parameters.
    if (typeof value == 'number') {
      return new Date(value);
    }

    return value ? new Date(Date.parse(value)) : null;
  }

  format(date, displayFormat) {
    if (!this.isValid(date)) {
      throw Error('NativeDateAdapter: Cannot format invalid date.');
    }

    const dtf = new Intl.DateTimeFormat(this.locale, { ...displayFormat,
      timeZone: 'utc'
    });
    return this._format(dtf, date);
  }

  addCalendarYears(date, years) {
    return this.addCalendarMonths(date, years * 12);
  }

  addCalendarMonths(date, months) {
    let newDate = this._createDateWithOverflow(this.getYear(date), this.getMonth(date) + months, this.getDate(date)); // It's possible to wind up in the wrong month if the original month has more days than the new
    // month. In this case we want to go to the last day of the desired month.
    // Note: the additional + 12 % 12 ensures we end up with a positive number, since JS % doesn't
    // guarantee this.


    if (this.getMonth(newDate) != ((this.getMonth(date) + months) % 12 + 12) % 12) {
      newDate = this._createDateWithOverflow(this.getYear(newDate), this.getMonth(newDate), 0);
    }

    return newDate;
  }

  addCalendarDays(date, days) {
    return this._createDateWithOverflow(this.getYear(date), this.getMonth(date), this.getDate(date) + days);
  }

  toIso8601(date) {
    return [date.getUTCFullYear(), this._2digit(date.getUTCMonth() + 1), this._2digit(date.getUTCDate())].join('-');
  }
  /**
   * Returns the given value if given a valid Date or null. Deserializes valid ISO 8601 strings
   * (https://www.ietf.org/rfc/rfc3339.txt) into valid Dates and empty string into null. Returns an
   * invalid date for all other values.
   */


  deserialize(value) {
    if (typeof value === 'string') {
      if (!value) {
        return null;
      } // The `Date` constructor accepts formats other than ISO 8601, so we need to make sure the
      // string is the right format first.


      if (ISO_8601_REGEX.test(value)) {
        let date = new Date(value);

        if (this.isValid(date)) {
          return date;
        }
      }
    }

    return super.deserialize(value);
  }

  isDateInstance(obj) {
    return obj instanceof Date;
  }

  isValid(date) {
    return !isNaN(date.getTime());
  }

  invalid() {
    return new Date(NaN);
  }
  /** Creates a date but allows the month and date to overflow. */


  _createDateWithOverflow(year, month, date) {
    // Passing the year to the constructor causes year numbers <100 to be converted to 19xx.
    // To work around this we use `setFullYear` and `setHours` instead.
    const d = new Date();
    d.setFullYear(year, month, date);
    d.setHours(0, 0, 0, 0);
    return d;
  }
  /**
   * Pads a number to make it two digits.
   * @param n The number to pad.
   * @returns The padded number.
   */


  _2digit(n) {
    return ('00' + n).slice(-2);
  }
  /**
   * When converting Date object to string, javascript built-in functions may return wrong
   * results because it applies its internal DST rules. The DST rules around the world change
   * very frequently, and the current valid rule is not always valid in previous years though.
   * We work around this problem building a new Date object which has its internal UTC
   * representation with the local date and time.
   * @param dtf Intl.DateTimeFormat object, containg the desired string format. It must have
   *    timeZone set to 'utc' to work fine.
   * @param date Date from which we want to get the string representation according to dtf
   * @returns A Date object with its UTC representation based on the passed in date info
   */


  _format(dtf, date) {
    // Passing the year to the constructor causes year numbers <100 to be converted to 19xx.
    // To work around this we use `setUTCFullYear` and `setUTCHours` instead.
    const d = new Date();
    d.setUTCFullYear(date.getFullYear(), date.getMonth(), date.getDate());
    d.setUTCHours(date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds());
    return dtf.format(d);
  }

}

NativeDateAdapter.ɵfac = function NativeDateAdapter_Factory(t) {
  return new (t || NativeDateAdapter)(core["ɵɵinject"](MAT_DATE_LOCALE, 8), core["ɵɵinject"](platform/* Platform */.t4));
};

NativeDateAdapter.ɵprov = /* @__PURE__ */core["ɵɵdefineInjectable"]({
  token: NativeDateAdapter,
  factory: NativeDateAdapter.ɵfac
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && core["ɵsetClassMetadata"](NativeDateAdapter, [{
    type: core.Injectable
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: core.Optional
      }, {
        type: core.Inject,
        args: [MAT_DATE_LOCALE]
      }]
    }, {
      type: platform/* Platform */.t4
    }];
  }, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


const MAT_NATIVE_DATE_FORMATS = {
  parse: {
    dateInput: null
  },
  display: {
    dateInput: {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric'
    },
    monthYearLabel: {
      year: 'numeric',
      month: 'short'
    },
    dateA11yLabel: {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    },
    monthYearA11yLabel: {
      year: 'numeric',
      month: 'long'
    }
  }
};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

class NativeDateModule {}

NativeDateModule.ɵfac = function NativeDateModule_Factory(t) {
  return new (t || NativeDateModule)();
};

NativeDateModule.ɵmod = /* @__PURE__ */core["ɵɵdefineNgModule"]({
  type: NativeDateModule
});
NativeDateModule.ɵinj = /* @__PURE__ */core["ɵɵdefineInjector"]({
  providers: [{
    provide: DateAdapter,
    useClass: NativeDateAdapter
  }]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && core["ɵsetClassMetadata"](NativeDateModule, [{
    type: core.NgModule,
    args: [{
      providers: [{
        provide: DateAdapter,
        useClass: NativeDateAdapter
      }]
    }]
  }], null, null);
})();

class MatNativeDateModule {}

MatNativeDateModule.ɵfac = function MatNativeDateModule_Factory(t) {
  return new (t || MatNativeDateModule)();
};

MatNativeDateModule.ɵmod = /* @__PURE__ */core["ɵɵdefineNgModule"]({
  type: MatNativeDateModule,
  imports: [NativeDateModule]
});
MatNativeDateModule.ɵinj = /* @__PURE__ */core["ɵɵdefineInjector"]({
  providers: [{
    provide: MAT_DATE_FORMATS,
    useValue: MAT_NATIVE_DATE_FORMATS
  }],
  imports: [[NativeDateModule]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && core["ɵsetClassMetadata"](MatNativeDateModule, [{
    type: core.NgModule,
    args: [{
      imports: [NativeDateModule],
      providers: [{
        provide: MAT_DATE_FORMATS,
        useValue: MAT_NATIVE_DATE_FORMATS
      }]
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Error state matcher that matches when a control is invalid and dirty. */


class ShowOnDirtyErrorStateMatcher {
  isErrorState(control, form) {
    return !!(control && control.invalid && (control.dirty || form && form.submitted));
  }

}

ShowOnDirtyErrorStateMatcher.ɵfac = function ShowOnDirtyErrorStateMatcher_Factory(t) {
  return new (t || ShowOnDirtyErrorStateMatcher)();
};

ShowOnDirtyErrorStateMatcher.ɵprov = /* @__PURE__ */core["ɵɵdefineInjectable"]({
  token: ShowOnDirtyErrorStateMatcher,
  factory: ShowOnDirtyErrorStateMatcher.ɵfac
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && core["ɵsetClassMetadata"](ShowOnDirtyErrorStateMatcher, [{
    type: core.Injectable
  }], null, null);
})();
/** Provider that defines how form controls behave with regards to displaying error messages. */


class ErrorStateMatcher {
  isErrorState(control, form) {
    return !!(control && control.invalid && (control.touched || form && form.submitted));
  }

}

ErrorStateMatcher.ɵfac = function ErrorStateMatcher_Factory(t) {
  return new (t || ErrorStateMatcher)();
};

ErrorStateMatcher.ɵprov = /* @__PURE__ */core["ɵɵdefineInjectable"]({
  token: ErrorStateMatcher,
  factory: ErrorStateMatcher.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && core["ɵsetClassMetadata"](ErrorStateMatcher, [{
    type: core.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Shared directive to count lines inside a text area, such as a list item.
 * Line elements can be extracted with a @ContentChildren(MatLine) query, then
 * counted by checking the query list's length.
 */


class MatLine {}

MatLine.ɵfac = function MatLine_Factory(t) {
  return new (t || MatLine)();
};

MatLine.ɵdir = /* @__PURE__ */core["ɵɵdefineDirective"]({
  type: MatLine,
  selectors: [["", "mat-line", ""], ["", "matLine", ""]],
  hostAttrs: [1, "mat-line"]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && core["ɵsetClassMetadata"](MatLine, [{
    type: core.Directive,
    args: [{
      selector: '[mat-line], [matLine]',
      host: {
        'class': 'mat-line'
      }
    }]
  }], null, null);
})();
/**
 * Helper that takes a query list of lines and sets the correct class on the host.
 * @docs-private
 */


function setLines(lines, element, prefix = 'mat') {
  // Note: doesn't need to unsubscribe, because `changes`
  // gets completed by Angular when the view is destroyed.
  lines.changes.pipe(startWith(lines)).subscribe(({
    length
  }) => {
    setClass(element, `${prefix}-2-line`, false);
    setClass(element, `${prefix}-3-line`, false);
    setClass(element, `${prefix}-multi-line`, false);

    if (length === 2 || length === 3) {
      setClass(element, `${prefix}-${length}-line`, true);
    } else if (length > 3) {
      setClass(element, `${prefix}-multi-line`, true);
    }
  });
}
/** Adds or removes a class from an element. */


function setClass(element, className, isAdd) {
  element.nativeElement.classList.toggle(className, isAdd);
}

class MatLineModule {}

MatLineModule.ɵfac = function MatLineModule_Factory(t) {
  return new (t || MatLineModule)();
};

MatLineModule.ɵmod = /* @__PURE__ */core["ɵɵdefineNgModule"]({
  type: MatLineModule,
  declarations: [MatLine],
  imports: [MatCommonModule],
  exports: [MatLine, MatCommonModule]
});
MatLineModule.ɵinj = /* @__PURE__ */core["ɵɵdefineInjector"]({
  imports: [[MatCommonModule], MatCommonModule]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && core["ɵsetClassMetadata"](MatLineModule, [{
    type: core.NgModule,
    args: [{
      imports: [MatCommonModule],
      exports: [MatLine, MatCommonModule],
      declarations: [MatLine]
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Reference to a previously launched ripple element.
 */


class RippleRef {
  constructor(_renderer,
  /** Reference to the ripple HTML element. */
  element,
  /** Ripple configuration used for the ripple. */
  config) {
    this._renderer = _renderer;
    this.element = element;
    this.config = config;
    /** Current state of the ripple. */

    this.state = 3
    /* HIDDEN */
    ;
  }
  /** Fades out the ripple element. */


  fadeOut() {
    this._renderer.fadeOutRipple(this);
  }

} // TODO: import these values from `@material/ripple` eventually.

/**
 * Default ripple animation configuration for ripples without an explicit
 * animation config specified.
 */


const defaultRippleAnimationConfig = {
  enterDuration: 225,
  exitDuration: 150
};
/**
 * Timeout for ignoring mouse events. Mouse events will be temporary ignored after touch
 * events to avoid synthetic mouse events.
 */

const ignoreMouseEventsTimeout = 800;
/** Options that apply to all the event listeners that are bound by the ripple renderer. */

const passiveEventOptions = (0,platform/* normalizePassiveListenerOptions */.i$)({
  passive: true
});
/** Events that signal that the pointer is down. */

const pointerDownEvents = ['mousedown', 'touchstart'];
/** Events that signal that the pointer is up. */

const pointerUpEvents = ['mouseup', 'mouseleave', 'touchend', 'touchcancel'];
/**
 * Helper service that performs DOM manipulations. Not intended to be used outside this module.
 * The constructor takes a reference to the ripple directive's host element and a map of DOM
 * event handlers to be installed on the element that triggers ripple animations.
 * This will eventually become a custom renderer once Angular support exists.
 * @docs-private
 */

class RippleRenderer {
  constructor(_target, _ngZone, elementOrElementRef, platform) {
    this._target = _target;
    this._ngZone = _ngZone;
    /** Whether the pointer is currently down or not. */

    this._isPointerDown = false;
    /** Set of currently active ripple references. */

    this._activeRipples = new Set();
    /** Whether pointer-up event listeners have been registered. */

    this._pointerUpEventsRegistered = false; // Only do anything if we're on the browser.

    if (platform.isBrowser) {
      this._containerElement = (0,coercion/* coerceElement */.fI)(elementOrElementRef);
    }
  }
  /**
   * Fades in a ripple at the given coordinates.
   * @param x Coordinate within the element, along the X axis at which to start the ripple.
   * @param y Coordinate within the element, along the Y axis at which to start the ripple.
   * @param config Extra ripple options.
   */


  fadeInRipple(x, y, config = {}) {
    const containerRect = this._containerRect = this._containerRect || this._containerElement.getBoundingClientRect();

    const animationConfig = { ...defaultRippleAnimationConfig,
      ...config.animation
    };

    if (config.centered) {
      x = containerRect.left + containerRect.width / 2;
      y = containerRect.top + containerRect.height / 2;
    }

    const radius = config.radius || distanceToFurthestCorner(x, y, containerRect);
    const offsetX = x - containerRect.left;
    const offsetY = y - containerRect.top;
    const duration = animationConfig.enterDuration;
    const ripple = document.createElement('div');
    ripple.classList.add('mat-ripple-element');
    ripple.style.left = `${offsetX - radius}px`;
    ripple.style.top = `${offsetY - radius}px`;
    ripple.style.height = `${radius * 2}px`;
    ripple.style.width = `${radius * 2}px`; // If a custom color has been specified, set it as inline style. If no color is
    // set, the default color will be applied through the ripple theme styles.

    if (config.color != null) {
      ripple.style.backgroundColor = config.color;
    }

    ripple.style.transitionDuration = `${duration}ms`;

    this._containerElement.appendChild(ripple); // By default the browser does not recalculate the styles of dynamically created
    // ripple elements. This is critical because then the `scale` would not animate properly.


    enforceStyleRecalculation(ripple);
    ripple.style.transform = 'scale(1)'; // Exposed reference to the ripple that will be returned.

    const rippleRef = new RippleRef(this, ripple, config);
    rippleRef.state = 0
    /* FADING_IN */
    ; // Add the ripple reference to the list of all active ripples.

    this._activeRipples.add(rippleRef);

    if (!config.persistent) {
      this._mostRecentTransientRipple = rippleRef;
    } // Wait for the ripple element to be completely faded in.
    // Once it's faded in, the ripple can be hidden immediately if the mouse is released.


    this._runTimeoutOutsideZone(() => {
      const isMostRecentTransientRipple = rippleRef === this._mostRecentTransientRipple;
      rippleRef.state = 1
      /* VISIBLE */
      ; // When the timer runs out while the user has kept their pointer down, we want to
      // keep only the persistent ripples and the latest transient ripple. We do this,
      // because we don't want stacked transient ripples to appear after their enter
      // animation has finished.

      if (!config.persistent && (!isMostRecentTransientRipple || !this._isPointerDown)) {
        rippleRef.fadeOut();
      }
    }, duration);

    return rippleRef;
  }
  /** Fades out a ripple reference. */


  fadeOutRipple(rippleRef) {
    const wasActive = this._activeRipples.delete(rippleRef);

    if (rippleRef === this._mostRecentTransientRipple) {
      this._mostRecentTransientRipple = null;
    } // Clear out the cached bounding rect if we have no more ripples.


    if (!this._activeRipples.size) {
      this._containerRect = null;
    } // For ripples that are not active anymore, don't re-run the fade-out animation.


    if (!wasActive) {
      return;
    }

    const rippleEl = rippleRef.element;
    const animationConfig = { ...defaultRippleAnimationConfig,
      ...rippleRef.config.animation
    };
    rippleEl.style.transitionDuration = `${animationConfig.exitDuration}ms`;
    rippleEl.style.opacity = '0';
    rippleRef.state = 2
    /* FADING_OUT */
    ; // Once the ripple faded out, the ripple can be safely removed from the DOM.

    this._runTimeoutOutsideZone(() => {
      rippleRef.state = 3
      /* HIDDEN */
      ;
      rippleEl.remove();
    }, animationConfig.exitDuration);
  }
  /** Fades out all currently active ripples. */


  fadeOutAll() {
    this._activeRipples.forEach(ripple => ripple.fadeOut());
  }
  /** Fades out all currently active non-persistent ripples. */


  fadeOutAllNonPersistent() {
    this._activeRipples.forEach(ripple => {
      if (!ripple.config.persistent) {
        ripple.fadeOut();
      }
    });
  }
  /** Sets up the trigger event listeners */


  setupTriggerEvents(elementOrElementRef) {
    const element = (0,coercion/* coerceElement */.fI)(elementOrElementRef);

    if (!element || element === this._triggerElement) {
      return;
    } // Remove all previously registered event listeners from the trigger element.


    this._removeTriggerEvents();

    this._triggerElement = element;

    this._registerEvents(pointerDownEvents);
  }
  /**
   * Handles all registered events.
   * @docs-private
   */


  handleEvent(event) {
    if (event.type === 'mousedown') {
      this._onMousedown(event);
    } else if (event.type === 'touchstart') {
      this._onTouchStart(event);
    } else {
      this._onPointerUp();
    } // If pointer-up events haven't been registered yet, do so now.
    // We do this on-demand in order to reduce the total number of event listeners
    // registered by the ripples, which speeds up the rendering time for large UIs.


    if (!this._pointerUpEventsRegistered) {
      this._registerEvents(pointerUpEvents);

      this._pointerUpEventsRegistered = true;
    }
  }
  /** Function being called whenever the trigger is being pressed using mouse. */


  _onMousedown(event) {
    // Screen readers will fire fake mouse events for space/enter. Skip launching a
    // ripple in this case for consistency with the non-screen-reader experience.
    const isFakeMousedown = isFakeMousedownFromScreenReader(event);
    const isSyntheticEvent = this._lastTouchStartEvent && Date.now() < this._lastTouchStartEvent + ignoreMouseEventsTimeout;

    if (!this._target.rippleDisabled && !isFakeMousedown && !isSyntheticEvent) {
      this._isPointerDown = true;
      this.fadeInRipple(event.clientX, event.clientY, this._target.rippleConfig);
    }
  }
  /** Function being called whenever the trigger is being pressed using touch. */


  _onTouchStart(event) {
    if (!this._target.rippleDisabled && !isFakeTouchstartFromScreenReader(event)) {
      // Some browsers fire mouse events after a `touchstart` event. Those synthetic mouse
      // events will launch a second ripple if we don't ignore mouse events for a specific
      // time after a touchstart event.
      this._lastTouchStartEvent = Date.now();
      this._isPointerDown = true; // Use `changedTouches` so we skip any touches where the user put
      // their finger down, but used another finger to tap the element again.

      const touches = event.changedTouches;

      for (let i = 0; i < touches.length; i++) {
        this.fadeInRipple(touches[i].clientX, touches[i].clientY, this._target.rippleConfig);
      }
    }
  }
  /** Function being called whenever the trigger is being released. */


  _onPointerUp() {
    if (!this._isPointerDown) {
      return;
    }

    this._isPointerDown = false; // Fade-out all ripples that are visible and not persistent.

    this._activeRipples.forEach(ripple => {
      // By default, only ripples that are completely visible will fade out on pointer release.
      // If the `terminateOnPointerUp` option is set, ripples that still fade in will also fade out.
      const isVisible = ripple.state === 1
      /* VISIBLE */
      || ripple.config.terminateOnPointerUp && ripple.state === 0
      /* FADING_IN */
      ;

      if (!ripple.config.persistent && isVisible) {
        ripple.fadeOut();
      }
    });
  }
  /** Runs a timeout outside of the Angular zone to avoid triggering the change detection. */


  _runTimeoutOutsideZone(fn, delay = 0) {
    this._ngZone.runOutsideAngular(() => setTimeout(fn, delay));
  }
  /** Registers event listeners for a given list of events. */


  _registerEvents(eventTypes) {
    this._ngZone.runOutsideAngular(() => {
      eventTypes.forEach(type => {
        this._triggerElement.addEventListener(type, this, passiveEventOptions);
      });
    });
  }
  /** Removes previously registered event listeners from the trigger element. */


  _removeTriggerEvents() {
    if (this._triggerElement) {
      pointerDownEvents.forEach(type => {
        this._triggerElement.removeEventListener(type, this, passiveEventOptions);
      });

      if (this._pointerUpEventsRegistered) {
        pointerUpEvents.forEach(type => {
          this._triggerElement.removeEventListener(type, this, passiveEventOptions);
        });
      }
    }
  }

}
/** Enforces a style recalculation of a DOM element by computing its styles. */


function enforceStyleRecalculation(element) {
  // Enforce a style recalculation by calling `getComputedStyle` and accessing any property.
  // Calling `getPropertyValue` is important to let optimizers know that this is not a noop.
  // See: https://gist.github.com/paulirish/5d52fb081b3570c81e3a
  window.getComputedStyle(element).getPropertyValue('opacity');
}
/**
 * Returns the distance from the point (x, y) to the furthest corner of a rectangle.
 */


function distanceToFurthestCorner(x, y, rect) {
  const distX = Math.max(Math.abs(x - rect.left), Math.abs(x - rect.right));
  const distY = Math.max(Math.abs(y - rect.top), Math.abs(y - rect.bottom));
  return Math.sqrt(distX * distX + distY * distY);
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Injection token that can be used to specify the global ripple options. */


const MAT_RIPPLE_GLOBAL_OPTIONS = new core.InjectionToken('mat-ripple-global-options');

class MatRipple {
  constructor(_elementRef, ngZone, platform, globalOptions, _animationMode) {
    this._elementRef = _elementRef;
    this._animationMode = _animationMode;
    /**
     * If set, the radius in pixels of foreground ripples when fully expanded. If unset, the radius
     * will be the distance from the center of the ripple to the furthest corner of the host element's
     * bounding rectangle.
     */

    this.radius = 0;
    this._disabled = false;
    /** Whether ripple directive is initialized and the input bindings are set. */

    this._isInitialized = false;
    this._globalOptions = globalOptions || {};
    this._rippleRenderer = new RippleRenderer(this, ngZone, _elementRef, platform);
  }
  /**
   * Whether click events will not trigger the ripple. Ripples can be still launched manually
   * by using the `launch()` method.
   */


  get disabled() {
    return this._disabled;
  }

  set disabled(value) {
    if (value) {
      this.fadeOutAllNonPersistent();
    }

    this._disabled = value;

    this._setupTriggerEventsIfEnabled();
  }
  /**
   * The element that triggers the ripple when click events are received.
   * Defaults to the directive's host element.
   */


  get trigger() {
    return this._trigger || this._elementRef.nativeElement;
  }

  set trigger(trigger) {
    this._trigger = trigger;

    this._setupTriggerEventsIfEnabled();
  }

  ngOnInit() {
    this._isInitialized = true;

    this._setupTriggerEventsIfEnabled();
  }

  ngOnDestroy() {
    this._rippleRenderer._removeTriggerEvents();
  }
  /** Fades out all currently showing ripple elements. */


  fadeOutAll() {
    this._rippleRenderer.fadeOutAll();
  }
  /** Fades out all currently showing non-persistent ripple elements. */


  fadeOutAllNonPersistent() {
    this._rippleRenderer.fadeOutAllNonPersistent();
  }
  /**
   * Ripple configuration from the directive's input values.
   * @docs-private Implemented as part of RippleTarget
   */


  get rippleConfig() {
    return {
      centered: this.centered,
      radius: this.radius,
      color: this.color,
      animation: { ...this._globalOptions.animation,
        ...(this._animationMode === 'NoopAnimations' ? {
          enterDuration: 0,
          exitDuration: 0
        } : {}),
        ...this.animation
      },
      terminateOnPointerUp: this._globalOptions.terminateOnPointerUp
    };
  }
  /**
   * Whether ripples on pointer-down are disabled or not.
   * @docs-private Implemented as part of RippleTarget
   */


  get rippleDisabled() {
    return this.disabled || !!this._globalOptions.disabled;
  }
  /** Sets up the trigger event listeners if ripples are enabled. */


  _setupTriggerEventsIfEnabled() {
    if (!this.disabled && this._isInitialized) {
      this._rippleRenderer.setupTriggerEvents(this.trigger);
    }
  }
  /** Launches a manual ripple at the specified coordinated or just by the ripple config. */


  launch(configOrX, y = 0, config) {
    if (typeof configOrX === 'number') {
      return this._rippleRenderer.fadeInRipple(configOrX, y, { ...this.rippleConfig,
        ...config
      });
    } else {
      return this._rippleRenderer.fadeInRipple(0, 0, { ...this.rippleConfig,
        ...configOrX
      });
    }
  }

}

MatRipple.ɵfac = function MatRipple_Factory(t) {
  return new (t || MatRipple)(core["ɵɵdirectiveInject"](core.ElementRef), core["ɵɵdirectiveInject"](core.NgZone), core["ɵɵdirectiveInject"](platform/* Platform */.t4), core["ɵɵdirectiveInject"](MAT_RIPPLE_GLOBAL_OPTIONS, 8), core["ɵɵdirectiveInject"](animations/* ANIMATION_MODULE_TYPE */.Qb, 8));
};

MatRipple.ɵdir = /* @__PURE__ */core["ɵɵdefineDirective"]({
  type: MatRipple,
  selectors: [["", "mat-ripple", ""], ["", "matRipple", ""]],
  hostAttrs: [1, "mat-ripple"],
  hostVars: 2,
  hostBindings: function MatRipple_HostBindings(rf, ctx) {
    if (rf & 2) {
      core["ɵɵclassProp"]("mat-ripple-unbounded", ctx.unbounded);
    }
  },
  inputs: {
    color: ["matRippleColor", "color"],
    unbounded: ["matRippleUnbounded", "unbounded"],
    centered: ["matRippleCentered", "centered"],
    radius: ["matRippleRadius", "radius"],
    animation: ["matRippleAnimation", "animation"],
    disabled: ["matRippleDisabled", "disabled"],
    trigger: ["matRippleTrigger", "trigger"]
  },
  exportAs: ["matRipple"]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && core["ɵsetClassMetadata"](MatRipple, [{
    type: core.Directive,
    args: [{
      selector: '[mat-ripple], [matRipple]',
      exportAs: 'matRipple',
      host: {
        'class': 'mat-ripple',
        '[class.mat-ripple-unbounded]': 'unbounded'
      }
    }]
  }], function () {
    return [{
      type: core.ElementRef
    }, {
      type: core.NgZone
    }, {
      type: platform/* Platform */.t4
    }, {
      type: undefined,
      decorators: [{
        type: core.Optional
      }, {
        type: core.Inject,
        args: [MAT_RIPPLE_GLOBAL_OPTIONS]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: core.Optional
      }, {
        type: core.Inject,
        args: [animations/* ANIMATION_MODULE_TYPE */.Qb]
      }]
    }];
  }, {
    color: [{
      type: core.Input,
      args: ['matRippleColor']
    }],
    unbounded: [{
      type: core.Input,
      args: ['matRippleUnbounded']
    }],
    centered: [{
      type: core.Input,
      args: ['matRippleCentered']
    }],
    radius: [{
      type: core.Input,
      args: ['matRippleRadius']
    }],
    animation: [{
      type: core.Input,
      args: ['matRippleAnimation']
    }],
    disabled: [{
      type: core.Input,
      args: ['matRippleDisabled']
    }],
    trigger: [{
      type: core.Input,
      args: ['matRippleTrigger']
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


class MatRippleModule {}

MatRippleModule.ɵfac = function MatRippleModule_Factory(t) {
  return new (t || MatRippleModule)();
};

MatRippleModule.ɵmod = /* @__PURE__ */core["ɵɵdefineNgModule"]({
  type: MatRippleModule,
  declarations: [MatRipple],
  imports: [MatCommonModule],
  exports: [MatRipple, MatCommonModule]
});
MatRippleModule.ɵinj = /* @__PURE__ */core["ɵɵdefineInjector"]({
  imports: [[MatCommonModule], MatCommonModule]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && core["ɵsetClassMetadata"](MatRippleModule, [{
    type: core.NgModule,
    args: [{
      imports: [MatCommonModule],
      exports: [MatRipple, MatCommonModule],
      declarations: [MatRipple]
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Component that shows a simplified checkbox without including any kind of "real" checkbox.
 * Meant to be used when the checkbox is purely decorative and a large number of them will be
 * included, such as for the options in a multi-select. Uses no SVGs or complex animations.
 * Note that theming is meant to be handled by the parent element, e.g.
 * `mat-primary .mat-pseudo-checkbox`.
 *
 * Note that this component will be completely invisible to screen-reader users. This is *not*
 * interchangeable with `<mat-checkbox>` and should *not* be used if the user would directly
 * interact with the checkbox. The pseudo-checkbox should only be used as an implementation detail
 * of more complex components that appropriately handle selected / checked state.
 * @docs-private
 */


class MatPseudoCheckbox {
  constructor(_animationMode) {
    this._animationMode = _animationMode;
    /** Display state of the checkbox. */

    this.state = 'unchecked';
    /** Whether the checkbox is disabled. */

    this.disabled = false;
  }

}

MatPseudoCheckbox.ɵfac = function MatPseudoCheckbox_Factory(t) {
  return new (t || MatPseudoCheckbox)(core["ɵɵdirectiveInject"](animations/* ANIMATION_MODULE_TYPE */.Qb, 8));
};

MatPseudoCheckbox.ɵcmp = /* @__PURE__ */core["ɵɵdefineComponent"]({
  type: MatPseudoCheckbox,
  selectors: [["mat-pseudo-checkbox"]],
  hostAttrs: [1, "mat-pseudo-checkbox"],
  hostVars: 8,
  hostBindings: function MatPseudoCheckbox_HostBindings(rf, ctx) {
    if (rf & 2) {
      core["ɵɵclassProp"]("mat-pseudo-checkbox-indeterminate", ctx.state === "indeterminate")("mat-pseudo-checkbox-checked", ctx.state === "checked")("mat-pseudo-checkbox-disabled", ctx.disabled)("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
    }
  },
  inputs: {
    state: "state",
    disabled: "disabled"
  },
  decls: 0,
  vars: 0,
  template: function MatPseudoCheckbox_Template(rf, ctx) {},
  styles: [".mat-pseudo-checkbox{width:16px;height:16px;border:2px solid;border-radius:2px;cursor:pointer;display:inline-block;vertical-align:middle;box-sizing:border-box;position:relative;flex-shrink:0;transition:border-color 90ms cubic-bezier(0, 0, 0.2, 0.1),background-color 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox::after{position:absolute;opacity:0;content:\"\";border-bottom:2px solid currentColor;transition:opacity 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox.mat-pseudo-checkbox-checked,.mat-pseudo-checkbox.mat-pseudo-checkbox-indeterminate{border-color:transparent}._mat-animation-noopable.mat-pseudo-checkbox{transition:none;animation:none}._mat-animation-noopable.mat-pseudo-checkbox::after{transition:none}.mat-pseudo-checkbox-disabled{cursor:default}.mat-pseudo-checkbox-indeterminate::after{top:5px;left:1px;width:10px;opacity:1;border-radius:2px}.mat-pseudo-checkbox-checked::after{top:2.4px;left:1px;width:8px;height:3px;border-left:2px solid currentColor;transform:rotate(-45deg);opacity:1;box-sizing:content-box}\n"],
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && core["ɵsetClassMetadata"](MatPseudoCheckbox, [{
    type: core.Component,
    args: [{
      encapsulation: core.ViewEncapsulation.None,
      changeDetection: core.ChangeDetectionStrategy.OnPush,
      selector: 'mat-pseudo-checkbox',
      template: '',
      host: {
        'class': 'mat-pseudo-checkbox',
        '[class.mat-pseudo-checkbox-indeterminate]': 'state === "indeterminate"',
        '[class.mat-pseudo-checkbox-checked]': 'state === "checked"',
        '[class.mat-pseudo-checkbox-disabled]': 'disabled',
        '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"'
      },
      styles: [".mat-pseudo-checkbox{width:16px;height:16px;border:2px solid;border-radius:2px;cursor:pointer;display:inline-block;vertical-align:middle;box-sizing:border-box;position:relative;flex-shrink:0;transition:border-color 90ms cubic-bezier(0, 0, 0.2, 0.1),background-color 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox::after{position:absolute;opacity:0;content:\"\";border-bottom:2px solid currentColor;transition:opacity 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox.mat-pseudo-checkbox-checked,.mat-pseudo-checkbox.mat-pseudo-checkbox-indeterminate{border-color:transparent}._mat-animation-noopable.mat-pseudo-checkbox{transition:none;animation:none}._mat-animation-noopable.mat-pseudo-checkbox::after{transition:none}.mat-pseudo-checkbox-disabled{cursor:default}.mat-pseudo-checkbox-indeterminate::after{top:5px;left:1px;width:10px;opacity:1;border-radius:2px}.mat-pseudo-checkbox-checked::after{top:2.4px;left:1px;width:8px;height:3px;border-left:2px solid currentColor;transform:rotate(-45deg);opacity:1;box-sizing:content-box}\n"]
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: core.Optional
      }, {
        type: core.Inject,
        args: [animations/* ANIMATION_MODULE_TYPE */.Qb]
      }]
    }];
  }, {
    state: [{
      type: core.Input
    }],
    disabled: [{
      type: core.Input
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


class MatPseudoCheckboxModule {}

MatPseudoCheckboxModule.ɵfac = function MatPseudoCheckboxModule_Factory(t) {
  return new (t || MatPseudoCheckboxModule)();
};

MatPseudoCheckboxModule.ɵmod = /* @__PURE__ */core["ɵɵdefineNgModule"]({
  type: MatPseudoCheckboxModule,
  declarations: [MatPseudoCheckbox],
  imports: [MatCommonModule],
  exports: [MatPseudoCheckbox]
});
MatPseudoCheckboxModule.ɵinj = /* @__PURE__ */core["ɵɵdefineInjector"]({
  imports: [[MatCommonModule]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && core["ɵsetClassMetadata"](MatPseudoCheckboxModule, [{
    type: core.NgModule,
    args: [{
      imports: [MatCommonModule],
      exports: [MatPseudoCheckbox],
      declarations: [MatPseudoCheckbox]
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Injection token used to provide the parent component to options.
 */


const MAT_OPTION_PARENT_COMPONENT = new core.InjectionToken('MAT_OPTION_PARENT_COMPONENT');
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Notes on the accessibility pattern used for `mat-optgroup`.
// The option group has two different "modes": regular and inert. The regular mode uses the
// recommended a11y pattern which has `role="group"` on the group element with `aria-labelledby`
// pointing to the label. This works for `mat-select`, but it seems to hit a bug for autocomplete
// under VoiceOver where the group doesn't get read out at all. The bug appears to be that if
// there's __any__ a11y-related attribute on the group (e.g. `role` or `aria-labelledby`),
// VoiceOver on Safari won't read it out.
// We've introduced the `inert` mode as a workaround. Under this mode, all a11y attributes are
// removed from the group, and we get the screen reader to read out the group label by mirroring it
// inside an invisible element in the option. This is sub-optimal, because the screen reader will
// repeat the group label on each navigation, whereas the default pattern only reads the group when
// the user enters a new group. The following alternate approaches were considered:
// 1. Reading out the group label using the `LiveAnnouncer` solves the problem, but we can't control
//    when the text will be read out so sometimes it comes in too late or never if the user
//    navigates quickly.
// 2. `<mat-option aria-describedby="groupLabel"` - This works on Safari, but VoiceOver in Chrome
//    won't read out the description at all.
// 3. `<mat-option aria-labelledby="optionLabel groupLabel"` - This works on Chrome, but Safari
//     doesn't read out the text at all. Furthermore, on
// Boilerplate for applying mixins to MatOptgroup.

/** @docs-private */

const _MatOptgroupMixinBase = mixinDisabled(class {}); // Counter for unique group ids.


let _uniqueOptgroupIdCounter = 0;

class _MatOptgroupBase extends _MatOptgroupMixinBase {
  constructor(parent) {
    super();
    /** Unique id for the underlying label. */

    this._labelId = `mat-optgroup-label-${_uniqueOptgroupIdCounter++}`;
    this._inert = parent?.inertGroups ?? false;
  }

}

_MatOptgroupBase.ɵfac = function _MatOptgroupBase_Factory(t) {
  return new (t || _MatOptgroupBase)(core["ɵɵdirectiveInject"](MAT_OPTION_PARENT_COMPONENT, 8));
};

_MatOptgroupBase.ɵdir = /* @__PURE__ */core["ɵɵdefineDirective"]({
  type: _MatOptgroupBase,
  inputs: {
    label: "label"
  },
  features: [core["ɵɵInheritDefinitionFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && core["ɵsetClassMetadata"](_MatOptgroupBase, [{
    type: core.Directive
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: core.Inject,
        args: [MAT_OPTION_PARENT_COMPONENT]
      }, {
        type: core.Optional
      }]
    }];
  }, {
    label: [{
      type: core.Input
    }]
  });
})();
/**
 * Injection token that can be used to reference instances of `MatOptgroup`. It serves as
 * alternative token to the actual `MatOptgroup` class which could cause unnecessary
 * retention of the class and its component metadata.
 */


const MAT_OPTGROUP = new core.InjectionToken('MatOptgroup');
/**
 * Component that is used to group instances of `mat-option`.
 */

class MatOptgroup extends _MatOptgroupBase {}

MatOptgroup.ɵfac = /* @__PURE__ */function () {
  let ɵMatOptgroup_BaseFactory;
  return function MatOptgroup_Factory(t) {
    return (ɵMatOptgroup_BaseFactory || (ɵMatOptgroup_BaseFactory = core["ɵɵgetInheritedFactory"](MatOptgroup)))(t || MatOptgroup);
  };
}();

MatOptgroup.ɵcmp = /* @__PURE__ */core["ɵɵdefineComponent"]({
  type: MatOptgroup,
  selectors: [["mat-optgroup"]],
  hostAttrs: [1, "mat-optgroup"],
  hostVars: 5,
  hostBindings: function MatOptgroup_HostBindings(rf, ctx) {
    if (rf & 2) {
      core["ɵɵattribute"]("role", ctx._inert ? null : "group")("aria-disabled", ctx._inert ? null : ctx.disabled.toString())("aria-labelledby", ctx._inert ? null : ctx._labelId);
      core["ɵɵclassProp"]("mat-optgroup-disabled", ctx.disabled);
    }
  },
  inputs: {
    disabled: "disabled"
  },
  exportAs: ["matOptgroup"],
  features: [core["ɵɵProvidersFeature"]([{
    provide: MAT_OPTGROUP,
    useExisting: MatOptgroup
  }]), core["ɵɵInheritDefinitionFeature"]],
  ngContentSelectors: _c1,
  decls: 4,
  vars: 2,
  consts: [["aria-hidden", "true", 1, "mat-optgroup-label", 3, "id"]],
  template: function MatOptgroup_Template(rf, ctx) {
    if (rf & 1) {
      core["ɵɵprojectionDef"](_c0);
      core["ɵɵelementStart"](0, "span", 0);
      core["ɵɵtext"](1);
      core["ɵɵprojection"](2);
      core["ɵɵelementEnd"]();
      core["ɵɵprojection"](3, 1);
    }

    if (rf & 2) {
      core["ɵɵproperty"]("id", ctx._labelId);
      core["ɵɵadvance"](1);
      core["ɵɵtextInterpolate1"]("", ctx.label, " ");
    }
  },
  styles: [".mat-optgroup-label{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;-webkit-user-select:none;user-select:none;cursor:default}.mat-optgroup-label[disabled]{cursor:default}[dir=rtl] .mat-optgroup-label{text-align:right}.mat-optgroup-label .mat-icon{margin-right:16px;vertical-align:middle}.mat-optgroup-label .mat-icon svg{vertical-align:top}[dir=rtl] .mat-optgroup-label .mat-icon{margin-left:16px;margin-right:0}\n"],
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && core["ɵsetClassMetadata"](MatOptgroup, [{
    type: core.Component,
    args: [{
      selector: 'mat-optgroup',
      exportAs: 'matOptgroup',
      encapsulation: core.ViewEncapsulation.None,
      changeDetection: core.ChangeDetectionStrategy.OnPush,
      inputs: ['disabled'],
      host: {
        'class': 'mat-optgroup',
        '[attr.role]': '_inert ? null : "group"',
        '[attr.aria-disabled]': '_inert ? null : disabled.toString()',
        '[attr.aria-labelledby]': '_inert ? null : _labelId',
        '[class.mat-optgroup-disabled]': 'disabled'
      },
      providers: [{
        provide: MAT_OPTGROUP,
        useExisting: MatOptgroup
      }],
      template: "<span class=\"mat-optgroup-label\" aria-hidden=\"true\" [id]=\"_labelId\">{{ label }} <ng-content></ng-content></span>\n<ng-content select=\"mat-option, ng-container\"></ng-content>\n",
      styles: [".mat-optgroup-label{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;-webkit-user-select:none;user-select:none;cursor:default}.mat-optgroup-label[disabled]{cursor:default}[dir=rtl] .mat-optgroup-label{text-align:right}.mat-optgroup-label .mat-icon{margin-right:16px;vertical-align:middle}.mat-optgroup-label .mat-icon svg{vertical-align:top}[dir=rtl] .mat-optgroup-label .mat-icon{margin-left:16px;margin-right:0}\n"]
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Option IDs need to be unique across components, so this counter exists outside of
 * the component definition.
 */


let _uniqueIdCounter = 0;
/** Event object emitted by MatOption when selected or deselected. */

class MatOptionSelectionChange {
  constructor(
  /** Reference to the option that emitted the event. */
  source,
  /** Whether the change in the option's value was a result of a user action. */
  isUserInput = false) {
    this.source = source;
    this.isUserInput = isUserInput;
  }

}

class _MatOptionBase {
  constructor(_element, _changeDetectorRef, _parent, group) {
    this._element = _element;
    this._changeDetectorRef = _changeDetectorRef;
    this._parent = _parent;
    this.group = group;
    this._selected = false;
    this._active = false;
    this._disabled = false;
    this._mostRecentViewValue = '';
    /** The unique ID of the option. */

    this.id = `mat-option-${_uniqueIdCounter++}`;
    /** Event emitted when the option is selected or deselected. */
    // tslint:disable-next-line:no-output-on-prefix

    this.onSelectionChange = new core.EventEmitter();
    /** Emits when the state of the option changes and any parents have to be notified. */

    this._stateChanges = new internal_Subject/* Subject */.x();
  }
  /** Whether the wrapping component is in multiple selection mode. */


  get multiple() {
    return this._parent && this._parent.multiple;
  }
  /** Whether or not the option is currently selected. */


  get selected() {
    return this._selected;
  }
  /** Whether the option is disabled. */


  get disabled() {
    return this.group && this.group.disabled || this._disabled;
  }

  set disabled(value) {
    this._disabled = (0,coercion/* coerceBooleanProperty */.Ig)(value);
  }
  /** Whether ripples for the option are disabled. */


  get disableRipple() {
    return !!(this._parent && this._parent.disableRipple);
  }
  /**
   * Whether or not the option is currently active and ready to be selected.
   * An active option displays styles as if it is focused, but the
   * focus is actually retained somewhere else. This comes in handy
   * for components like autocomplete where focus must remain on the input.
   */


  get active() {
    return this._active;
  }
  /**
   * The displayed value of the option. It is necessary to show the selected option in the
   * select's trigger.
   */


  get viewValue() {
    // TODO(kara): Add input property alternative for node envs.
    return (this._getHostElement().textContent || '').trim();
  }
  /** Selects the option. */


  select() {
    if (!this._selected) {
      this._selected = true;

      this._changeDetectorRef.markForCheck();

      this._emitSelectionChangeEvent();
    }
  }
  /** Deselects the option. */


  deselect() {
    if (this._selected) {
      this._selected = false;

      this._changeDetectorRef.markForCheck();

      this._emitSelectionChangeEvent();
    }
  }
  /** Sets focus onto this option. */


  focus(_origin, options) {
    // Note that we aren't using `_origin`, but we need to keep it because some internal consumers
    // use `MatOption` in a `FocusKeyManager` and we need it to match `FocusableOption`.
    const element = this._getHostElement();

    if (typeof element.focus === 'function') {
      element.focus(options);
    }
  }
  /**
   * This method sets display styles on the option to make it appear
   * active. This is used by the ActiveDescendantKeyManager so key
   * events will display the proper options as active on arrow key events.
   */


  setActiveStyles() {
    if (!this._active) {
      this._active = true;

      this._changeDetectorRef.markForCheck();
    }
  }
  /**
   * This method removes display styles on the option that made it appear
   * active. This is used by the ActiveDescendantKeyManager so key
   * events will display the proper options as active on arrow key events.
   */


  setInactiveStyles() {
    if (this._active) {
      this._active = false;

      this._changeDetectorRef.markForCheck();
    }
  }
  /** Gets the label to be used when determining whether the option should be focused. */


  getLabel() {
    return this.viewValue;
  }
  /** Ensures the option is selected when activated from the keyboard. */


  _handleKeydown(event) {
    if ((event.keyCode === ENTER || event.keyCode === SPACE) && !keycodes_hasModifierKey(event)) {
      this._selectViaInteraction(); // Prevent the page from scrolling down and form submits.


      event.preventDefault();
    }
  }
  /**
   * `Selects the option while indicating the selection came from the user. Used to
   * determine if the select's view -> model callback should be invoked.`
   */


  _selectViaInteraction() {
    if (!this.disabled) {
      this._selected = this.multiple ? !this._selected : true;

      this._changeDetectorRef.markForCheck();

      this._emitSelectionChangeEvent(true);
    }
  }
  /**
   * Gets the `aria-selected` value for the option. We explicitly omit the `aria-selected`
   * attribute from single-selection, unselected options. Including the `aria-selected="false"`
   * attributes adds a significant amount of noise to screen-reader users without providing useful
   * information.
   */


  _getAriaSelected() {
    return this.selected || (this.multiple ? false : null);
  }
  /** Returns the correct tabindex for the option depending on disabled state. */


  _getTabIndex() {
    return this.disabled ? '-1' : '0';
  }
  /** Gets the host DOM element. */


  _getHostElement() {
    return this._element.nativeElement;
  }

  ngAfterViewChecked() {
    // Since parent components could be using the option's label to display the selected values
    // (e.g. `mat-select`) and they don't have a way of knowing if the option's label has changed
    // we have to check for changes in the DOM ourselves and dispatch an event. These checks are
    // relatively cheap, however we still limit them only to selected options in order to avoid
    // hitting the DOM too often.
    if (this._selected) {
      const viewValue = this.viewValue;

      if (viewValue !== this._mostRecentViewValue) {
        this._mostRecentViewValue = viewValue;

        this._stateChanges.next();
      }
    }
  }

  ngOnDestroy() {
    this._stateChanges.complete();
  }
  /** Emits the selection change event. */


  _emitSelectionChangeEvent(isUserInput = false) {
    this.onSelectionChange.emit(new MatOptionSelectionChange(this, isUserInput));
  }

}

_MatOptionBase.ɵfac = function _MatOptionBase_Factory(t) {
  core["ɵɵinvalidFactory"]();
};

_MatOptionBase.ɵdir = /* @__PURE__ */core["ɵɵdefineDirective"]({
  type: _MatOptionBase,
  inputs: {
    value: "value",
    id: "id",
    disabled: "disabled"
  },
  outputs: {
    onSelectionChange: "onSelectionChange"
  }
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && core["ɵsetClassMetadata"](_MatOptionBase, [{
    type: core.Directive
  }], function () {
    return [{
      type: core.ElementRef
    }, {
      type: core.ChangeDetectorRef
    }, {
      type: undefined
    }, {
      type: _MatOptgroupBase
    }];
  }, {
    value: [{
      type: core.Input
    }],
    id: [{
      type: core.Input
    }],
    disabled: [{
      type: core.Input
    }],
    onSelectionChange: [{
      type: core.Output
    }]
  });
})();
/**
 * Single option inside of a `<mat-select>` element.
 */


class MatOption extends _MatOptionBase {
  constructor(element, changeDetectorRef, parent, group) {
    super(element, changeDetectorRef, parent, group);
  }

}

MatOption.ɵfac = function MatOption_Factory(t) {
  return new (t || MatOption)(core["ɵɵdirectiveInject"](core.ElementRef), core["ɵɵdirectiveInject"](core.ChangeDetectorRef), core["ɵɵdirectiveInject"](MAT_OPTION_PARENT_COMPONENT, 8), core["ɵɵdirectiveInject"](MAT_OPTGROUP, 8));
};

MatOption.ɵcmp = /* @__PURE__ */core["ɵɵdefineComponent"]({
  type: MatOption,
  selectors: [["mat-option"]],
  hostAttrs: ["role", "option", 1, "mat-option", "mat-focus-indicator"],
  hostVars: 12,
  hostBindings: function MatOption_HostBindings(rf, ctx) {
    if (rf & 1) {
      core["ɵɵlistener"]("click", function MatOption_click_HostBindingHandler() {
        return ctx._selectViaInteraction();
      })("keydown", function MatOption_keydown_HostBindingHandler($event) {
        return ctx._handleKeydown($event);
      });
    }

    if (rf & 2) {
      core["ɵɵhostProperty"]("id", ctx.id);
      core["ɵɵattribute"]("tabindex", ctx._getTabIndex())("aria-selected", ctx._getAriaSelected())("aria-disabled", ctx.disabled.toString());
      core["ɵɵclassProp"]("mat-selected", ctx.selected)("mat-option-multiple", ctx.multiple)("mat-active", ctx.active)("mat-option-disabled", ctx.disabled);
    }
  },
  exportAs: ["matOption"],
  features: [core["ɵɵInheritDefinitionFeature"]],
  ngContentSelectors: _c2,
  decls: 5,
  vars: 4,
  consts: [["class", "mat-option-pseudo-checkbox", 3, "state", "disabled", 4, "ngIf"], [1, "mat-option-text"], ["class", "cdk-visually-hidden", 4, "ngIf"], ["mat-ripple", "", 1, "mat-option-ripple", 3, "matRippleTrigger", "matRippleDisabled"], [1, "mat-option-pseudo-checkbox", 3, "state", "disabled"], [1, "cdk-visually-hidden"]],
  template: function MatOption_Template(rf, ctx) {
    if (rf & 1) {
      core["ɵɵprojectionDef"]();
      core["ɵɵtemplate"](0, MatOption_mat_pseudo_checkbox_0_Template, 1, 2, "mat-pseudo-checkbox", 0);
      core["ɵɵelementStart"](1, "span", 1);
      core["ɵɵprojection"](2);
      core["ɵɵelementEnd"]();
      core["ɵɵtemplate"](3, MatOption_span_3_Template, 2, 1, "span", 2);
      core["ɵɵelement"](4, "div", 3);
    }

    if (rf & 2) {
      core["ɵɵproperty"]("ngIf", ctx.multiple);
      core["ɵɵadvance"](3);
      core["ɵɵproperty"]("ngIf", ctx.group && ctx.group._inert);
      core["ɵɵadvance"](1);
      core["ɵɵproperty"]("matRippleTrigger", ctx._getHostElement())("matRippleDisabled", ctx.disabled || ctx.disableRipple);
    }
  },
  directives: [MatPseudoCheckbox, common/* NgIf */.O5, MatRipple],
  styles: [".mat-option{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;position:relative;cursor:pointer;outline:none;display:flex;flex-direction:row;max-width:100%;box-sizing:border-box;align-items:center;-webkit-tap-highlight-color:transparent}.mat-option[disabled]{cursor:default}[dir=rtl] .mat-option{text-align:right}.mat-option .mat-icon{margin-right:16px;vertical-align:middle}.mat-option .mat-icon svg{vertical-align:top}[dir=rtl] .mat-option .mat-icon{margin-left:16px;margin-right:0}.mat-option[aria-disabled=true]{-webkit-user-select:none;user-select:none;cursor:default}.mat-optgroup .mat-option:not(.mat-option-multiple){padding-left:32px}[dir=rtl] .mat-optgroup .mat-option:not(.mat-option-multiple){padding-left:16px;padding-right:32px}.cdk-high-contrast-active .mat-option{margin:0 1px}.cdk-high-contrast-active .mat-option.mat-active{border:solid 1px currentColor;margin:0}.cdk-high-contrast-active .mat-option[aria-disabled=true]{opacity:.5}.mat-option-text{display:inline-block;flex-grow:1;overflow:hidden;text-overflow:ellipsis}.mat-option .mat-option-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-option-pseudo-checkbox{margin-right:8px}[dir=rtl] .mat-option-pseudo-checkbox{margin-left:8px;margin-right:0}\n"],
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && core["ɵsetClassMetadata"](MatOption, [{
    type: core.Component,
    args: [{
      selector: 'mat-option',
      exportAs: 'matOption',
      host: {
        'role': 'option',
        '[attr.tabindex]': '_getTabIndex()',
        '[class.mat-selected]': 'selected',
        '[class.mat-option-multiple]': 'multiple',
        '[class.mat-active]': 'active',
        '[id]': 'id',
        '[attr.aria-selected]': '_getAriaSelected()',
        '[attr.aria-disabled]': 'disabled.toString()',
        '[class.mat-option-disabled]': 'disabled',
        '(click)': '_selectViaInteraction()',
        '(keydown)': '_handleKeydown($event)',
        'class': 'mat-option mat-focus-indicator'
      },
      encapsulation: core.ViewEncapsulation.None,
      changeDetection: core.ChangeDetectionStrategy.OnPush,
      template: "<mat-pseudo-checkbox *ngIf=\"multiple\" class=\"mat-option-pseudo-checkbox\"\n    [state]=\"selected ? 'checked' : 'unchecked'\" [disabled]=\"disabled\"></mat-pseudo-checkbox>\n\n<span class=\"mat-option-text\"><ng-content></ng-content></span>\n\n<!-- See a11y notes inside optgroup.ts for context behind this element. -->\n<span class=\"cdk-visually-hidden\" *ngIf=\"group && group._inert\">({{ group.label }})</span>\n\n<div class=\"mat-option-ripple\" mat-ripple\n     [matRippleTrigger]=\"_getHostElement()\"\n     [matRippleDisabled]=\"disabled || disableRipple\">\n</div>\n",
      styles: [".mat-option{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;position:relative;cursor:pointer;outline:none;display:flex;flex-direction:row;max-width:100%;box-sizing:border-box;align-items:center;-webkit-tap-highlight-color:transparent}.mat-option[disabled]{cursor:default}[dir=rtl] .mat-option{text-align:right}.mat-option .mat-icon{margin-right:16px;vertical-align:middle}.mat-option .mat-icon svg{vertical-align:top}[dir=rtl] .mat-option .mat-icon{margin-left:16px;margin-right:0}.mat-option[aria-disabled=true]{-webkit-user-select:none;user-select:none;cursor:default}.mat-optgroup .mat-option:not(.mat-option-multiple){padding-left:32px}[dir=rtl] .mat-optgroup .mat-option:not(.mat-option-multiple){padding-left:16px;padding-right:32px}.cdk-high-contrast-active .mat-option{margin:0 1px}.cdk-high-contrast-active .mat-option.mat-active{border:solid 1px currentColor;margin:0}.cdk-high-contrast-active .mat-option[aria-disabled=true]{opacity:.5}.mat-option-text{display:inline-block;flex-grow:1;overflow:hidden;text-overflow:ellipsis}.mat-option .mat-option-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-option-pseudo-checkbox{margin-right:8px}[dir=rtl] .mat-option-pseudo-checkbox{margin-left:8px;margin-right:0}\n"]
    }]
  }], function () {
    return [{
      type: core.ElementRef
    }, {
      type: core.ChangeDetectorRef
    }, {
      type: undefined,
      decorators: [{
        type: core.Optional
      }, {
        type: core.Inject,
        args: [MAT_OPTION_PARENT_COMPONENT]
      }]
    }, {
      type: MatOptgroup,
      decorators: [{
        type: core.Optional
      }, {
        type: core.Inject,
        args: [MAT_OPTGROUP]
      }]
    }];
  }, null);
})();
/**
 * Counts the amount of option group labels that precede the specified option.
 * @param optionIndex Index of the option at which to start counting.
 * @param options Flat list of all of the options.
 * @param optionGroups Flat list of all of the option groups.
 * @docs-private
 */


function _countGroupLabelsBeforeOption(optionIndex, options, optionGroups) {
  if (optionGroups.length) {
    let optionsArray = options.toArray();
    let groups = optionGroups.toArray();
    let groupCounter = 0;

    for (let i = 0; i < optionIndex + 1; i++) {
      if (optionsArray[i].group && optionsArray[i].group === groups[groupCounter]) {
        groupCounter++;
      }
    }

    return groupCounter;
  }

  return 0;
}
/**
 * Determines the position to which to scroll a panel in order for an option to be into view.
 * @param optionOffset Offset of the option from the top of the panel.
 * @param optionHeight Height of the options.
 * @param currentScrollPosition Current scroll position of the panel.
 * @param panelHeight Height of the panel.
 * @docs-private
 */


function _getOptionScrollPosition(optionOffset, optionHeight, currentScrollPosition, panelHeight) {
  if (optionOffset < currentScrollPosition) {
    return optionOffset;
  }

  if (optionOffset + optionHeight > currentScrollPosition + panelHeight) {
    return Math.max(0, optionOffset - panelHeight + optionHeight);
  }

  return currentScrollPosition;
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


class MatOptionModule {}

MatOptionModule.ɵfac = function MatOptionModule_Factory(t) {
  return new (t || MatOptionModule)();
};

MatOptionModule.ɵmod = /* @__PURE__ */core["ɵɵdefineNgModule"]({
  type: MatOptionModule,
  declarations: [MatOption, MatOptgroup],
  imports: [MatRippleModule, common/* CommonModule */.ez, MatCommonModule, MatPseudoCheckboxModule],
  exports: [MatOption, MatOptgroup]
});
MatOptionModule.ɵinj = /* @__PURE__ */core["ɵɵdefineInjector"]({
  imports: [[MatRippleModule, common/* CommonModule */.ez, MatCommonModule, MatPseudoCheckboxModule]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && core["ɵsetClassMetadata"](MatOptionModule, [{
    type: core.NgModule,
    args: [{
      imports: [MatRippleModule, common/* CommonModule */.ez, MatCommonModule, MatPseudoCheckboxModule],
      exports: [MatOption, MatOptgroup],
      declarations: [MatOption, MatOptgroup]
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */


 //# sourceMappingURL=core.mjs.map

/***/ }),

/***/ "./node_modules/@angular/material/fesm2020/form-field.mjs":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "G_": () => (/* binding */ MAT_FORM_FIELD),
  "KE": () => (/* binding */ MatFormField),
  "Eo": () => (/* binding */ MatFormFieldControl),
  "lN": () => (/* binding */ MatFormFieldModule)
});

// UNUSED EXPORTS: MAT_ERROR, MAT_FORM_FIELD_DEFAULT_OPTIONS, MAT_PREFIX, MAT_SUFFIX, MatError, MatHint, MatLabel, MatPlaceholder, MatPrefix, MatSuffix, _MAT_HINT, getMatFormFieldDuplicatedHintError, getMatFormFieldMissingControlError, getMatFormFieldPlaceholderConflictError, matFormFieldAnimations

// EXTERNAL MODULE: ./node_modules/@angular/cdk/fesm2020/observers.mjs + 1 modules
var observers = __webpack_require__("./node_modules/@angular/cdk/fesm2020/observers.mjs");
// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2020/common.mjs
var common = __webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs");
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2020/core.mjs + 1 modules
var core = __webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs");
// EXTERNAL MODULE: ./node_modules/@angular/material/fesm2020/core.mjs + 8 modules
var fesm2020_core = __webpack_require__("./node_modules/@angular/material/fesm2020/core.mjs");
// EXTERNAL MODULE: ./node_modules/@angular/cdk/fesm2020/bidi.mjs
var bidi = __webpack_require__("./node_modules/@angular/cdk/fesm2020/bidi.mjs");
// EXTERNAL MODULE: ./node_modules/@angular/cdk/fesm2020/coercion.mjs
var coercion = __webpack_require__("./node_modules/@angular/cdk/fesm2020/coercion.mjs");
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/Subject.js + 1 modules
var Subject = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/Subject.js");
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/observable/merge.js
var merge = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/merge.js");
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/observable/fromEvent.js
var fromEvent = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/fromEvent.js");
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/mergeAll.js
var mergeAll = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/mergeAll.js");
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/concatAll.js

function concatAll() {
    return (0,mergeAll/* mergeAll */.J)(1);
}
//# sourceMappingURL=concatAll.js.map
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/util/args.js
var util_args = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/args.js");
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/observable/from.js + 9 modules
var from = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/from.js");
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/observable/concat.js



function concat() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return concatAll()((0,from/* from */.D)(args, (0,util_args/* popScheduler */.yG)(args)));
}
//# sourceMappingURL=concat.js.map
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/util/lift.js
var lift = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/lift.js");
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/startWith.js



function startWith() {
    var values = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        values[_i] = arguments[_i];
    }
    var scheduler = (0,util_args/* popScheduler */.yG)(values);
    return (0,lift/* operate */.e)(function (source, subscriber) {
        (scheduler ? concat(values, source, scheduler) : concat(values, source)).subscribe(subscriber);
    });
}
//# sourceMappingURL=startWith.js.map
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/takeUntil.js
var takeUntil = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/takeUntil.js");
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/take.js
var take = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/take.js");
// EXTERNAL MODULE: ./node_modules/@angular/animations/fesm2020/animations.mjs
var animations = __webpack_require__("./node_modules/@angular/animations/fesm2020/animations.mjs");
// EXTERNAL MODULE: ./node_modules/@angular/cdk/fesm2020/platform.mjs
var platform = __webpack_require__("./node_modules/@angular/cdk/fesm2020/platform.mjs");
// EXTERNAL MODULE: ./node_modules/@angular/platform-browser/fesm2020/animations.mjs + 1 modules
var fesm2020_animations = __webpack_require__("./node_modules/@angular/platform-browser/fesm2020/animations.mjs");
;// CONCATENATED MODULE: ./node_modules/@angular/material/fesm2020/form-field.mjs














/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

const _c0 = ["connectionContainer"];
const _c1 = ["inputContainer"];
const _c2 = ["label"];

function MatFormField_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    core["ɵɵelementContainerStart"](0);
    core["ɵɵelementStart"](1, "div", 14);
    core["ɵɵelement"](2, "div", 15)(3, "div", 16)(4, "div", 17);
    core["ɵɵelementEnd"]();
    core["ɵɵelementStart"](5, "div", 18);
    core["ɵɵelement"](6, "div", 15)(7, "div", 16)(8, "div", 17);
    core["ɵɵelementEnd"]();
    core["ɵɵelementContainerEnd"]();
  }
}

function MatFormField_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = core["ɵɵgetCurrentView"]();

    core["ɵɵelementStart"](0, "div", 19);
    core["ɵɵlistener"]("cdkObserveContent", function MatFormField_div_4_Template_div_cdkObserveContent_0_listener() {
      core["ɵɵrestoreView"](_r10);
      const ctx_r9 = core["ɵɵnextContext"]();
      return ctx_r9.updateOutlineGap();
    });
    core["ɵɵprojection"](1, 1);
    core["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = core["ɵɵnextContext"]();
    core["ɵɵproperty"]("cdkObserveContentDisabled", ctx_r2.appearance != "outline");
  }
}

function MatFormField_label_9_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    core["ɵɵelementContainerStart"](0);
    core["ɵɵprojection"](1, 2);
    core["ɵɵelementStart"](2, "span");
    core["ɵɵtext"](3);
    core["ɵɵelementEnd"]();
    core["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r12 = core["ɵɵnextContext"](2);
    core["ɵɵadvance"](3);
    core["ɵɵtextInterpolate"](ctx_r12._control.placeholder);
  }
}

function MatFormField_label_9_ng_content_3_Template(rf, ctx) {
  if (rf & 1) {
    core["ɵɵprojection"](0, 3, ["*ngSwitchCase", "true"]);
  }
}

function MatFormField_label_9_span_4_Template(rf, ctx) {
  if (rf & 1) {
    core["ɵɵelementStart"](0, "span", 23);
    core["ɵɵtext"](1, " *");
    core["ɵɵelementEnd"]();
  }
}

function MatFormField_label_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = core["ɵɵgetCurrentView"]();

    core["ɵɵelementStart"](0, "label", 20, 21);
    core["ɵɵlistener"]("cdkObserveContent", function MatFormField_label_9_Template_label_cdkObserveContent_0_listener() {
      core["ɵɵrestoreView"](_r16);
      const ctx_r15 = core["ɵɵnextContext"]();
      return ctx_r15.updateOutlineGap();
    });
    core["ɵɵtemplate"](2, MatFormField_label_9_ng_container_2_Template, 4, 1, "ng-container", 12);
    core["ɵɵtemplate"](3, MatFormField_label_9_ng_content_3_Template, 1, 0, "ng-content", 12);
    core["ɵɵtemplate"](4, MatFormField_label_9_span_4_Template, 2, 0, "span", 22);
    core["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r4 = core["ɵɵnextContext"]();
    core["ɵɵclassProp"]("mat-empty", ctx_r4._control.empty && !ctx_r4._shouldAlwaysFloat())("mat-form-field-empty", ctx_r4._control.empty && !ctx_r4._shouldAlwaysFloat())("mat-accent", ctx_r4.color == "accent")("mat-warn", ctx_r4.color == "warn");
    core["ɵɵproperty"]("cdkObserveContentDisabled", ctx_r4.appearance != "outline")("id", ctx_r4._labelId)("ngSwitch", ctx_r4._hasLabel());
    core["ɵɵattribute"]("for", ctx_r4._control.id)("aria-owns", ctx_r4._control.id);
    core["ɵɵadvance"](2);
    core["ɵɵproperty"]("ngSwitchCase", false);
    core["ɵɵadvance"](1);
    core["ɵɵproperty"]("ngSwitchCase", true);
    core["ɵɵadvance"](1);
    core["ɵɵproperty"]("ngIf", !ctx_r4.hideRequiredMarker && ctx_r4._control.required && !ctx_r4._control.disabled);
  }
}

function MatFormField_div_10_Template(rf, ctx) {
  if (rf & 1) {
    core["ɵɵelementStart"](0, "div", 24);
    core["ɵɵprojection"](1, 4);
    core["ɵɵelementEnd"]();
  }
}

function MatFormField_div_11_Template(rf, ctx) {
  if (rf & 1) {
    core["ɵɵelementStart"](0, "div", 25);
    core["ɵɵelement"](1, "span", 26);
    core["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r6 = core["ɵɵnextContext"]();
    core["ɵɵadvance"](1);
    core["ɵɵclassProp"]("mat-accent", ctx_r6.color == "accent")("mat-warn", ctx_r6.color == "warn");
  }
}

function MatFormField_div_13_Template(rf, ctx) {
  if (rf & 1) {
    core["ɵɵelementStart"](0, "div");
    core["ɵɵprojection"](1, 5);
    core["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r7 = core["ɵɵnextContext"]();
    core["ɵɵproperty"]("@transitionMessages", ctx_r7._subscriptAnimationState);
  }
}

function MatFormField_div_14_div_1_Template(rf, ctx) {
  if (rf & 1) {
    core["ɵɵelementStart"](0, "div", 30);
    core["ɵɵtext"](1);
    core["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r17 = core["ɵɵnextContext"](2);
    core["ɵɵproperty"]("id", ctx_r17._hintLabelId);
    core["ɵɵadvance"](1);
    core["ɵɵtextInterpolate"](ctx_r17.hintLabel);
  }
}

function MatFormField_div_14_Template(rf, ctx) {
  if (rf & 1) {
    core["ɵɵelementStart"](0, "div", 27);
    core["ɵɵtemplate"](1, MatFormField_div_14_div_1_Template, 2, 2, "div", 28);
    core["ɵɵprojection"](2, 6);
    core["ɵɵelement"](3, "div", 29);
    core["ɵɵprojection"](4, 7);
    core["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r8 = core["ɵɵnextContext"]();
    core["ɵɵproperty"]("@transitionMessages", ctx_r8._subscriptAnimationState);
    core["ɵɵadvance"](1);
    core["ɵɵproperty"]("ngIf", ctx_r8.hintLabel);
  }
}

const _c3 = ["*", [["", "matPrefix", ""]], [["mat-placeholder"]], [["mat-label"]], [["", "matSuffix", ""]], [["mat-error"]], [["mat-hint", 3, "align", "end"]], [["mat-hint", "align", "end"]]];
const _c4 = ["*", "[matPrefix]", "mat-placeholder", "mat-label", "[matSuffix]", "mat-error", "mat-hint:not([align='end'])", "mat-hint[align='end']"];
let nextUniqueId$2 = 0;
/**
 * Injection token that can be used to reference instances of `MatError`. It serves as
 * alternative token to the actual `MatError` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */

const MAT_ERROR = new core.InjectionToken('MatError');
/** Single error message to be shown underneath the form field. */

class MatError {
  constructor(ariaLive, elementRef) {
    this.id = `mat-error-${nextUniqueId$2++}`; // If no aria-live value is set add 'polite' as a default. This is preferred over setting
    // role='alert' so that screen readers do not interrupt the current task to read this aloud.

    if (!ariaLive) {
      elementRef.nativeElement.setAttribute('aria-live', 'polite');
    }
  }

}

MatError.ɵfac = function MatError_Factory(t) {
  return new (t || MatError)(core["ɵɵinjectAttribute"]('aria-live'), core["ɵɵdirectiveInject"](core.ElementRef));
};

MatError.ɵdir = /* @__PURE__ */core["ɵɵdefineDirective"]({
  type: MatError,
  selectors: [["mat-error"]],
  hostAttrs: ["aria-atomic", "true", 1, "mat-error"],
  hostVars: 1,
  hostBindings: function MatError_HostBindings(rf, ctx) {
    if (rf & 2) {
      core["ɵɵattribute"]("id", ctx.id);
    }
  },
  inputs: {
    id: "id"
  },
  features: [core["ɵɵProvidersFeature"]([{
    provide: MAT_ERROR,
    useExisting: MatError
  }])]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && core["ɵsetClassMetadata"](MatError, [{
    type: core.Directive,
    args: [{
      selector: 'mat-error',
      host: {
        'class': 'mat-error',
        '[attr.id]': 'id',
        'aria-atomic': 'true'
      },
      providers: [{
        provide: MAT_ERROR,
        useExisting: MatError
      }]
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: core.Attribute,
        args: ['aria-live']
      }]
    }, {
      type: core.ElementRef
    }];
  }, {
    id: [{
      type: core.Input
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Animations used by the MatFormField.
 * @docs-private
 */


const matFormFieldAnimations = {
  /** Animation that transitions the form field's error and hint messages. */
  transitionMessages: (0,animations/* trigger */.X$)('transitionMessages', [// TODO(mmalerba): Use angular animations for label animation as well.
  (0,animations/* state */.SB)('enter', (0,animations/* style */.oB)({
    opacity: 1,
    transform: 'translateY(0%)'
  })), (0,animations/* transition */.eR)('void => enter', [(0,animations/* style */.oB)({
    opacity: 0,
    transform: 'translateY(-5px)'
  }), (0,animations/* animate */.jt)('300ms cubic-bezier(0.55, 0, 0.55, 0.2)')])])
};
/** An interface which allows a control to work inside of a `MatFormField`. */

class MatFormFieldControl {}

MatFormFieldControl.ɵfac = function MatFormFieldControl_Factory(t) {
  return new (t || MatFormFieldControl)();
};

MatFormFieldControl.ɵdir = /* @__PURE__ */core["ɵɵdefineDirective"]({
  type: MatFormFieldControl
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && core["ɵsetClassMetadata"](MatFormFieldControl, [{
    type: core.Directive
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** @docs-private */


function getMatFormFieldPlaceholderConflictError() {
  return Error('Placeholder attribute and child element were both specified.');
}
/** @docs-private */


function getMatFormFieldDuplicatedHintError(align) {
  return Error(`A hint was already declared for 'align="${align}"'.`);
}
/** @docs-private */


function getMatFormFieldMissingControlError() {
  return Error('mat-form-field must contain a MatFormFieldControl.');
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


let nextUniqueId$1 = 0;
/**
 * Injection token that can be used to reference instances of `MatHint`. It serves as
 * alternative token to the actual `MatHint` class which could cause unnecessary
 * retention of the class and its directive metadata.
 *
 * *Note*: This is not part of the public API as the MDC-based form-field will not
 * need a lightweight token for `MatHint` and we want to reduce breaking changes.
 */

const _MAT_HINT = new core.InjectionToken('MatHint');
/** Hint text to be shown underneath the form field control. */


class MatHint {
  constructor() {
    /** Whether to align the hint label at the start or end of the line. */
    this.align = 'start';
    /** Unique ID for the hint. Used for the aria-describedby on the form field control. */

    this.id = `mat-hint-${nextUniqueId$1++}`;
  }

}

MatHint.ɵfac = function MatHint_Factory(t) {
  return new (t || MatHint)();
};

MatHint.ɵdir = /* @__PURE__ */core["ɵɵdefineDirective"]({
  type: MatHint,
  selectors: [["mat-hint"]],
  hostAttrs: [1, "mat-hint"],
  hostVars: 4,
  hostBindings: function MatHint_HostBindings(rf, ctx) {
    if (rf & 2) {
      core["ɵɵattribute"]("id", ctx.id)("align", null);
      core["ɵɵclassProp"]("mat-form-field-hint-end", ctx.align === "end");
    }
  },
  inputs: {
    align: "align",
    id: "id"
  },
  features: [core["ɵɵProvidersFeature"]([{
    provide: _MAT_HINT,
    useExisting: MatHint
  }])]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && core["ɵsetClassMetadata"](MatHint, [{
    type: core.Directive,
    args: [{
      selector: 'mat-hint',
      host: {
        'class': 'mat-hint',
        '[class.mat-form-field-hint-end]': 'align === "end"',
        '[attr.id]': 'id',
        // Remove align attribute to prevent it from interfering with layout.
        '[attr.align]': 'null'
      },
      providers: [{
        provide: _MAT_HINT,
        useExisting: MatHint
      }]
    }]
  }], null, {
    align: [{
      type: core.Input
    }],
    id: [{
      type: core.Input
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** The floating label for a `mat-form-field`. */


class MatLabel {}

MatLabel.ɵfac = function MatLabel_Factory(t) {
  return new (t || MatLabel)();
};

MatLabel.ɵdir = /* @__PURE__ */core["ɵɵdefineDirective"]({
  type: MatLabel,
  selectors: [["mat-label"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && core["ɵsetClassMetadata"](MatLabel, [{
    type: core.Directive,
    args: [{
      selector: 'mat-label'
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * The placeholder text for an `MatFormField`.
 * @deprecated Use `<mat-label>` to specify the label and the `placeholder` attribute to specify the
 *     placeholder.
 * @breaking-change 8.0.0
 */


class MatPlaceholder {}

MatPlaceholder.ɵfac = function MatPlaceholder_Factory(t) {
  return new (t || MatPlaceholder)();
};

MatPlaceholder.ɵdir = /* @__PURE__ */core["ɵɵdefineDirective"]({
  type: MatPlaceholder,
  selectors: [["mat-placeholder"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && core["ɵsetClassMetadata"](MatPlaceholder, [{
    type: core.Directive,
    args: [{
      selector: 'mat-placeholder'
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Injection token that can be used to reference instances of `MatPrefix`. It serves as
 * alternative token to the actual `MatPrefix` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */


const MAT_PREFIX = new core.InjectionToken('MatPrefix');
/** Prefix to be placed in front of the form field. */

class MatPrefix {}

MatPrefix.ɵfac = function MatPrefix_Factory(t) {
  return new (t || MatPrefix)();
};

MatPrefix.ɵdir = /* @__PURE__ */core["ɵɵdefineDirective"]({
  type: MatPrefix,
  selectors: [["", "matPrefix", ""]],
  features: [core["ɵɵProvidersFeature"]([{
    provide: MAT_PREFIX,
    useExisting: MatPrefix
  }])]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && core["ɵsetClassMetadata"](MatPrefix, [{
    type: core.Directive,
    args: [{
      selector: '[matPrefix]',
      providers: [{
        provide: MAT_PREFIX,
        useExisting: MatPrefix
      }]
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Injection token that can be used to reference instances of `MatSuffix`. It serves as
 * alternative token to the actual `MatSuffix` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */


const MAT_SUFFIX = new core.InjectionToken('MatSuffix');
/** Suffix to be placed at the end of the form field. */

class MatSuffix {}

MatSuffix.ɵfac = function MatSuffix_Factory(t) {
  return new (t || MatSuffix)();
};

MatSuffix.ɵdir = /* @__PURE__ */core["ɵɵdefineDirective"]({
  type: MatSuffix,
  selectors: [["", "matSuffix", ""]],
  features: [core["ɵɵProvidersFeature"]([{
    provide: MAT_SUFFIX,
    useExisting: MatSuffix
  }])]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && core["ɵsetClassMetadata"](MatSuffix, [{
    type: core.Directive,
    args: [{
      selector: '[matSuffix]',
      providers: [{
        provide: MAT_SUFFIX,
        useExisting: MatSuffix
      }]
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


let nextUniqueId = 0;
const floatingLabelScale = 0.75;
const outlineGapPadding = 5;
/**
 * Boilerplate for applying mixins to MatFormField.
 * @docs-private
 */

const _MatFormFieldBase = (0,fesm2020_core/* mixinColor */.pj)(class {
  constructor(_elementRef) {
    this._elementRef = _elementRef;
  }

}, 'primary');
/**
 * Injection token that can be used to configure the
 * default options for all form field within an app.
 */


const MAT_FORM_FIELD_DEFAULT_OPTIONS = new core.InjectionToken('MAT_FORM_FIELD_DEFAULT_OPTIONS');
/**
 * Injection token that can be used to inject an instances of `MatFormField`. It serves
 * as alternative token to the actual `MatFormField` class which would cause unnecessary
 * retention of the `MatFormField` class and its component metadata.
 */

const MAT_FORM_FIELD = new core.InjectionToken('MatFormField');
/** Container for form controls that applies Material Design styling and behavior. */

class MatFormField extends _MatFormFieldBase {
  constructor(elementRef, _changeDetectorRef, _dir, _defaults, _platform, _ngZone, _animationMode) {
    super(elementRef);
    this._changeDetectorRef = _changeDetectorRef;
    this._dir = _dir;
    this._defaults = _defaults;
    this._platform = _platform;
    this._ngZone = _ngZone;
    /**
     * Whether the outline gap needs to be calculated
     * immediately on the next change detection run.
     */

    this._outlineGapCalculationNeededImmediately = false;
    /** Whether the outline gap needs to be calculated next time the zone has stabilized. */

    this._outlineGapCalculationNeededOnStable = false;
    this._destroyed = new Subject/* Subject */.x();
    /** Override for the logic that disables the label animation in certain cases. */

    this._showAlwaysAnimate = false;
    /** State of the mat-hint and mat-error animations. */

    this._subscriptAnimationState = '';
    this._hintLabel = ''; // Unique id for the hint label.

    this._hintLabelId = `mat-hint-${nextUniqueId++}`; // Unique id for the label element.

    this._labelId = `mat-form-field-label-${nextUniqueId++}`;
    this.floatLabel = this._getDefaultFloatLabelState();
    this._animationsEnabled = _animationMode !== 'NoopAnimations'; // Set the default through here so we invoke the setter on the first run.

    this.appearance = _defaults && _defaults.appearance ? _defaults.appearance : 'legacy';
    this._hideRequiredMarker = _defaults && _defaults.hideRequiredMarker != null ? _defaults.hideRequiredMarker : false;
  }
  /** The form-field appearance style. */


  get appearance() {
    return this._appearance;
  }

  set appearance(value) {
    const oldValue = this._appearance;
    this._appearance = value || this._defaults && this._defaults.appearance || 'legacy';

    if (this._appearance === 'outline' && oldValue !== value) {
      this._outlineGapCalculationNeededOnStable = true;
    }
  }
  /** Whether the required marker should be hidden. */


  get hideRequiredMarker() {
    return this._hideRequiredMarker;
  }

  set hideRequiredMarker(value) {
    this._hideRequiredMarker = (0,coercion/* coerceBooleanProperty */.Ig)(value);
  }
  /** Whether the floating label should always float or not. */


  _shouldAlwaysFloat() {
    return this.floatLabel === 'always' && !this._showAlwaysAnimate;
  }
  /** Whether the label can float or not. */


  _canLabelFloat() {
    return this.floatLabel !== 'never';
  }
  /** Text for the form field hint. */


  get hintLabel() {
    return this._hintLabel;
  }

  set hintLabel(value) {
    this._hintLabel = value;

    this._processHints();
  }
  /**
   * Whether the label should always float, never float or float as the user types.
   *
   * Note: only the legacy appearance supports the `never` option. `never` was originally added as a
   * way to make the floating label emulate the behavior of a standard input placeholder. However
   * the form field now supports both floating labels and placeholders. Therefore in the non-legacy
   * appearances the `never` option has been disabled in favor of just using the placeholder.
   */


  get floatLabel() {
    return this.appearance !== 'legacy' && this._floatLabel === 'never' ? 'auto' : this._floatLabel;
  }

  set floatLabel(value) {
    if (value !== this._floatLabel) {
      this._floatLabel = value || this._getDefaultFloatLabelState();

      this._changeDetectorRef.markForCheck();
    }
  }

  get _control() {
    // TODO(crisbeto): we need this workaround in order to support both Ivy and ViewEngine.
    //  We should clean this up once Ivy is the default renderer.
    return this._explicitFormFieldControl || this._controlNonStatic || this._controlStatic;
  }

  set _control(value) {
    this._explicitFormFieldControl = value;
  }
  /**
   * Gets the id of the label element. If no label is present, returns `null`.
   */


  getLabelId() {
    return this._hasFloatingLabel() ? this._labelId : null;
  }
  /**
   * Gets an ElementRef for the element that a overlay attached to the form-field should be
   * positioned relative to.
   */


  getConnectedOverlayOrigin() {
    return this._connectionContainerRef || this._elementRef;
  }

  ngAfterContentInit() {
    this._validateControlChild();

    const control = this._control;

    if (control.controlType) {
      this._elementRef.nativeElement.classList.add(`mat-form-field-type-${control.controlType}`);
    } // Subscribe to changes in the child control state in order to update the form field UI.


    control.stateChanges.pipe(startWith(null)).subscribe(() => {
      this._validatePlaceholders();

      this._syncDescribedByIds();

      this._changeDetectorRef.markForCheck();
    }); // Run change detection if the value changes.

    if (control.ngControl && control.ngControl.valueChanges) {
      control.ngControl.valueChanges.pipe((0,takeUntil/* takeUntil */.R)(this._destroyed)).subscribe(() => this._changeDetectorRef.markForCheck());
    } // Note that we have to run outside of the `NgZone` explicitly,
    // in order to avoid throwing users into an infinite loop
    // if `zone-patch-rxjs` is included.


    this._ngZone.runOutsideAngular(() => {
      this._ngZone.onStable.pipe((0,takeUntil/* takeUntil */.R)(this._destroyed)).subscribe(() => {
        if (this._outlineGapCalculationNeededOnStable) {
          this.updateOutlineGap();
        }
      });
    }); // Run change detection and update the outline if the suffix or prefix changes.


    (0,merge/* merge */.T)(this._prefixChildren.changes, this._suffixChildren.changes).subscribe(() => {
      this._outlineGapCalculationNeededOnStable = true;

      this._changeDetectorRef.markForCheck();
    }); // Re-validate when the number of hints changes.

    this._hintChildren.changes.pipe(startWith(null)).subscribe(() => {
      this._processHints();

      this._changeDetectorRef.markForCheck();
    }); // Update the aria-described by when the number of errors changes.


    this._errorChildren.changes.pipe(startWith(null)).subscribe(() => {
      this._syncDescribedByIds();

      this._changeDetectorRef.markForCheck();
    });

    if (this._dir) {
      this._dir.change.pipe((0,takeUntil/* takeUntil */.R)(this._destroyed)).subscribe(() => {
        if (typeof requestAnimationFrame === 'function') {
          this._ngZone.runOutsideAngular(() => {
            requestAnimationFrame(() => this.updateOutlineGap());
          });
        } else {
          this.updateOutlineGap();
        }
      });
    }
  }

  ngAfterContentChecked() {
    this._validateControlChild();

    if (this._outlineGapCalculationNeededImmediately) {
      this.updateOutlineGap();
    }
  }

  ngAfterViewInit() {
    // Avoid animations on load.
    this._subscriptAnimationState = 'enter';

    this._changeDetectorRef.detectChanges();
  }

  ngOnDestroy() {
    this._destroyed.next();

    this._destroyed.complete();
  }
  /** Determines whether a class from the NgControl should be forwarded to the host element. */


  _shouldForward(prop) {
    const ngControl = this._control ? this._control.ngControl : null;
    return ngControl && ngControl[prop];
  }

  _hasPlaceholder() {
    return !!(this._control && this._control.placeholder || this._placeholderChild);
  }

  _hasLabel() {
    return !!(this._labelChildNonStatic || this._labelChildStatic);
  }

  _shouldLabelFloat() {
    return this._canLabelFloat() && (this._control && this._control.shouldLabelFloat || this._shouldAlwaysFloat());
  }

  _hideControlPlaceholder() {
    // In the legacy appearance the placeholder is promoted to a label if no label is given.
    return this.appearance === 'legacy' && !this._hasLabel() || this._hasLabel() && !this._shouldLabelFloat();
  }

  _hasFloatingLabel() {
    // In the legacy appearance the placeholder is promoted to a label if no label is given.
    return this._hasLabel() || this.appearance === 'legacy' && this._hasPlaceholder();
  }
  /** Determines whether to display hints or errors. */


  _getDisplayedMessages() {
    return this._errorChildren && this._errorChildren.length > 0 && this._control.errorState ? 'error' : 'hint';
  }
  /** Animates the placeholder up and locks it in position. */


  _animateAndLockLabel() {
    if (this._hasFloatingLabel() && this._canLabelFloat()) {
      // If animations are disabled, we shouldn't go in here,
      // because the `transitionend` will never fire.
      if (this._animationsEnabled && this._label) {
        this._showAlwaysAnimate = true;
        (0,fromEvent/* fromEvent */.R)(this._label.nativeElement, 'transitionend').pipe((0,take/* take */.q)(1)).subscribe(() => {
          this._showAlwaysAnimate = false;
        });
      }

      this.floatLabel = 'always';

      this._changeDetectorRef.markForCheck();
    }
  }
  /**
   * Ensure that there is only one placeholder (either `placeholder` attribute on the child control
   * or child element with the `mat-placeholder` directive).
   */


  _validatePlaceholders() {
    if (this._control.placeholder && this._placeholderChild && (typeof ngDevMode === 'undefined' || ngDevMode)) {
      throw getMatFormFieldPlaceholderConflictError();
    }
  }
  /** Does any extra processing that is required when handling the hints. */


  _processHints() {
    this._validateHints();

    this._syncDescribedByIds();
  }
  /**
   * Ensure that there is a maximum of one of each `<mat-hint>` alignment specified, with the
   * attribute being considered as `align="start"`.
   */


  _validateHints() {
    if (this._hintChildren && (typeof ngDevMode === 'undefined' || ngDevMode)) {
      let startHint;
      let endHint;

      this._hintChildren.forEach(hint => {
        if (hint.align === 'start') {
          if (startHint || this.hintLabel) {
            throw getMatFormFieldDuplicatedHintError('start');
          }

          startHint = hint;
        } else if (hint.align === 'end') {
          if (endHint) {
            throw getMatFormFieldDuplicatedHintError('end');
          }

          endHint = hint;
        }
      });
    }
  }
  /** Gets the default float label state. */


  _getDefaultFloatLabelState() {
    return this._defaults && this._defaults.floatLabel || 'auto';
  }
  /**
   * Sets the list of element IDs that describe the child control. This allows the control to update
   * its `aria-describedby` attribute accordingly.
   */


  _syncDescribedByIds() {
    if (this._control) {
      let ids = []; // TODO(wagnermaciel): Remove the type check when we find the root cause of this bug.

      if (this._control.userAriaDescribedBy && typeof this._control.userAriaDescribedBy === 'string') {
        ids.push(...this._control.userAriaDescribedBy.split(' '));
      }

      if (this._getDisplayedMessages() === 'hint') {
        const startHint = this._hintChildren ? this._hintChildren.find(hint => hint.align === 'start') : null;
        const endHint = this._hintChildren ? this._hintChildren.find(hint => hint.align === 'end') : null;

        if (startHint) {
          ids.push(startHint.id);
        } else if (this._hintLabel) {
          ids.push(this._hintLabelId);
        }

        if (endHint) {
          ids.push(endHint.id);
        }
      } else if (this._errorChildren) {
        ids.push(...this._errorChildren.map(error => error.id));
      }

      this._control.setDescribedByIds(ids);
    }
  }
  /** Throws an error if the form field's control is missing. */


  _validateControlChild() {
    if (!this._control && (typeof ngDevMode === 'undefined' || ngDevMode)) {
      throw getMatFormFieldMissingControlError();
    }
  }
  /**
   * Updates the width and position of the gap in the outline. Only relevant for the outline
   * appearance.
   */


  updateOutlineGap() {
    const labelEl = this._label ? this._label.nativeElement : null;
    const container = this._connectionContainerRef.nativeElement;
    const outlineStartSelector = '.mat-form-field-outline-start';
    const outlineGapSelector = '.mat-form-field-outline-gap'; // getBoundingClientRect isn't available on the server.

    if (this.appearance !== 'outline' || !this._platform.isBrowser) {
      return;
    } // If there is no content, set the gap elements to zero.


    if (!labelEl || !labelEl.children.length || !labelEl.textContent.trim()) {
      const gapElements = container.querySelectorAll(`${outlineStartSelector}, ${outlineGapSelector}`);

      for (let i = 0; i < gapElements.length; i++) {
        gapElements[i].style.width = '0';
      }

      return;
    } // If the element is not present in the DOM, the outline gap will need to be calculated
    // the next time it is checked and in the DOM.


    if (!this._isAttachedToDOM()) {
      this._outlineGapCalculationNeededImmediately = true;
      return;
    }

    let startWidth = 0;
    let gapWidth = 0;
    const startEls = container.querySelectorAll(outlineStartSelector);
    const gapEls = container.querySelectorAll(outlineGapSelector);

    if (this._label && this._label.nativeElement.children.length) {
      const containerRect = container.getBoundingClientRect(); // If the container's width and height are zero, it means that the element is
      // invisible and we can't calculate the outline gap. Mark the element as needing
      // to be checked the next time the zone stabilizes. We can't do this immediately
      // on the next change detection, because even if the element becomes visible,
      // the `ClientRect` won't be reclaculated immediately. We reset the
      // `_outlineGapCalculationNeededImmediately` flag some we don't run the checks twice.

      if (containerRect.width === 0 && containerRect.height === 0) {
        this._outlineGapCalculationNeededOnStable = true;
        this._outlineGapCalculationNeededImmediately = false;
        return;
      }

      const containerStart = this._getStartEnd(containerRect);

      const labelChildren = labelEl.children;

      const labelStart = this._getStartEnd(labelChildren[0].getBoundingClientRect());

      let labelWidth = 0;

      for (let i = 0; i < labelChildren.length; i++) {
        labelWidth += labelChildren[i].offsetWidth;
      }

      startWidth = Math.abs(labelStart - containerStart) - outlineGapPadding;
      gapWidth = labelWidth > 0 ? labelWidth * floatingLabelScale + outlineGapPadding * 2 : 0;
    }

    for (let i = 0; i < startEls.length; i++) {
      startEls[i].style.width = `${startWidth}px`;
    }

    for (let i = 0; i < gapEls.length; i++) {
      gapEls[i].style.width = `${gapWidth}px`;
    }

    this._outlineGapCalculationNeededOnStable = this._outlineGapCalculationNeededImmediately = false;
  }
  /** Gets the start end of the rect considering the current directionality. */


  _getStartEnd(rect) {
    return this._dir && this._dir.value === 'rtl' ? rect.right : rect.left;
  }
  /** Checks whether the form field is attached to the DOM. */


  _isAttachedToDOM() {
    const element = this._elementRef.nativeElement;

    if (element.getRootNode) {
      const rootNode = element.getRootNode(); // If the element is inside the DOM the root node will be either the document
      // or the closest shadow root, otherwise it'll be the element itself.

      return rootNode && rootNode !== element;
    } // Otherwise fall back to checking if it's in the document. This doesn't account for
    // shadow DOM, however browser that support shadow DOM should support `getRootNode` as well.


    return document.documentElement.contains(element);
  }

}

MatFormField.ɵfac = function MatFormField_Factory(t) {
  return new (t || MatFormField)(core["ɵɵdirectiveInject"](core.ElementRef), core["ɵɵdirectiveInject"](core.ChangeDetectorRef), core["ɵɵdirectiveInject"](bidi/* Directionality */.Is, 8), core["ɵɵdirectiveInject"](MAT_FORM_FIELD_DEFAULT_OPTIONS, 8), core["ɵɵdirectiveInject"](platform/* Platform */.t4), core["ɵɵdirectiveInject"](core.NgZone), core["ɵɵdirectiveInject"](fesm2020_animations/* ANIMATION_MODULE_TYPE */.Qb, 8));
};

MatFormField.ɵcmp = /* @__PURE__ */core["ɵɵdefineComponent"]({
  type: MatFormField,
  selectors: [["mat-form-field"]],
  contentQueries: function MatFormField_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      core["ɵɵcontentQuery"](dirIndex, MatFormFieldControl, 5);
      core["ɵɵcontentQuery"](dirIndex, MatFormFieldControl, 7);
      core["ɵɵcontentQuery"](dirIndex, MatLabel, 5);
      core["ɵɵcontentQuery"](dirIndex, MatLabel, 7);
      core["ɵɵcontentQuery"](dirIndex, MatPlaceholder, 5);
      core["ɵɵcontentQuery"](dirIndex, MAT_ERROR, 5);
      core["ɵɵcontentQuery"](dirIndex, _MAT_HINT, 5);
      core["ɵɵcontentQuery"](dirIndex, MAT_PREFIX, 5);
      core["ɵɵcontentQuery"](dirIndex, MAT_SUFFIX, 5);
    }

    if (rf & 2) {
      let _t;

      core["ɵɵqueryRefresh"](_t = core["ɵɵloadQuery"]()) && (ctx._controlNonStatic = _t.first);
      core["ɵɵqueryRefresh"](_t = core["ɵɵloadQuery"]()) && (ctx._controlStatic = _t.first);
      core["ɵɵqueryRefresh"](_t = core["ɵɵloadQuery"]()) && (ctx._labelChildNonStatic = _t.first);
      core["ɵɵqueryRefresh"](_t = core["ɵɵloadQuery"]()) && (ctx._labelChildStatic = _t.first);
      core["ɵɵqueryRefresh"](_t = core["ɵɵloadQuery"]()) && (ctx._placeholderChild = _t.first);
      core["ɵɵqueryRefresh"](_t = core["ɵɵloadQuery"]()) && (ctx._errorChildren = _t);
      core["ɵɵqueryRefresh"](_t = core["ɵɵloadQuery"]()) && (ctx._hintChildren = _t);
      core["ɵɵqueryRefresh"](_t = core["ɵɵloadQuery"]()) && (ctx._prefixChildren = _t);
      core["ɵɵqueryRefresh"](_t = core["ɵɵloadQuery"]()) && (ctx._suffixChildren = _t);
    }
  },
  viewQuery: function MatFormField_Query(rf, ctx) {
    if (rf & 1) {
      core["ɵɵviewQuery"](_c0, 7);
      core["ɵɵviewQuery"](_c1, 5);
      core["ɵɵviewQuery"](_c2, 5);
    }

    if (rf & 2) {
      let _t;

      core["ɵɵqueryRefresh"](_t = core["ɵɵloadQuery"]()) && (ctx._connectionContainerRef = _t.first);
      core["ɵɵqueryRefresh"](_t = core["ɵɵloadQuery"]()) && (ctx._inputContainerRef = _t.first);
      core["ɵɵqueryRefresh"](_t = core["ɵɵloadQuery"]()) && (ctx._label = _t.first);
    }
  },
  hostAttrs: [1, "mat-form-field"],
  hostVars: 40,
  hostBindings: function MatFormField_HostBindings(rf, ctx) {
    if (rf & 2) {
      core["ɵɵclassProp"]("mat-form-field-appearance-standard", ctx.appearance == "standard")("mat-form-field-appearance-fill", ctx.appearance == "fill")("mat-form-field-appearance-outline", ctx.appearance == "outline")("mat-form-field-appearance-legacy", ctx.appearance == "legacy")("mat-form-field-invalid", ctx._control.errorState)("mat-form-field-can-float", ctx._canLabelFloat())("mat-form-field-should-float", ctx._shouldLabelFloat())("mat-form-field-has-label", ctx._hasFloatingLabel())("mat-form-field-hide-placeholder", ctx._hideControlPlaceholder())("mat-form-field-disabled", ctx._control.disabled)("mat-form-field-autofilled", ctx._control.autofilled)("mat-focused", ctx._control.focused)("ng-untouched", ctx._shouldForward("untouched"))("ng-touched", ctx._shouldForward("touched"))("ng-pristine", ctx._shouldForward("pristine"))("ng-dirty", ctx._shouldForward("dirty"))("ng-valid", ctx._shouldForward("valid"))("ng-invalid", ctx._shouldForward("invalid"))("ng-pending", ctx._shouldForward("pending"))("_mat-animation-noopable", !ctx._animationsEnabled);
    }
  },
  inputs: {
    color: "color",
    appearance: "appearance",
    hideRequiredMarker: "hideRequiredMarker",
    hintLabel: "hintLabel",
    floatLabel: "floatLabel"
  },
  exportAs: ["matFormField"],
  features: [core["ɵɵProvidersFeature"]([{
    provide: MAT_FORM_FIELD,
    useExisting: MatFormField
  }]), core["ɵɵInheritDefinitionFeature"]],
  ngContentSelectors: _c4,
  decls: 15,
  vars: 8,
  consts: [[1, "mat-form-field-wrapper"], [1, "mat-form-field-flex", 3, "click"], ["connectionContainer", ""], [4, "ngIf"], ["class", "mat-form-field-prefix", 3, "cdkObserveContentDisabled", "cdkObserveContent", 4, "ngIf"], [1, "mat-form-field-infix"], ["inputContainer", ""], [1, "mat-form-field-label-wrapper"], ["class", "mat-form-field-label", 3, "cdkObserveContentDisabled", "id", "mat-empty", "mat-form-field-empty", "mat-accent", "mat-warn", "ngSwitch", "cdkObserveContent", 4, "ngIf"], ["class", "mat-form-field-suffix", 4, "ngIf"], ["class", "mat-form-field-underline", 4, "ngIf"], [1, "mat-form-field-subscript-wrapper", 3, "ngSwitch"], [4, "ngSwitchCase"], ["class", "mat-form-field-hint-wrapper", 4, "ngSwitchCase"], [1, "mat-form-field-outline"], [1, "mat-form-field-outline-start"], [1, "mat-form-field-outline-gap"], [1, "mat-form-field-outline-end"], [1, "mat-form-field-outline", "mat-form-field-outline-thick"], [1, "mat-form-field-prefix", 3, "cdkObserveContentDisabled", "cdkObserveContent"], [1, "mat-form-field-label", 3, "cdkObserveContentDisabled", "id", "ngSwitch", "cdkObserveContent"], ["label", ""], ["class", "mat-placeholder-required mat-form-field-required-marker", "aria-hidden", "true", 4, "ngIf"], ["aria-hidden", "true", 1, "mat-placeholder-required", "mat-form-field-required-marker"], [1, "mat-form-field-suffix"], [1, "mat-form-field-underline"], [1, "mat-form-field-ripple"], [1, "mat-form-field-hint-wrapper"], ["class", "mat-hint", 3, "id", 4, "ngIf"], [1, "mat-form-field-hint-spacer"], [1, "mat-hint", 3, "id"]],
  template: function MatFormField_Template(rf, ctx) {
    if (rf & 1) {
      core["ɵɵprojectionDef"](_c3);
      core["ɵɵelementStart"](0, "div", 0)(1, "div", 1, 2);
      core["ɵɵlistener"]("click", function MatFormField_Template_div_click_1_listener($event) {
        return ctx._control.onContainerClick && ctx._control.onContainerClick($event);
      });
      core["ɵɵtemplate"](3, MatFormField_ng_container_3_Template, 9, 0, "ng-container", 3);
      core["ɵɵtemplate"](4, MatFormField_div_4_Template, 2, 1, "div", 4);
      core["ɵɵelementStart"](5, "div", 5, 6);
      core["ɵɵprojection"](7);
      core["ɵɵelementStart"](8, "span", 7);
      core["ɵɵtemplate"](9, MatFormField_label_9_Template, 5, 16, "label", 8);
      core["ɵɵelementEnd"]()();
      core["ɵɵtemplate"](10, MatFormField_div_10_Template, 2, 0, "div", 9);
      core["ɵɵelementEnd"]();
      core["ɵɵtemplate"](11, MatFormField_div_11_Template, 2, 4, "div", 10);
      core["ɵɵelementStart"](12, "div", 11);
      core["ɵɵtemplate"](13, MatFormField_div_13_Template, 2, 1, "div", 12);
      core["ɵɵtemplate"](14, MatFormField_div_14_Template, 5, 2, "div", 13);
      core["ɵɵelementEnd"]()();
    }

    if (rf & 2) {
      core["ɵɵadvance"](3);
      core["ɵɵproperty"]("ngIf", ctx.appearance == "outline");
      core["ɵɵadvance"](1);
      core["ɵɵproperty"]("ngIf", ctx._prefixChildren.length);
      core["ɵɵadvance"](5);
      core["ɵɵproperty"]("ngIf", ctx._hasFloatingLabel());
      core["ɵɵadvance"](1);
      core["ɵɵproperty"]("ngIf", ctx._suffixChildren.length);
      core["ɵɵadvance"](1);
      core["ɵɵproperty"]("ngIf", ctx.appearance != "outline");
      core["ɵɵadvance"](1);
      core["ɵɵproperty"]("ngSwitch", ctx._getDisplayedMessages());
      core["ɵɵadvance"](1);
      core["ɵɵproperty"]("ngSwitchCase", "error");
      core["ɵɵadvance"](1);
      core["ɵɵproperty"]("ngSwitchCase", "hint");
    }
  },
  directives: [common/* NgIf */.O5, observers/* CdkObserveContent */.wD, common/* NgSwitch */.RF, common/* NgSwitchCase */.n9],
  styles: [".mat-form-field{display:inline-block;position:relative;text-align:left}[dir=rtl] .mat-form-field{text-align:right}.mat-form-field-wrapper{position:relative}.mat-form-field-flex{display:inline-flex;align-items:baseline;box-sizing:border-box;width:100%}.mat-form-field-prefix,.mat-form-field-suffix{white-space:nowrap;flex:none;position:relative}.mat-form-field-infix{display:block;position:relative;flex:auto;min-width:0;width:180px}.cdk-high-contrast-active .mat-form-field-infix{border-image:linear-gradient(transparent, transparent)}.mat-form-field-label-wrapper{position:absolute;left:0;box-sizing:content-box;width:100%;height:100%;overflow:hidden;pointer-events:none}[dir=rtl] .mat-form-field-label-wrapper{left:auto;right:0}.mat-form-field-label{position:absolute;left:0;font:inherit;pointer-events:none;width:100%;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;transform-origin:0 0;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),color 400ms cubic-bezier(0.25, 0.8, 0.25, 1),width 400ms cubic-bezier(0.25, 0.8, 0.25, 1);display:none}[dir=rtl] .mat-form-field-label{transform-origin:100% 0;left:auto;right:0}.cdk-high-contrast-active .mat-form-field-disabled .mat-form-field-label{color:GrayText}.mat-form-field-empty.mat-form-field-label,.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{display:block}.mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{display:none}.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{display:block;transition:none}.mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-input-server[placeholder]:not(:placeholder-shown)+.mat-form-field-label-wrapper .mat-form-field-label{display:none}.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-can-float .mat-input-server[placeholder]:not(:placeholder-shown)+.mat-form-field-label-wrapper .mat-form-field-label{display:block}.mat-form-field-label:not(.mat-form-field-empty){transition:none}.mat-form-field-underline{position:absolute;width:100%;pointer-events:none;transform:scale3d(1, 1.0001, 1)}.mat-form-field-ripple{position:absolute;left:0;width:100%;transform-origin:50%;transform:scaleX(0.5);opacity:0;transition:background-color 300ms cubic-bezier(0.55, 0, 0.55, 0.2)}.mat-form-field.mat-focused .mat-form-field-ripple,.mat-form-field.mat-form-field-invalid .mat-form-field-ripple{opacity:1;transform:none;transition:transform 300ms cubic-bezier(0.25, 0.8, 0.25, 1),opacity 100ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 300ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-subscript-wrapper{position:absolute;box-sizing:border-box;width:100%;overflow:hidden}.mat-form-field-subscript-wrapper .mat-icon,.mat-form-field-label-wrapper .mat-icon{width:1em;height:1em;font-size:inherit;vertical-align:baseline}.mat-form-field-hint-wrapper{display:flex}.mat-form-field-hint-spacer{flex:1 0 1em}.mat-error{display:block}.mat-form-field-control-wrapper{position:relative}.mat-form-field-hint-end{order:1}.mat-form-field._mat-animation-noopable .mat-form-field-label,.mat-form-field._mat-animation-noopable .mat-form-field-ripple{transition:none}\n", ".mat-form-field-appearance-fill .mat-form-field-flex{border-radius:4px 4px 0 0;padding:.75em .75em 0 .75em}.cdk-high-contrast-active .mat-form-field-appearance-fill .mat-form-field-flex{outline:solid 1px}.cdk-high-contrast-active .mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-flex{outline-color:GrayText}.cdk-high-contrast-active .mat-form-field-appearance-fill.mat-focused .mat-form-field-flex{outline:dashed 3px}.mat-form-field-appearance-fill .mat-form-field-underline::before{content:\"\";display:block;position:absolute;bottom:0;height:1px;width:100%}.mat-form-field-appearance-fill .mat-form-field-ripple{bottom:0;height:2px}.cdk-high-contrast-active .mat-form-field-appearance-fill .mat-form-field-ripple{height:0}.mat-form-field-appearance-fill:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{opacity:1;transform:none;transition:opacity 600ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-fill._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{transition:none}.mat-form-field-appearance-fill .mat-form-field-subscript-wrapper{padding:0 1em}\n", ".mat-input-element{font:inherit;background:transparent;color:currentColor;border:none;outline:none;padding:0;margin:0;width:100%;max-width:100%;vertical-align:bottom;text-align:inherit;box-sizing:content-box}.mat-input-element:-moz-ui-invalid{box-shadow:none}.mat-input-element,.mat-input-element::-webkit-search-cancel-button,.mat-input-element::-webkit-search-decoration,.mat-input-element::-webkit-search-results-button,.mat-input-element::-webkit-search-results-decoration{-webkit-appearance:none}.mat-input-element::-webkit-contacts-auto-fill-button,.mat-input-element::-webkit-caps-lock-indicator,.mat-input-element:not([type=password])::-webkit-credentials-auto-fill-button{visibility:hidden}.mat-input-element[type=date],.mat-input-element[type=datetime],.mat-input-element[type=datetime-local],.mat-input-element[type=month],.mat-input-element[type=week],.mat-input-element[type=time]{line-height:1}.mat-input-element[type=date]::after,.mat-input-element[type=datetime]::after,.mat-input-element[type=datetime-local]::after,.mat-input-element[type=month]::after,.mat-input-element[type=week]::after,.mat-input-element[type=time]::after{content:\" \";white-space:pre;width:1px}.mat-input-element::-webkit-inner-spin-button,.mat-input-element::-webkit-calendar-picker-indicator,.mat-input-element::-webkit-clear-button{font-size:.75em}.mat-input-element::placeholder{-webkit-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element::-moz-placeholder{-webkit-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element::-webkit-input-placeholder{-webkit-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element:-ms-input-placeholder{-webkit-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-hide-placeholder .mat-input-element::placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.cdk-high-contrast-active .mat-form-field-hide-placeholder .mat-input-element::placeholder{opacity:0}.mat-form-field-hide-placeholder .mat-input-element::-moz-placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.cdk-high-contrast-active .mat-form-field-hide-placeholder .mat-input-element::-moz-placeholder{opacity:0}.mat-form-field-hide-placeholder .mat-input-element::-webkit-input-placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.cdk-high-contrast-active .mat-form-field-hide-placeholder .mat-input-element::-webkit-input-placeholder{opacity:0}.mat-form-field-hide-placeholder .mat-input-element:-ms-input-placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.cdk-high-contrast-active .mat-form-field-hide-placeholder .mat-input-element:-ms-input-placeholder{opacity:0}textarea.mat-input-element{resize:vertical;overflow:auto}textarea.mat-input-element.cdk-textarea-autosize{resize:none}textarea.mat-input-element{padding:2px 0;margin:-2px 0}select.mat-input-element{-moz-appearance:none;-webkit-appearance:none;position:relative;background-color:transparent;display:inline-flex;box-sizing:border-box;padding-top:1em;top:-1em;margin-bottom:-1em}select.mat-input-element::-moz-focus-inner{border:0}select.mat-input-element:not(:disabled){cursor:pointer}.mat-form-field-type-mat-native-select .mat-form-field-infix::after{content:\"\";width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid;position:absolute;top:50%;right:0;margin-top:-2.5px;pointer-events:none}[dir=rtl] .mat-form-field-type-mat-native-select .mat-form-field-infix::after{right:auto;left:0}.mat-form-field-type-mat-native-select .mat-input-element{padding-right:15px}[dir=rtl] .mat-form-field-type-mat-native-select .mat-input-element{padding-right:0;padding-left:15px}.mat-form-field-type-mat-native-select .mat-form-field-label-wrapper{max-width:calc(100% - 10px)}.mat-form-field-type-mat-native-select.mat-form-field-appearance-outline .mat-form-field-infix::after{margin-top:-5px}.mat-form-field-type-mat-native-select.mat-form-field-appearance-fill .mat-form-field-infix::after{margin-top:-10px}\n", ".mat-form-field-appearance-legacy .mat-form-field-label{transform:perspective(100px)}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon{width:1em}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon-button,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon-button{font:inherit;vertical-align:baseline}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon-button .mat-icon{font-size:inherit}.mat-form-field-appearance-legacy .mat-form-field-underline{height:1px}.cdk-high-contrast-active .mat-form-field-appearance-legacy .mat-form-field-underline{height:0;border-top:solid 1px}.mat-form-field-appearance-legacy .mat-form-field-ripple{top:0;height:2px;overflow:hidden}.cdk-high-contrast-active .mat-form-field-appearance-legacy .mat-form-field-ripple{height:0;border-top:solid 2px}.mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline{background-position:0;background-color:transparent}.cdk-high-contrast-active .mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline{border-top-style:dotted;border-top-width:2px;border-top-color:GrayText}.mat-form-field-appearance-legacy.mat-form-field-invalid:not(.mat-focused) .mat-form-field-ripple{height:1px}\n", ".mat-form-field-appearance-outline .mat-form-field-wrapper{margin:.25em 0}.mat-form-field-appearance-outline .mat-form-field-flex{padding:0 .75em 0 .75em;margin-top:-0.25em;position:relative}.mat-form-field-appearance-outline .mat-form-field-prefix,.mat-form-field-appearance-outline .mat-form-field-suffix{top:.25em}.mat-form-field-appearance-outline .mat-form-field-outline{display:flex;position:absolute;top:.25em;left:0;right:0;bottom:0;pointer-events:none}.mat-form-field-appearance-outline .mat-form-field-outline-start,.mat-form-field-appearance-outline .mat-form-field-outline-end{border:1px solid currentColor;min-width:5px}.mat-form-field-appearance-outline .mat-form-field-outline-start{border-radius:5px 0 0 5px;border-right-style:none}[dir=rtl] .mat-form-field-appearance-outline .mat-form-field-outline-start{border-right-style:solid;border-left-style:none;border-radius:0 5px 5px 0}.mat-form-field-appearance-outline .mat-form-field-outline-end{border-radius:0 5px 5px 0;border-left-style:none;flex-grow:1}[dir=rtl] .mat-form-field-appearance-outline .mat-form-field-outline-end{border-left-style:solid;border-right-style:none;border-radius:5px 0 0 5px}.mat-form-field-appearance-outline .mat-form-field-outline-gap{border-radius:.000001px;border:1px solid currentColor;border-left-style:none;border-right-style:none}.mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-outline-gap{border-top-color:transparent}.mat-form-field-appearance-outline .mat-form-field-outline-thick{opacity:0}.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-start,.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-end,.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-gap{border-width:2px}.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline,.mat-form-field-appearance-outline.mat-form-field-invalid .mat-form-field-outline{opacity:0;transition:opacity 100ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick,.mat-form-field-appearance-outline.mat-form-field-invalid .mat-form-field-outline-thick{opacity:1}.cdk-high-contrast-active .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick{border:3px dashed}.mat-form-field-appearance-outline:not(.mat-form-field-disabled) .mat-form-field-flex:hover .mat-form-field-outline{opacity:0;transition:opacity 600ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-outline:not(.mat-form-field-disabled) .mat-form-field-flex:hover .mat-form-field-outline-thick{opacity:1}.mat-form-field-appearance-outline .mat-form-field-subscript-wrapper{padding:0 1em}.cdk-high-contrast-active .mat-form-field-appearance-outline.mat-form-field-disabled .mat-form-field-outline{color:GrayText}.mat-form-field-appearance-outline._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-outline,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-start,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-end,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-gap{transition:none}\n", ".mat-form-field-appearance-standard .mat-form-field-flex{padding-top:.75em}.mat-form-field-appearance-standard .mat-form-field-underline{height:1px}.cdk-high-contrast-active .mat-form-field-appearance-standard .mat-form-field-underline{height:0;border-top:solid 1px}.mat-form-field-appearance-standard .mat-form-field-ripple{bottom:0;height:2px}.cdk-high-contrast-active .mat-form-field-appearance-standard .mat-form-field-ripple{height:0;border-top:solid 2px}.mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline{background-position:0;background-color:transparent}.cdk-high-contrast-active .mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline{border-top-style:dotted;border-top-width:2px}.mat-form-field-appearance-standard:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{opacity:1;transform:none;transition:opacity 600ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-standard._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{transition:none}\n"],
  encapsulation: 2,
  data: {
    animation: [matFormFieldAnimations.transitionMessages]
  },
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && core["ɵsetClassMetadata"](MatFormField, [{
    type: core.Component,
    args: [{
      selector: 'mat-form-field',
      exportAs: 'matFormField',
      animations: [matFormFieldAnimations.transitionMessages],
      host: {
        'class': 'mat-form-field',
        '[class.mat-form-field-appearance-standard]': 'appearance == "standard"',
        '[class.mat-form-field-appearance-fill]': 'appearance == "fill"',
        '[class.mat-form-field-appearance-outline]': 'appearance == "outline"',
        '[class.mat-form-field-appearance-legacy]': 'appearance == "legacy"',
        '[class.mat-form-field-invalid]': '_control.errorState',
        '[class.mat-form-field-can-float]': '_canLabelFloat()',
        '[class.mat-form-field-should-float]': '_shouldLabelFloat()',
        '[class.mat-form-field-has-label]': '_hasFloatingLabel()',
        '[class.mat-form-field-hide-placeholder]': '_hideControlPlaceholder()',
        '[class.mat-form-field-disabled]': '_control.disabled',
        '[class.mat-form-field-autofilled]': '_control.autofilled',
        '[class.mat-focused]': '_control.focused',
        '[class.ng-untouched]': '_shouldForward("untouched")',
        '[class.ng-touched]': '_shouldForward("touched")',
        '[class.ng-pristine]': '_shouldForward("pristine")',
        '[class.ng-dirty]': '_shouldForward("dirty")',
        '[class.ng-valid]': '_shouldForward("valid")',
        '[class.ng-invalid]': '_shouldForward("invalid")',
        '[class.ng-pending]': '_shouldForward("pending")',
        '[class._mat-animation-noopable]': '!_animationsEnabled'
      },
      inputs: ['color'],
      encapsulation: core.ViewEncapsulation.None,
      changeDetection: core.ChangeDetectionStrategy.OnPush,
      providers: [{
        provide: MAT_FORM_FIELD,
        useExisting: MatFormField
      }],
      template: "<div class=\"mat-form-field-wrapper\">\n  <div class=\"mat-form-field-flex\" #connectionContainer\n       (click)=\"_control.onContainerClick && _control.onContainerClick($event)\">\n\n    <!-- Outline used for outline appearance. -->\n    <ng-container *ngIf=\"appearance == 'outline'\">\n      <div class=\"mat-form-field-outline\">\n        <div class=\"mat-form-field-outline-start\"></div>\n        <div class=\"mat-form-field-outline-gap\"></div>\n        <div class=\"mat-form-field-outline-end\"></div>\n      </div>\n      <div class=\"mat-form-field-outline mat-form-field-outline-thick\">\n        <div class=\"mat-form-field-outline-start\"></div>\n        <div class=\"mat-form-field-outline-gap\"></div>\n        <div class=\"mat-form-field-outline-end\"></div>\n      </div>\n    </ng-container>\n\n    <div\n      class=\"mat-form-field-prefix\"\n      *ngIf=\"_prefixChildren.length\"\n      (cdkObserveContent)=\"updateOutlineGap()\"\n      [cdkObserveContentDisabled]=\"appearance != 'outline'\">\n      <ng-content select=\"[matPrefix]\"></ng-content>\n    </div>\n\n    <div class=\"mat-form-field-infix\" #inputContainer>\n      <ng-content></ng-content>\n\n      <span class=\"mat-form-field-label-wrapper\">\n        <!-- We add aria-owns as a workaround for an issue in JAWS & NVDA where the label isn't\n             read if it comes before the control in the DOM. -->\n        <label class=\"mat-form-field-label\"\n               (cdkObserveContent)=\"updateOutlineGap()\"\n               [cdkObserveContentDisabled]=\"appearance != 'outline'\"\n               [id]=\"_labelId\"\n               [attr.for]=\"_control.id\"\n               [attr.aria-owns]=\"_control.id\"\n               [class.mat-empty]=\"_control.empty && !_shouldAlwaysFloat()\"\n               [class.mat-form-field-empty]=\"_control.empty && !_shouldAlwaysFloat()\"\n               [class.mat-accent]=\"color == 'accent'\"\n               [class.mat-warn]=\"color == 'warn'\"\n               #label\n               *ngIf=\"_hasFloatingLabel()\"\n               [ngSwitch]=\"_hasLabel()\">\n\n          <!-- @breaking-change 8.0.0 remove in favor of mat-label element an placeholder attr. -->\n          <ng-container *ngSwitchCase=\"false\">\n            <ng-content select=\"mat-placeholder\"></ng-content>\n            <span>{{_control.placeholder}}</span>\n          </ng-container>\n\n          <ng-content select=\"mat-label\" *ngSwitchCase=\"true\"></ng-content>\n\n          <!-- @breaking-change 8.0.0 remove `mat-placeholder-required` class -->\n          <span\n            class=\"mat-placeholder-required mat-form-field-required-marker\"\n            aria-hidden=\"true\"\n            *ngIf=\"!hideRequiredMarker && _control.required && !_control.disabled\">&#32;*</span>\n        </label>\n      </span>\n    </div>\n\n    <div class=\"mat-form-field-suffix\" *ngIf=\"_suffixChildren.length\">\n      <ng-content select=\"[matSuffix]\"></ng-content>\n    </div>\n  </div>\n\n  <!-- Underline used for legacy, standard, and box appearances. -->\n  <div class=\"mat-form-field-underline\"\n       *ngIf=\"appearance != 'outline'\">\n    <span class=\"mat-form-field-ripple\"\n          [class.mat-accent]=\"color == 'accent'\"\n          [class.mat-warn]=\"color == 'warn'\"></span>\n  </div>\n\n  <div class=\"mat-form-field-subscript-wrapper\"\n       [ngSwitch]=\"_getDisplayedMessages()\">\n    <div *ngSwitchCase=\"'error'\" [@transitionMessages]=\"_subscriptAnimationState\">\n      <ng-content select=\"mat-error\"></ng-content>\n    </div>\n\n    <div class=\"mat-form-field-hint-wrapper\" *ngSwitchCase=\"'hint'\"\n      [@transitionMessages]=\"_subscriptAnimationState\">\n      <!-- TODO(mmalerba): use an actual <mat-hint> once all selectors are switched to mat-* -->\n      <div *ngIf=\"hintLabel\" [id]=\"_hintLabelId\" class=\"mat-hint\">{{hintLabel}}</div>\n      <ng-content select=\"mat-hint:not([align='end'])\"></ng-content>\n      <div class=\"mat-form-field-hint-spacer\"></div>\n      <ng-content select=\"mat-hint[align='end']\"></ng-content>\n    </div>\n  </div>\n</div>\n",
      styles: [".mat-form-field{display:inline-block;position:relative;text-align:left}[dir=rtl] .mat-form-field{text-align:right}.mat-form-field-wrapper{position:relative}.mat-form-field-flex{display:inline-flex;align-items:baseline;box-sizing:border-box;width:100%}.mat-form-field-prefix,.mat-form-field-suffix{white-space:nowrap;flex:none;position:relative}.mat-form-field-infix{display:block;position:relative;flex:auto;min-width:0;width:180px}.cdk-high-contrast-active .mat-form-field-infix{border-image:linear-gradient(transparent, transparent)}.mat-form-field-label-wrapper{position:absolute;left:0;box-sizing:content-box;width:100%;height:100%;overflow:hidden;pointer-events:none}[dir=rtl] .mat-form-field-label-wrapper{left:auto;right:0}.mat-form-field-label{position:absolute;left:0;font:inherit;pointer-events:none;width:100%;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;transform-origin:0 0;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),color 400ms cubic-bezier(0.25, 0.8, 0.25, 1),width 400ms cubic-bezier(0.25, 0.8, 0.25, 1);display:none}[dir=rtl] .mat-form-field-label{transform-origin:100% 0;left:auto;right:0}.cdk-high-contrast-active .mat-form-field-disabled .mat-form-field-label{color:GrayText}.mat-form-field-empty.mat-form-field-label,.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{display:block}.mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{display:none}.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{display:block;transition:none}.mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-input-server[placeholder]:not(:placeholder-shown)+.mat-form-field-label-wrapper .mat-form-field-label{display:none}.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-can-float .mat-input-server[placeholder]:not(:placeholder-shown)+.mat-form-field-label-wrapper .mat-form-field-label{display:block}.mat-form-field-label:not(.mat-form-field-empty){transition:none}.mat-form-field-underline{position:absolute;width:100%;pointer-events:none;transform:scale3d(1, 1.0001, 1)}.mat-form-field-ripple{position:absolute;left:0;width:100%;transform-origin:50%;transform:scaleX(0.5);opacity:0;transition:background-color 300ms cubic-bezier(0.55, 0, 0.55, 0.2)}.mat-form-field.mat-focused .mat-form-field-ripple,.mat-form-field.mat-form-field-invalid .mat-form-field-ripple{opacity:1;transform:none;transition:transform 300ms cubic-bezier(0.25, 0.8, 0.25, 1),opacity 100ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 300ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-subscript-wrapper{position:absolute;box-sizing:border-box;width:100%;overflow:hidden}.mat-form-field-subscript-wrapper .mat-icon,.mat-form-field-label-wrapper .mat-icon{width:1em;height:1em;font-size:inherit;vertical-align:baseline}.mat-form-field-hint-wrapper{display:flex}.mat-form-field-hint-spacer{flex:1 0 1em}.mat-error{display:block}.mat-form-field-control-wrapper{position:relative}.mat-form-field-hint-end{order:1}.mat-form-field._mat-animation-noopable .mat-form-field-label,.mat-form-field._mat-animation-noopable .mat-form-field-ripple{transition:none}\n", ".mat-form-field-appearance-fill .mat-form-field-flex{border-radius:4px 4px 0 0;padding:.75em .75em 0 .75em}.cdk-high-contrast-active .mat-form-field-appearance-fill .mat-form-field-flex{outline:solid 1px}.cdk-high-contrast-active .mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-flex{outline-color:GrayText}.cdk-high-contrast-active .mat-form-field-appearance-fill.mat-focused .mat-form-field-flex{outline:dashed 3px}.mat-form-field-appearance-fill .mat-form-field-underline::before{content:\"\";display:block;position:absolute;bottom:0;height:1px;width:100%}.mat-form-field-appearance-fill .mat-form-field-ripple{bottom:0;height:2px}.cdk-high-contrast-active .mat-form-field-appearance-fill .mat-form-field-ripple{height:0}.mat-form-field-appearance-fill:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{opacity:1;transform:none;transition:opacity 600ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-fill._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{transition:none}.mat-form-field-appearance-fill .mat-form-field-subscript-wrapper{padding:0 1em}\n", ".mat-input-element{font:inherit;background:transparent;color:currentColor;border:none;outline:none;padding:0;margin:0;width:100%;max-width:100%;vertical-align:bottom;text-align:inherit;box-sizing:content-box}.mat-input-element:-moz-ui-invalid{box-shadow:none}.mat-input-element,.mat-input-element::-webkit-search-cancel-button,.mat-input-element::-webkit-search-decoration,.mat-input-element::-webkit-search-results-button,.mat-input-element::-webkit-search-results-decoration{-webkit-appearance:none}.mat-input-element::-webkit-contacts-auto-fill-button,.mat-input-element::-webkit-caps-lock-indicator,.mat-input-element:not([type=password])::-webkit-credentials-auto-fill-button{visibility:hidden}.mat-input-element[type=date],.mat-input-element[type=datetime],.mat-input-element[type=datetime-local],.mat-input-element[type=month],.mat-input-element[type=week],.mat-input-element[type=time]{line-height:1}.mat-input-element[type=date]::after,.mat-input-element[type=datetime]::after,.mat-input-element[type=datetime-local]::after,.mat-input-element[type=month]::after,.mat-input-element[type=week]::after,.mat-input-element[type=time]::after{content:\" \";white-space:pre;width:1px}.mat-input-element::-webkit-inner-spin-button,.mat-input-element::-webkit-calendar-picker-indicator,.mat-input-element::-webkit-clear-button{font-size:.75em}.mat-input-element::placeholder{-webkit-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element::-moz-placeholder{-webkit-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element::-webkit-input-placeholder{-webkit-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element:-ms-input-placeholder{-webkit-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-hide-placeholder .mat-input-element::placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.cdk-high-contrast-active .mat-form-field-hide-placeholder .mat-input-element::placeholder{opacity:0}.mat-form-field-hide-placeholder .mat-input-element::-moz-placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.cdk-high-contrast-active .mat-form-field-hide-placeholder .mat-input-element::-moz-placeholder{opacity:0}.mat-form-field-hide-placeholder .mat-input-element::-webkit-input-placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.cdk-high-contrast-active .mat-form-field-hide-placeholder .mat-input-element::-webkit-input-placeholder{opacity:0}.mat-form-field-hide-placeholder .mat-input-element:-ms-input-placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.cdk-high-contrast-active .mat-form-field-hide-placeholder .mat-input-element:-ms-input-placeholder{opacity:0}textarea.mat-input-element{resize:vertical;overflow:auto}textarea.mat-input-element.cdk-textarea-autosize{resize:none}textarea.mat-input-element{padding:2px 0;margin:-2px 0}select.mat-input-element{-moz-appearance:none;-webkit-appearance:none;position:relative;background-color:transparent;display:inline-flex;box-sizing:border-box;padding-top:1em;top:-1em;margin-bottom:-1em}select.mat-input-element::-moz-focus-inner{border:0}select.mat-input-element:not(:disabled){cursor:pointer}.mat-form-field-type-mat-native-select .mat-form-field-infix::after{content:\"\";width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid;position:absolute;top:50%;right:0;margin-top:-2.5px;pointer-events:none}[dir=rtl] .mat-form-field-type-mat-native-select .mat-form-field-infix::after{right:auto;left:0}.mat-form-field-type-mat-native-select .mat-input-element{padding-right:15px}[dir=rtl] .mat-form-field-type-mat-native-select .mat-input-element{padding-right:0;padding-left:15px}.mat-form-field-type-mat-native-select .mat-form-field-label-wrapper{max-width:calc(100% - 10px)}.mat-form-field-type-mat-native-select.mat-form-field-appearance-outline .mat-form-field-infix::after{margin-top:-5px}.mat-form-field-type-mat-native-select.mat-form-field-appearance-fill .mat-form-field-infix::after{margin-top:-10px}\n", ".mat-form-field-appearance-legacy .mat-form-field-label{transform:perspective(100px)}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon{width:1em}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon-button,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon-button{font:inherit;vertical-align:baseline}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon-button .mat-icon{font-size:inherit}.mat-form-field-appearance-legacy .mat-form-field-underline{height:1px}.cdk-high-contrast-active .mat-form-field-appearance-legacy .mat-form-field-underline{height:0;border-top:solid 1px}.mat-form-field-appearance-legacy .mat-form-field-ripple{top:0;height:2px;overflow:hidden}.cdk-high-contrast-active .mat-form-field-appearance-legacy .mat-form-field-ripple{height:0;border-top:solid 2px}.mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline{background-position:0;background-color:transparent}.cdk-high-contrast-active .mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline{border-top-style:dotted;border-top-width:2px;border-top-color:GrayText}.mat-form-field-appearance-legacy.mat-form-field-invalid:not(.mat-focused) .mat-form-field-ripple{height:1px}\n", ".mat-form-field-appearance-outline .mat-form-field-wrapper{margin:.25em 0}.mat-form-field-appearance-outline .mat-form-field-flex{padding:0 .75em 0 .75em;margin-top:-0.25em;position:relative}.mat-form-field-appearance-outline .mat-form-field-prefix,.mat-form-field-appearance-outline .mat-form-field-suffix{top:.25em}.mat-form-field-appearance-outline .mat-form-field-outline{display:flex;position:absolute;top:.25em;left:0;right:0;bottom:0;pointer-events:none}.mat-form-field-appearance-outline .mat-form-field-outline-start,.mat-form-field-appearance-outline .mat-form-field-outline-end{border:1px solid currentColor;min-width:5px}.mat-form-field-appearance-outline .mat-form-field-outline-start{border-radius:5px 0 0 5px;border-right-style:none}[dir=rtl] .mat-form-field-appearance-outline .mat-form-field-outline-start{border-right-style:solid;border-left-style:none;border-radius:0 5px 5px 0}.mat-form-field-appearance-outline .mat-form-field-outline-end{border-radius:0 5px 5px 0;border-left-style:none;flex-grow:1}[dir=rtl] .mat-form-field-appearance-outline .mat-form-field-outline-end{border-left-style:solid;border-right-style:none;border-radius:5px 0 0 5px}.mat-form-field-appearance-outline .mat-form-field-outline-gap{border-radius:.000001px;border:1px solid currentColor;border-left-style:none;border-right-style:none}.mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-outline-gap{border-top-color:transparent}.mat-form-field-appearance-outline .mat-form-field-outline-thick{opacity:0}.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-start,.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-end,.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-gap{border-width:2px}.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline,.mat-form-field-appearance-outline.mat-form-field-invalid .mat-form-field-outline{opacity:0;transition:opacity 100ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick,.mat-form-field-appearance-outline.mat-form-field-invalid .mat-form-field-outline-thick{opacity:1}.cdk-high-contrast-active .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick{border:3px dashed}.mat-form-field-appearance-outline:not(.mat-form-field-disabled) .mat-form-field-flex:hover .mat-form-field-outline{opacity:0;transition:opacity 600ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-outline:not(.mat-form-field-disabled) .mat-form-field-flex:hover .mat-form-field-outline-thick{opacity:1}.mat-form-field-appearance-outline .mat-form-field-subscript-wrapper{padding:0 1em}.cdk-high-contrast-active .mat-form-field-appearance-outline.mat-form-field-disabled .mat-form-field-outline{color:GrayText}.mat-form-field-appearance-outline._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-outline,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-start,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-end,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-gap{transition:none}\n", ".mat-form-field-appearance-standard .mat-form-field-flex{padding-top:.75em}.mat-form-field-appearance-standard .mat-form-field-underline{height:1px}.cdk-high-contrast-active .mat-form-field-appearance-standard .mat-form-field-underline{height:0;border-top:solid 1px}.mat-form-field-appearance-standard .mat-form-field-ripple{bottom:0;height:2px}.cdk-high-contrast-active .mat-form-field-appearance-standard .mat-form-field-ripple{height:0;border-top:solid 2px}.mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline{background-position:0;background-color:transparent}.cdk-high-contrast-active .mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline{border-top-style:dotted;border-top-width:2px}.mat-form-field-appearance-standard:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{opacity:1;transform:none;transition:opacity 600ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-standard._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{transition:none}\n"]
    }]
  }], function () {
    return [{
      type: core.ElementRef
    }, {
      type: core.ChangeDetectorRef
    }, {
      type: bidi/* Directionality */.Is,
      decorators: [{
        type: core.Optional
      }]
    }, {
      type: undefined,
      decorators: [{
        type: core.Optional
      }, {
        type: core.Inject,
        args: [MAT_FORM_FIELD_DEFAULT_OPTIONS]
      }]
    }, {
      type: platform/* Platform */.t4
    }, {
      type: core.NgZone
    }, {
      type: undefined,
      decorators: [{
        type: core.Optional
      }, {
        type: core.Inject,
        args: [fesm2020_animations/* ANIMATION_MODULE_TYPE */.Qb]
      }]
    }];
  }, {
    appearance: [{
      type: core.Input
    }],
    hideRequiredMarker: [{
      type: core.Input
    }],
    hintLabel: [{
      type: core.Input
    }],
    floatLabel: [{
      type: core.Input
    }],
    _connectionContainerRef: [{
      type: core.ViewChild,
      args: ['connectionContainer', {
        static: true
      }]
    }],
    _inputContainerRef: [{
      type: core.ViewChild,
      args: ['inputContainer']
    }],
    _label: [{
      type: core.ViewChild,
      args: ['label']
    }],
    _controlNonStatic: [{
      type: core.ContentChild,
      args: [MatFormFieldControl]
    }],
    _controlStatic: [{
      type: core.ContentChild,
      args: [MatFormFieldControl, {
        static: true
      }]
    }],
    _labelChildNonStatic: [{
      type: core.ContentChild,
      args: [MatLabel]
    }],
    _labelChildStatic: [{
      type: core.ContentChild,
      args: [MatLabel, {
        static: true
      }]
    }],
    _placeholderChild: [{
      type: core.ContentChild,
      args: [MatPlaceholder]
    }],
    _errorChildren: [{
      type: core.ContentChildren,
      args: [MAT_ERROR, {
        descendants: true
      }]
    }],
    _hintChildren: [{
      type: core.ContentChildren,
      args: [_MAT_HINT, {
        descendants: true
      }]
    }],
    _prefixChildren: [{
      type: core.ContentChildren,
      args: [MAT_PREFIX, {
        descendants: true
      }]
    }],
    _suffixChildren: [{
      type: core.ContentChildren,
      args: [MAT_SUFFIX, {
        descendants: true
      }]
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


class MatFormFieldModule {}

MatFormFieldModule.ɵfac = function MatFormFieldModule_Factory(t) {
  return new (t || MatFormFieldModule)();
};

MatFormFieldModule.ɵmod = /* @__PURE__ */core["ɵɵdefineNgModule"]({
  type: MatFormFieldModule,
  declarations: [MatError, MatFormField, MatHint, MatLabel, MatPlaceholder, MatPrefix, MatSuffix],
  imports: [common/* CommonModule */.ez, fesm2020_core/* MatCommonModule */.BQ, observers/* ObserversModule */.Q8],
  exports: [fesm2020_core/* MatCommonModule */.BQ, MatError, MatFormField, MatHint, MatLabel, MatPlaceholder, MatPrefix, MatSuffix]
});
MatFormFieldModule.ɵinj = /* @__PURE__ */core["ɵɵdefineInjector"]({
  imports: [[common/* CommonModule */.ez, fesm2020_core/* MatCommonModule */.BQ, observers/* ObserversModule */.Q8], fesm2020_core/* MatCommonModule */.BQ]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && core["ɵsetClassMetadata"](MatFormFieldModule, [{
    type: core.NgModule,
    args: [{
      declarations: [MatError, MatFormField, MatHint, MatLabel, MatPlaceholder, MatPrefix, MatSuffix],
      imports: [common/* CommonModule */.ez, fesm2020_core/* MatCommonModule */.BQ, observers/* ObserversModule */.Q8],
      exports: [fesm2020_core/* MatCommonModule */.BQ, MatError, MatFormField, MatHint, MatLabel, MatPlaceholder, MatPrefix, MatSuffix]
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */


 //# sourceMappingURL=form-field.mjs.map

/***/ }),

/***/ "./node_modules/@angular/material/fesm2020/input.mjs":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "c": () => (/* binding */ MatInputModule)
});

// UNUSED EXPORTS: MAT_INPUT_VALUE_ACCESSOR, MatInput, getMatInputUnsupportedTypeError

// EXTERNAL MODULE: ./node_modules/@angular/cdk/fesm2020/coercion.mjs
var coercion = __webpack_require__("./node_modules/@angular/cdk/fesm2020/coercion.mjs");
// EXTERNAL MODULE: ./node_modules/@angular/cdk/fesm2020/platform.mjs
var platform = __webpack_require__("./node_modules/@angular/cdk/fesm2020/platform.mjs");
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2020/core.mjs + 1 modules
var core = __webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs");
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/observable/empty.js
var empty = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/empty.js");
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/Subject.js + 1 modules
var Subject = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/Subject.js");
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/observable/fromEvent.js
var fromEvent = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/fromEvent.js");
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/scheduler/async.js + 6 modules
var scheduler_async = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/scheduler/async.js");
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/util/lift.js
var lift = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/lift.js");
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/observable/innerFrom.js
var innerFrom = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/innerFrom.js");
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js
var OperatorSubscriber = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js");
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/audit.js



function audit(durationSelector) {
    return (0,lift/* operate */.e)(function (source, subscriber) {
        var hasValue = false;
        var lastValue = null;
        var durationSubscriber = null;
        var isComplete = false;
        var endDuration = function () {
            durationSubscriber === null || durationSubscriber === void 0 ? void 0 : durationSubscriber.unsubscribe();
            durationSubscriber = null;
            if (hasValue) {
                hasValue = false;
                var value = lastValue;
                lastValue = null;
                subscriber.next(value);
            }
            isComplete && subscriber.complete();
        };
        var cleanupDuration = function () {
            durationSubscriber = null;
            isComplete && subscriber.complete();
        };
        source.subscribe((0,OperatorSubscriber/* createOperatorSubscriber */.x)(subscriber, function (value) {
            hasValue = true;
            lastValue = value;
            if (!durationSubscriber) {
                (0,innerFrom/* innerFrom */.Xf)(durationSelector(value)).subscribe((durationSubscriber = (0,OperatorSubscriber/* createOperatorSubscriber */.x)(subscriber, endDuration, cleanupDuration)));
            }
        }, function () {
            isComplete = true;
            (!hasValue || !durationSubscriber || durationSubscriber.closed) && subscriber.complete();
        }));
    });
}
//# sourceMappingURL=audit.js.map
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/Observable.js + 1 modules
var Observable = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/Observable.js");
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/util/isScheduler.js
var isScheduler = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/isScheduler.js");
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/util/isDate.js
function isValidDate(value) {
    return value instanceof Date && !isNaN(value);
}
//# sourceMappingURL=isDate.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/observable/timer.js




function timer(dueTime, intervalOrScheduler, scheduler) {
  if (dueTime === void 0) {
    dueTime = 0;
  }

  if (scheduler === void 0) {
    scheduler = scheduler_async/* async */.P;
  }

  var intervalDuration = -1;

  if (intervalOrScheduler != null) {
    if ((0,isScheduler/* isScheduler */.K)(intervalOrScheduler)) {
      scheduler = intervalOrScheduler;
    } else {
      intervalDuration = intervalOrScheduler;
    }
  }

  return new Observable/* Observable */.y(function (subscriber) {
    var due = isValidDate(dueTime) ? +dueTime - scheduler.now() : dueTime;

    if (due < 0) {
      due = 0;
    }

    var n = 0;
    return scheduler.schedule(function () {
      if (!subscriber.closed) {
        subscriber.next(n++);

        if (0 <= intervalDuration) {
          this.schedule(undefined, intervalDuration);
        } else {
          subscriber.complete();
        }
      }
    }, due);
  });
} //# sourceMappingURL=timer.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/auditTime.js



function auditTime(duration, scheduler) {
  if (scheduler === void 0) {
    scheduler = scheduler_async/* asyncScheduler */.z;
  }

  return audit(function () {
    return timer(duration, scheduler);
  });
} //# sourceMappingURL=auditTime.js.map
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/takeUntil.js
var takeUntil = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/takeUntil.js");
// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2020/common.mjs
var common = __webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs");
;// CONCATENATED MODULE: ./node_modules/@angular/cdk/fesm2020/text-field.mjs








/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Options to pass to the animationstart listener. */

const listenerOptions = (0,platform/* normalizePassiveListenerOptions */.i$)({
  passive: true
});
/**
 * An injectable service that can be used to monitor the autofill state of an input.
 * Based on the following blog post:
 * https://medium.com/@brunn/detecting-autofilled-fields-in-javascript-aed598d25da7
 */

class AutofillMonitor {
  constructor(_platform, _ngZone) {
    this._platform = _platform;
    this._ngZone = _ngZone;
    this._monitoredElements = new Map();
  }

  monitor(elementOrRef) {
    if (!this._platform.isBrowser) {
      return empty/* EMPTY */.E;
    }

    const element = (0,coercion/* coerceElement */.fI)(elementOrRef);

    const info = this._monitoredElements.get(element);

    if (info) {
      return info.subject;
    }

    const result = new Subject/* Subject */.x();
    const cssClass = 'cdk-text-field-autofilled';

    const listener = event => {
      // Animation events fire on initial element render, we check for the presence of the autofill
      // CSS class to make sure this is a real change in state, not just the initial render before
      // we fire off events.
      if (event.animationName === 'cdk-text-field-autofill-start' && !element.classList.contains(cssClass)) {
        element.classList.add(cssClass);

        this._ngZone.run(() => result.next({
          target: event.target,
          isAutofilled: true
        }));
      } else if (event.animationName === 'cdk-text-field-autofill-end' && element.classList.contains(cssClass)) {
        element.classList.remove(cssClass);

        this._ngZone.run(() => result.next({
          target: event.target,
          isAutofilled: false
        }));
      }
    };

    this._ngZone.runOutsideAngular(() => {
      element.addEventListener('animationstart', listener, listenerOptions);
      element.classList.add('cdk-text-field-autofill-monitored');
    });

    this._monitoredElements.set(element, {
      subject: result,
      unlisten: () => {
        element.removeEventListener('animationstart', listener, listenerOptions);
      }
    });

    return result;
  }

  stopMonitoring(elementOrRef) {
    const element = (0,coercion/* coerceElement */.fI)(elementOrRef);

    const info = this._monitoredElements.get(element);

    if (info) {
      info.unlisten();
      info.subject.complete();
      element.classList.remove('cdk-text-field-autofill-monitored');
      element.classList.remove('cdk-text-field-autofilled');

      this._monitoredElements.delete(element);
    }
  }

  ngOnDestroy() {
    this._monitoredElements.forEach((_info, element) => this.stopMonitoring(element));
  }

}

AutofillMonitor.ɵfac = function AutofillMonitor_Factory(t) {
  return new (t || AutofillMonitor)(core["ɵɵinject"](platform/* Platform */.t4), core["ɵɵinject"](core.NgZone));
};

AutofillMonitor.ɵprov = /* @__PURE__ */core["ɵɵdefineInjectable"]({
  token: AutofillMonitor,
  factory: AutofillMonitor.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && core["ɵsetClassMetadata"](AutofillMonitor, [{
    type: core.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: platform/* Platform */.t4
    }, {
      type: core.NgZone
    }];
  }, null);
})();
/** A directive that can be used to monitor the autofill state of an input. */


class CdkAutofill {
  constructor(_elementRef, _autofillMonitor) {
    this._elementRef = _elementRef;
    this._autofillMonitor = _autofillMonitor;
    /** Emits when the autofill state of the element changes. */

    this.cdkAutofill = new core.EventEmitter();
  }

  ngOnInit() {
    this._autofillMonitor.monitor(this._elementRef).subscribe(event => this.cdkAutofill.emit(event));
  }

  ngOnDestroy() {
    this._autofillMonitor.stopMonitoring(this._elementRef);
  }

}

CdkAutofill.ɵfac = function CdkAutofill_Factory(t) {
  return new (t || CdkAutofill)(core["ɵɵdirectiveInject"](core.ElementRef), core["ɵɵdirectiveInject"](AutofillMonitor));
};

CdkAutofill.ɵdir = /* @__PURE__ */core["ɵɵdefineDirective"]({
  type: CdkAutofill,
  selectors: [["", "cdkAutofill", ""]],
  outputs: {
    cdkAutofill: "cdkAutofill"
  }
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && core["ɵsetClassMetadata"](CdkAutofill, [{
    type: core.Directive,
    args: [{
      selector: '[cdkAutofill]'
    }]
  }], function () {
    return [{
      type: core.ElementRef
    }, {
      type: AutofillMonitor
    }];
  }, {
    cdkAutofill: [{
      type: core.Output
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Directive to automatically resize a textarea to fit its content. */


class CdkTextareaAutosize {
  constructor(_elementRef, _platform, _ngZone,
  /** @breaking-change 11.0.0 make document required */
  document) {
    this._elementRef = _elementRef;
    this._platform = _platform;
    this._ngZone = _ngZone;
    this._destroyed = new Subject/* Subject */.x();
    this._enabled = true;
    /**
     * Value of minRows as of last resize. If the minRows has decreased, the
     * height of the textarea needs to be recomputed to reflect the new minimum. The maxHeight
     * does not have the same problem because it does not affect the textarea's scrollHeight.
     */

    this._previousMinRows = -1;
    this._isViewInited = false;
    /** Handles `focus` and `blur` events. */

    this._handleFocusEvent = event => {
      this._hasFocus = event.type === 'focus';
    };

    this._document = document;
    this._textareaElement = this._elementRef.nativeElement;
  }
  /** Minimum amount of rows in the textarea. */


  get minRows() {
    return this._minRows;
  }

  set minRows(value) {
    this._minRows = (0,coercion/* coerceNumberProperty */.su)(value);

    this._setMinHeight();
  }
  /** Maximum amount of rows in the textarea. */


  get maxRows() {
    return this._maxRows;
  }

  set maxRows(value) {
    this._maxRows = (0,coercion/* coerceNumberProperty */.su)(value);

    this._setMaxHeight();
  }
  /** Whether autosizing is enabled or not */


  get enabled() {
    return this._enabled;
  }

  set enabled(value) {
    value = (0,coercion/* coerceBooleanProperty */.Ig)(value); // Only act if the actual value changed. This specifically helps to not run
    // resizeToFitContent too early (i.e. before ngAfterViewInit)

    if (this._enabled !== value) {
      (this._enabled = value) ? this.resizeToFitContent(true) : this.reset();
    }
  }

  get placeholder() {
    return this._textareaElement.placeholder;
  }

  set placeholder(value) {
    this._cachedPlaceholderHeight = undefined;

    if (value) {
      this._textareaElement.setAttribute('placeholder', value);
    } else {
      this._textareaElement.removeAttribute('placeholder');
    }

    this._cacheTextareaPlaceholderHeight();
  }
  /** Sets the minimum height of the textarea as determined by minRows. */


  _setMinHeight() {
    const minHeight = this.minRows && this._cachedLineHeight ? `${this.minRows * this._cachedLineHeight}px` : null;

    if (minHeight) {
      this._textareaElement.style.minHeight = minHeight;
    }
  }
  /** Sets the maximum height of the textarea as determined by maxRows. */


  _setMaxHeight() {
    const maxHeight = this.maxRows && this._cachedLineHeight ? `${this.maxRows * this._cachedLineHeight}px` : null;

    if (maxHeight) {
      this._textareaElement.style.maxHeight = maxHeight;
    }
  }

  ngAfterViewInit() {
    if (this._platform.isBrowser) {
      // Remember the height which we started with in case autosizing is disabled
      this._initialHeight = this._textareaElement.style.height;
      this.resizeToFitContent();

      this._ngZone.runOutsideAngular(() => {
        const window = this._getWindow();

        (0,fromEvent/* fromEvent */.R)(window, 'resize').pipe(auditTime(16), (0,takeUntil/* takeUntil */.R)(this._destroyed)).subscribe(() => this.resizeToFitContent(true));

        this._textareaElement.addEventListener('focus', this._handleFocusEvent);

        this._textareaElement.addEventListener('blur', this._handleFocusEvent);
      });

      this._isViewInited = true;
      this.resizeToFitContent(true);
    }
  }

  ngOnDestroy() {
    this._textareaElement.removeEventListener('focus', this._handleFocusEvent);

    this._textareaElement.removeEventListener('blur', this._handleFocusEvent);

    this._destroyed.next();

    this._destroyed.complete();
  }
  /**
   * Cache the height of a single-row textarea if it has not already been cached.
   *
   * We need to know how large a single "row" of a textarea is in order to apply minRows and
   * maxRows. For the initial version, we will assume that the height of a single line in the
   * textarea does not ever change.
   */


  _cacheTextareaLineHeight() {
    if (this._cachedLineHeight) {
      return;
    } // Use a clone element because we have to override some styles.


    let textareaClone = this._textareaElement.cloneNode(false);

    textareaClone.rows = 1; // Use `position: absolute` so that this doesn't cause a browser layout and use
    // `visibility: hidden` so that nothing is rendered. Clear any other styles that
    // would affect the height.

    textareaClone.style.position = 'absolute';
    textareaClone.style.visibility = 'hidden';
    textareaClone.style.border = 'none';
    textareaClone.style.padding = '0';
    textareaClone.style.height = '';
    textareaClone.style.minHeight = '';
    textareaClone.style.maxHeight = ''; // In Firefox it happens that textarea elements are always bigger than the specified amount
    // of rows. This is because Firefox tries to add extra space for the horizontal scrollbar.
    // As a workaround that removes the extra space for the scrollbar, we can just set overflow
    // to hidden. This ensures that there is no invalid calculation of the line height.
    // See Firefox bug report: https://bugzilla.mozilla.org/show_bug.cgi?id=33654

    textareaClone.style.overflow = 'hidden';

    this._textareaElement.parentNode.appendChild(textareaClone);

    this._cachedLineHeight = textareaClone.clientHeight;
    textareaClone.remove(); // Min and max heights have to be re-calculated if the cached line height changes

    this._setMinHeight();

    this._setMaxHeight();
  }

  _measureScrollHeight() {
    const element = this._textareaElement;
    const previousMargin = element.style.marginBottom || '';
    const isFirefox = this._platform.FIREFOX;
    const needsMarginFiller = isFirefox && this._hasFocus;
    const measuringClass = isFirefox ? 'cdk-textarea-autosize-measuring-firefox' : 'cdk-textarea-autosize-measuring'; // In some cases the page might move around while we're measuring the `textarea` on Firefox. We
    // work around it by assigning a temporary margin with the same height as the `textarea` so that
    // it occupies the same amount of space. See #23233.

    if (needsMarginFiller) {
      element.style.marginBottom = `${element.clientHeight}px`;
    } // Reset the textarea height to auto in order to shrink back to its default size.
    // Also temporarily force overflow:hidden, so scroll bars do not interfere with calculations.


    element.classList.add(measuringClass); // The measuring class includes a 2px padding to workaround an issue with Chrome,
    // so we account for that extra space here by subtracting 4 (2px top + 2px bottom).

    const scrollHeight = element.scrollHeight - 4;
    element.classList.remove(measuringClass);

    if (needsMarginFiller) {
      element.style.marginBottom = previousMargin;
    }

    return scrollHeight;
  }

  _cacheTextareaPlaceholderHeight() {
    if (!this._isViewInited || this._cachedPlaceholderHeight != undefined) {
      return;
    }

    if (!this.placeholder) {
      this._cachedPlaceholderHeight = 0;
      return;
    }

    const value = this._textareaElement.value;
    this._textareaElement.value = this._textareaElement.placeholder;
    this._cachedPlaceholderHeight = this._measureScrollHeight();
    this._textareaElement.value = value;
  }

  ngDoCheck() {
    if (this._platform.isBrowser) {
      this.resizeToFitContent();
    }
  }
  /**
   * Resize the textarea to fit its content.
   * @param force Whether to force a height recalculation. By default the height will be
   *    recalculated only if the value changed since the last call.
   */


  resizeToFitContent(force = false) {
    // If autosizing is disabled, just skip everything else
    if (!this._enabled) {
      return;
    }

    this._cacheTextareaLineHeight();

    this._cacheTextareaPlaceholderHeight(); // If we haven't determined the line-height yet, we know we're still hidden and there's no point
    // in checking the height of the textarea.


    if (!this._cachedLineHeight) {
      return;
    }

    const textarea = this._elementRef.nativeElement;
    const value = textarea.value; // Only resize if the value or minRows have changed since these calculations can be expensive.

    if (!force && this._minRows === this._previousMinRows && value === this._previousValue) {
      return;
    }

    const scrollHeight = this._measureScrollHeight();

    const height = Math.max(scrollHeight, this._cachedPlaceholderHeight || 0); // Use the scrollHeight to know how large the textarea *would* be if fit its entire value.

    textarea.style.height = `${height}px`;

    this._ngZone.runOutsideAngular(() => {
      if (typeof requestAnimationFrame !== 'undefined') {
        requestAnimationFrame(() => this._scrollToCaretPosition(textarea));
      } else {
        setTimeout(() => this._scrollToCaretPosition(textarea));
      }
    });

    this._previousValue = value;
    this._previousMinRows = this._minRows;
  }
  /**
   * Resets the textarea to its original size
   */


  reset() {
    // Do not try to change the textarea, if the initialHeight has not been determined yet
    // This might potentially remove styles when reset() is called before ngAfterViewInit
    if (this._initialHeight !== undefined) {
      this._textareaElement.style.height = this._initialHeight;
    }
  }

  _noopInputHandler() {// no-op handler that ensures we're running change detection on input events.
  }
  /** Access injected document if available or fallback to global document reference */


  _getDocument() {
    return this._document || document;
  }
  /** Use defaultView of injected document if available or fallback to global window reference */


  _getWindow() {
    const doc = this._getDocument();

    return doc.defaultView || window;
  }
  /**
   * Scrolls a textarea to the caret position. On Firefox resizing the textarea will
   * prevent it from scrolling to the caret position. We need to re-set the selection
   * in order for it to scroll to the proper position.
   */


  _scrollToCaretPosition(textarea) {
    const {
      selectionStart,
      selectionEnd
    } = textarea; // IE will throw an "Unspecified error" if we try to set the selection range after the
    // element has been removed from the DOM. Assert that the directive hasn't been destroyed
    // between the time we requested the animation frame and when it was executed.
    // Also note that we have to assert that the textarea is focused before we set the
    // selection range. Setting the selection range on a non-focused textarea will cause
    // it to receive focus on IE and Edge.

    if (!this._destroyed.isStopped && this._hasFocus) {
      textarea.setSelectionRange(selectionStart, selectionEnd);
    }
  }

}

CdkTextareaAutosize.ɵfac = function CdkTextareaAutosize_Factory(t) {
  return new (t || CdkTextareaAutosize)(core["ɵɵdirectiveInject"](core.ElementRef), core["ɵɵdirectiveInject"](platform/* Platform */.t4), core["ɵɵdirectiveInject"](core.NgZone), core["ɵɵdirectiveInject"](common/* DOCUMENT */.K0, 8));
};

CdkTextareaAutosize.ɵdir = /* @__PURE__ */core["ɵɵdefineDirective"]({
  type: CdkTextareaAutosize,
  selectors: [["textarea", "cdkTextareaAutosize", ""]],
  hostAttrs: ["rows", "1", 1, "cdk-textarea-autosize"],
  hostBindings: function CdkTextareaAutosize_HostBindings(rf, ctx) {
    if (rf & 1) {
      core["ɵɵlistener"]("input", function CdkTextareaAutosize_input_HostBindingHandler() {
        return ctx._noopInputHandler();
      });
    }
  },
  inputs: {
    minRows: ["cdkAutosizeMinRows", "minRows"],
    maxRows: ["cdkAutosizeMaxRows", "maxRows"],
    enabled: ["cdkTextareaAutosize", "enabled"],
    placeholder: "placeholder"
  },
  exportAs: ["cdkTextareaAutosize"]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && core["ɵsetClassMetadata"](CdkTextareaAutosize, [{
    type: core.Directive,
    args: [{
      selector: 'textarea[cdkTextareaAutosize]',
      exportAs: 'cdkTextareaAutosize',
      host: {
        'class': 'cdk-textarea-autosize',
        // Textarea elements that have the directive applied should have a single row by default.
        // Browsers normally show two rows by default and therefore this limits the minRows binding.
        'rows': '1',
        '(input)': '_noopInputHandler()'
      }
    }]
  }], function () {
    return [{
      type: core.ElementRef
    }, {
      type: platform/* Platform */.t4
    }, {
      type: core.NgZone
    }, {
      type: undefined,
      decorators: [{
        type: core.Optional
      }, {
        type: core.Inject,
        args: [common/* DOCUMENT */.K0]
      }]
    }];
  }, {
    minRows: [{
      type: core.Input,
      args: ['cdkAutosizeMinRows']
    }],
    maxRows: [{
      type: core.Input,
      args: ['cdkAutosizeMaxRows']
    }],
    enabled: [{
      type: core.Input,
      args: ['cdkTextareaAutosize']
    }],
    placeholder: [{
      type: core.Input
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


class TextFieldModule {}

TextFieldModule.ɵfac = function TextFieldModule_Factory(t) {
  return new (t || TextFieldModule)();
};

TextFieldModule.ɵmod = /* @__PURE__ */core["ɵɵdefineNgModule"]({
  type: TextFieldModule,
  declarations: [CdkAutofill, CdkTextareaAutosize],
  exports: [CdkAutofill, CdkTextareaAutosize]
});
TextFieldModule.ɵinj = /* @__PURE__ */core["ɵɵdefineInjector"]({});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && core["ɵsetClassMetadata"](TextFieldModule, [{
    type: core.NgModule,
    args: [{
      declarations: [CdkAutofill, CdkTextareaAutosize],
      exports: [CdkAutofill, CdkTextareaAutosize]
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */


 //# sourceMappingURL=text-field.mjs.map
// EXTERNAL MODULE: ./node_modules/@angular/forms/fesm2020/forms.mjs + 3 modules
var fesm2020_forms = __webpack_require__("./node_modules/@angular/forms/fesm2020/forms.mjs");
// EXTERNAL MODULE: ./node_modules/@angular/material/fesm2020/core.mjs + 8 modules
var fesm2020_core = __webpack_require__("./node_modules/@angular/material/fesm2020/core.mjs");
// EXTERNAL MODULE: ./node_modules/@angular/material/fesm2020/form-field.mjs + 3 modules
var form_field = __webpack_require__("./node_modules/@angular/material/fesm2020/form-field.mjs");
;// CONCATENATED MODULE: ./node_modules/@angular/material/fesm2020/input.mjs














/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** @docs-private */

function getMatInputUnsupportedTypeError(type) {
  return Error(`Input type "${type}" isn't supported by matInput.`);
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * This token is used to inject the object whose value should be set into `MatInput`. If none is
 * provided, the native `HTMLInputElement` is used. Directives like `MatDatepickerInput` can provide
 * themselves for this token, in order to make `MatInput` delegate the getting and setting of the
 * value to them.
 */


const MAT_INPUT_VALUE_ACCESSOR = new core.InjectionToken('MAT_INPUT_VALUE_ACCESSOR');
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Invalid input type. Using one of these will throw an MatInputUnsupportedTypeError.

const MAT_INPUT_INVALID_TYPES = ['button', 'checkbox', 'file', 'hidden', 'image', 'radio', 'range', 'reset', 'submit'];
let nextUniqueId = 0; // Boilerplate for applying mixins to MatInput.

/** @docs-private */

const _MatInputBase = (0,fesm2020_core/* mixinErrorState */.FD)(class {
  constructor(_defaultErrorStateMatcher, _parentForm, _parentFormGroup,
  /** @docs-private */
  ngControl) {
    this._defaultErrorStateMatcher = _defaultErrorStateMatcher;
    this._parentForm = _parentForm;
    this._parentFormGroup = _parentFormGroup;
    this.ngControl = ngControl;
  }

});
/** Directive that allows a native input to work inside a `MatFormField`. */


class MatInput extends _MatInputBase {
  constructor(_elementRef, _platform, ngControl, _parentForm, _parentFormGroup, _defaultErrorStateMatcher, inputValueAccessor, _autofillMonitor, ngZone, // TODO: Remove this once the legacy appearance has been removed. We only need
  // to inject the form-field for determining whether the placeholder has been promoted.
  _formField) {
    super(_defaultErrorStateMatcher, _parentForm, _parentFormGroup, ngControl);
    this._elementRef = _elementRef;
    this._platform = _platform;
    this._autofillMonitor = _autofillMonitor;
    this._formField = _formField;
    this._uid = `mat-input-${nextUniqueId++}`;
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */

    this.focused = false;
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */

    this.stateChanges = new Subject/* Subject */.x();
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */

    this.controlType = 'mat-input';
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */

    this.autofilled = false;
    this._disabled = false;
    this._type = 'text';
    this._readonly = false;
    this._neverEmptyInputTypes = ['date', 'datetime', 'datetime-local', 'month', 'time', 'week'].filter(t => (0,platform/* getSupportedInputTypes */.qK)().has(t));

    this._iOSKeyupListener = event => {
      const el = event.target; // Note: We specifically check for 0, rather than `!el.selectionStart`, because the two
      // indicate different things. If the value is 0, it means that the caret is at the start
      // of the input, whereas a value of `null` means that the input doesn't support
      // manipulating the selection range. Inputs that don't support setting the selection range
      // will throw an error so we want to avoid calling `setSelectionRange` on them. See:
      // https://html.spec.whatwg.org/multipage/input.html#do-not-apply

      if (!el.value && el.selectionStart === 0 && el.selectionEnd === 0) {
        // Note: Just setting `0, 0` doesn't fix the issue. Setting
        // `1, 1` fixes it for the first time that you type text and
        // then hold delete. Toggling to `1, 1` and then back to
        // `0, 0` seems to completely fix it.
        el.setSelectionRange(1, 1);
        el.setSelectionRange(0, 0);
      }
    };

    const element = this._elementRef.nativeElement;
    const nodeName = element.nodeName.toLowerCase(); // If no input value accessor was explicitly specified, use the element as the input value
    // accessor.

    this._inputValueAccessor = inputValueAccessor || element;
    this._previousNativeValue = this.value; // Force setter to be called in case id was not specified.

    this.id = this.id; // On some versions of iOS the caret gets stuck in the wrong place when holding down the delete
    // key. In order to get around this we need to "jiggle" the caret loose. Since this bug only
    // exists on iOS, we only bother to install the listener on iOS.

    if (_platform.IOS) {
      ngZone.runOutsideAngular(() => {
        _elementRef.nativeElement.addEventListener('keyup', this._iOSKeyupListener);
      });
    }

    this._isServer = !this._platform.isBrowser;
    this._isNativeSelect = nodeName === 'select';
    this._isTextarea = nodeName === 'textarea';
    this._isInFormField = !!_formField;

    if (this._isNativeSelect) {
      this.controlType = element.multiple ? 'mat-native-select-multiple' : 'mat-native-select';
    }
  }
  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */


  get disabled() {
    if (this.ngControl && this.ngControl.disabled !== null) {
      return this.ngControl.disabled;
    }

    return this._disabled;
  }

  set disabled(value) {
    this._disabled = (0,coercion/* coerceBooleanProperty */.Ig)(value); // Browsers may not fire the blur event if the input is disabled too quickly.
    // Reset from here to ensure that the element doesn't become stuck.

    if (this.focused) {
      this.focused = false;
      this.stateChanges.next();
    }
  }
  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */


  get id() {
    return this._id;
  }

  set id(value) {
    this._id = value || this._uid;
  }
  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */


  get required() {
    return this._required ?? this.ngControl?.control?.hasValidator(fesm2020_forms.Validators.required) ?? false;
  }

  set required(value) {
    this._required = (0,coercion/* coerceBooleanProperty */.Ig)(value);
  }
  /** Input type of the element. */


  get type() {
    return this._type;
  }

  set type(value) {
    this._type = value || 'text';

    this._validateType(); // When using Angular inputs, developers are no longer able to set the properties on the native
    // input element. To ensure that bindings for `type` work, we need to sync the setter
    // with the native property. Textarea elements don't support the type property or attribute.


    if (!this._isTextarea && (0,platform/* getSupportedInputTypes */.qK)().has(this._type)) {
      this._elementRef.nativeElement.type = this._type;
    }
  }
  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */


  get value() {
    return this._inputValueAccessor.value;
  }

  set value(value) {
    if (value !== this.value) {
      this._inputValueAccessor.value = value;
      this.stateChanges.next();
    }
  }
  /** Whether the element is readonly. */


  get readonly() {
    return this._readonly;
  }

  set readonly(value) {
    this._readonly = (0,coercion/* coerceBooleanProperty */.Ig)(value);
  }

  ngAfterViewInit() {
    if (this._platform.isBrowser) {
      this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(event => {
        this.autofilled = event.isAutofilled;
        this.stateChanges.next();
      });
    }
  }

  ngOnChanges() {
    this.stateChanges.next();
  }

  ngOnDestroy() {
    this.stateChanges.complete();

    if (this._platform.isBrowser) {
      this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement);
    }

    if (this._platform.IOS) {
      this._elementRef.nativeElement.removeEventListener('keyup', this._iOSKeyupListener);
    }
  }

  ngDoCheck() {
    if (this.ngControl) {
      // We need to re-evaluate this on every change detection cycle, because there are some
      // error triggers that we can't subscribe to (e.g. parent form submissions). This means
      // that whatever logic is in here has to be super lean or we risk destroying the performance.
      this.updateErrorState();
    } // We need to dirty-check the native element's value, because there are some cases where
    // we won't be notified when it changes (e.g. the consumer isn't using forms or they're
    // updating the value using `emitEvent: false`).


    this._dirtyCheckNativeValue(); // We need to dirty-check and set the placeholder attribute ourselves, because whether it's
    // present or not depends on a query which is prone to "changed after checked" errors.


    this._dirtyCheckPlaceholder();
  }
  /** Focuses the input. */


  focus(options) {
    this._elementRef.nativeElement.focus(options);
  }
  /** Callback for the cases where the focused state of the input changes. */


  _focusChanged(isFocused) {
    if (isFocused !== this.focused) {
      this.focused = isFocused;
      this.stateChanges.next();
    }
  }

  _onInput() {// This is a noop function and is used to let Angular know whenever the value changes.
    // Angular will run a new change detection each time the `input` event has been dispatched.
    // It's necessary that Angular recognizes the value change, because when floatingLabel
    // is set to false and Angular forms aren't used, the placeholder won't recognize the
    // value changes and will not disappear.
    // Listening to the input event wouldn't be necessary when the input is using the
    // FormsModule or ReactiveFormsModule, because Angular forms also listens to input events.
  }
  /** Does some manual dirty checking on the native input `placeholder` attribute. */


  _dirtyCheckPlaceholder() {
    // If we're hiding the native placeholder, it should also be cleared from the DOM, otherwise
    // screen readers will read it out twice: once from the label and once from the attribute.
    // TODO: can be removed once we get rid of the `legacy` style for the form field, because it's
    // the only one that supports promoting the placeholder to a label.
    const placeholder = this._formField?._hideControlPlaceholder?.() ? null : this.placeholder;

    if (placeholder !== this._previousPlaceholder) {
      const element = this._elementRef.nativeElement;
      this._previousPlaceholder = placeholder;
      placeholder ? element.setAttribute('placeholder', placeholder) : element.removeAttribute('placeholder');
    }
  }
  /** Does some manual dirty checking on the native input `value` property. */


  _dirtyCheckNativeValue() {
    const newValue = this._elementRef.nativeElement.value;

    if (this._previousNativeValue !== newValue) {
      this._previousNativeValue = newValue;
      this.stateChanges.next();
    }
  }
  /** Make sure the input is a supported type. */


  _validateType() {
    if (MAT_INPUT_INVALID_TYPES.indexOf(this._type) > -1 && (typeof ngDevMode === 'undefined' || ngDevMode)) {
      throw getMatInputUnsupportedTypeError(this._type);
    }
  }
  /** Checks whether the input type is one of the types that are never empty. */


  _isNeverEmpty() {
    return this._neverEmptyInputTypes.indexOf(this._type) > -1;
  }
  /** Checks whether the input is invalid based on the native validation. */


  _isBadInput() {
    // The `validity` property won't be present on platform-server.
    let validity = this._elementRef.nativeElement.validity;
    return validity && validity.badInput;
  }
  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */


  get empty() {
    return !this._isNeverEmpty() && !this._elementRef.nativeElement.value && !this._isBadInput() && !this.autofilled;
  }
  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */


  get shouldLabelFloat() {
    if (this._isNativeSelect) {
      // For a single-selection `<select>`, the label should float when the selected option has
      // a non-empty display value. For a `<select multiple>`, the label *always* floats to avoid
      // overlapping the label with the options.
      const selectElement = this._elementRef.nativeElement;
      const firstOption = selectElement.options[0]; // On most browsers the `selectedIndex` will always be 0, however on IE and Edge it'll be
      // -1 if the `value` is set to something, that isn't in the list of options, at a later point.

      return this.focused || selectElement.multiple || !this.empty || !!(selectElement.selectedIndex > -1 && firstOption && firstOption.label);
    } else {
      return this.focused || !this.empty;
    }
  }
  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */


  setDescribedByIds(ids) {
    if (ids.length) {
      this._elementRef.nativeElement.setAttribute('aria-describedby', ids.join(' '));
    } else {
      this._elementRef.nativeElement.removeAttribute('aria-describedby');
    }
  }
  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */


  onContainerClick() {
    // Do not re-focus the input element if the element is already focused. Otherwise it can happen
    // that someone clicks on a time input and the cursor resets to the "hours" field while the
    // "minutes" field was actually clicked. See: https://github.com/angular/components/issues/12849
    if (!this.focused) {
      this.focus();
    }
  }
  /** Whether the form control is a native select that is displayed inline. */


  _isInlineSelect() {
    const element = this._elementRef.nativeElement;
    return this._isNativeSelect && (element.multiple || element.size > 1);
  }

}

MatInput.ɵfac = function MatInput_Factory(t) {
  return new (t || MatInput)(core["ɵɵdirectiveInject"](core.ElementRef), core["ɵɵdirectiveInject"](platform/* Platform */.t4), core["ɵɵdirectiveInject"](fesm2020_forms.NgControl, 10), core["ɵɵdirectiveInject"](fesm2020_forms.NgForm, 8), core["ɵɵdirectiveInject"](fesm2020_forms.FormGroupDirective, 8), core["ɵɵdirectiveInject"](fesm2020_core/* ErrorStateMatcher */.rD), core["ɵɵdirectiveInject"](MAT_INPUT_VALUE_ACCESSOR, 10), core["ɵɵdirectiveInject"](AutofillMonitor), core["ɵɵdirectiveInject"](core.NgZone), core["ɵɵdirectiveInject"](form_field/* MAT_FORM_FIELD */.G_, 8));
};

MatInput.ɵdir = /* @__PURE__ */core["ɵɵdefineDirective"]({
  type: MatInput,
  selectors: [["input", "matInput", ""], ["textarea", "matInput", ""], ["select", "matNativeControl", ""], ["input", "matNativeControl", ""], ["textarea", "matNativeControl", ""]],
  hostAttrs: [1, "mat-input-element", "mat-form-field-autofill-control"],
  hostVars: 12,
  hostBindings: function MatInput_HostBindings(rf, ctx) {
    if (rf & 1) {
      core["ɵɵlistener"]("focus", function MatInput_focus_HostBindingHandler() {
        return ctx._focusChanged(true);
      })("blur", function MatInput_blur_HostBindingHandler() {
        return ctx._focusChanged(false);
      })("input", function MatInput_input_HostBindingHandler() {
        return ctx._onInput();
      });
    }

    if (rf & 2) {
      core["ɵɵhostProperty"]("disabled", ctx.disabled)("required", ctx.required);
      core["ɵɵattribute"]("id", ctx.id)("data-placeholder", ctx.placeholder)("name", ctx.name || null)("readonly", ctx.readonly && !ctx._isNativeSelect || null)("aria-invalid", ctx.empty && ctx.required ? null : ctx.errorState)("aria-required", ctx.required);
      core["ɵɵclassProp"]("mat-input-server", ctx._isServer)("mat-native-select-inline", ctx._isInlineSelect());
    }
  },
  inputs: {
    disabled: "disabled",
    id: "id",
    placeholder: "placeholder",
    name: "name",
    required: "required",
    type: "type",
    errorStateMatcher: "errorStateMatcher",
    userAriaDescribedBy: ["aria-describedby", "userAriaDescribedBy"],
    value: "value",
    readonly: "readonly"
  },
  exportAs: ["matInput"],
  features: [core["ɵɵProvidersFeature"]([{
    provide: form_field/* MatFormFieldControl */.Eo,
    useExisting: MatInput
  }]), core["ɵɵInheritDefinitionFeature"], core["ɵɵNgOnChangesFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && core["ɵsetClassMetadata"](MatInput, [{
    type: core.Directive,
    args: [{
      selector: `input[matInput], textarea[matInput], select[matNativeControl],
      input[matNativeControl], textarea[matNativeControl]`,
      exportAs: 'matInput',
      host: {
        /**
         * @breaking-change 8.0.0 remove .mat-form-field-autofill-control in favor of AutofillMonitor.
         */
        'class': 'mat-input-element mat-form-field-autofill-control',
        '[class.mat-input-server]': '_isServer',
        // Native input properties that are overwritten by Angular inputs need to be synced with
        // the native input element. Otherwise property bindings for those don't work.
        '[attr.id]': 'id',
        // At the time of writing, we have a lot of customer tests that look up the input based on its
        // placeholder. Since we sometimes omit the placeholder attribute from the DOM to prevent screen
        // readers from reading it twice, we have to keep it somewhere in the DOM for the lookup.
        '[attr.data-placeholder]': 'placeholder',
        '[disabled]': 'disabled',
        '[required]': 'required',
        '[attr.name]': 'name || null',
        '[attr.readonly]': 'readonly && !_isNativeSelect || null',
        '[class.mat-native-select-inline]': '_isInlineSelect()',
        // Only mark the input as invalid for assistive technology if it has a value since the
        // state usually overlaps with `aria-required` when the input is empty and can be redundant.
        '[attr.aria-invalid]': '(empty && required) ? null : errorState',
        '[attr.aria-required]': 'required',
        '(focus)': '_focusChanged(true)',
        '(blur)': '_focusChanged(false)',
        '(input)': '_onInput()'
      },
      providers: [{
        provide: form_field/* MatFormFieldControl */.Eo,
        useExisting: MatInput
      }]
    }]
  }], function () {
    return [{
      type: core.ElementRef
    }, {
      type: platform/* Platform */.t4
    }, {
      type: fesm2020_forms.NgControl,
      decorators: [{
        type: core.Optional
      }, {
        type: core.Self
      }]
    }, {
      type: fesm2020_forms.NgForm,
      decorators: [{
        type: core.Optional
      }]
    }, {
      type: fesm2020_forms.FormGroupDirective,
      decorators: [{
        type: core.Optional
      }]
    }, {
      type: fesm2020_core/* ErrorStateMatcher */.rD
    }, {
      type: undefined,
      decorators: [{
        type: core.Optional
      }, {
        type: core.Self
      }, {
        type: core.Inject,
        args: [MAT_INPUT_VALUE_ACCESSOR]
      }]
    }, {
      type: AutofillMonitor
    }, {
      type: core.NgZone
    }, {
      type: form_field/* MatFormField */.KE,
      decorators: [{
        type: core.Optional
      }, {
        type: core.Inject,
        args: [form_field/* MAT_FORM_FIELD */.G_]
      }]
    }];
  }, {
    disabled: [{
      type: core.Input
    }],
    id: [{
      type: core.Input
    }],
    placeholder: [{
      type: core.Input
    }],
    name: [{
      type: core.Input
    }],
    required: [{
      type: core.Input
    }],
    type: [{
      type: core.Input
    }],
    errorStateMatcher: [{
      type: core.Input
    }],
    userAriaDescribedBy: [{
      type: core.Input,
      args: ['aria-describedby']
    }],
    value: [{
      type: core.Input
    }],
    readonly: [{
      type: core.Input
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


class MatInputModule {}

MatInputModule.ɵfac = function MatInputModule_Factory(t) {
  return new (t || MatInputModule)();
};

MatInputModule.ɵmod = /* @__PURE__ */core["ɵɵdefineNgModule"]({
  type: MatInputModule,
  declarations: [MatInput],
  imports: [TextFieldModule, form_field/* MatFormFieldModule */.lN, fesm2020_core/* MatCommonModule */.BQ],
  exports: [TextFieldModule, // We re-export the `MatFormFieldModule` since `MatInput` will almost always
  // be used together with `MatFormField`.
  form_field/* MatFormFieldModule */.lN, MatInput]
});
MatInputModule.ɵinj = /* @__PURE__ */core["ɵɵdefineInjector"]({
  providers: [fesm2020_core/* ErrorStateMatcher */.rD],
  imports: [[TextFieldModule, form_field/* MatFormFieldModule */.lN, fesm2020_core/* MatCommonModule */.BQ], TextFieldModule, // We re-export the `MatFormFieldModule` since `MatInput` will almost always
  // be used together with `MatFormField`.
  form_field/* MatFormFieldModule */.lN]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && core["ɵsetClassMetadata"](MatInputModule, [{
    type: core.NgModule,
    args: [{
      declarations: [MatInput],
      imports: [TextFieldModule, form_field/* MatFormFieldModule */.lN, fesm2020_core/* MatCommonModule */.BQ],
      exports: [TextFieldModule, // We re-export the `MatFormFieldModule` since `MatInput` will almost always
      // be used together with `MatFormField`.
      form_field/* MatFormFieldModule */.lN, MatInput],
      providers: [fesm2020_core/* ErrorStateMatcher */.rD]
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */


 //# sourceMappingURL=input.mjs.map

/***/ }),

/***/ "./node_modules/@angular/platform-browser/fesm2020/animations.mjs":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Qb": () => (/* binding */ ANIMATION_MODULE_TYPE),
  "PW": () => (/* binding */ BrowserAnimationsModule)
});

// UNUSED EXPORTS: NoopAnimationsModule, ɵAnimationRenderer, ɵAnimationRendererFactory, ɵBrowserAnimationBuilder, ɵBrowserAnimationFactory, ɵInjectableAnimationEngine

// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2020/core.mjs + 1 modules
var core = __webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs");
// EXTERNAL MODULE: ./node_modules/@angular/platform-browser/fesm2020/platform-browser.mjs
var platform_browser = __webpack_require__("./node_modules/@angular/platform-browser/fesm2020/platform-browser.mjs");
// EXTERNAL MODULE: ./node_modules/@angular/animations/fesm2020/animations.mjs
var animations = __webpack_require__("./node_modules/@angular/animations/fesm2020/animations.mjs");
;// CONCATENATED MODULE: ./node_modules/@angular/animations/fesm2020/browser.mjs
/* provided dependency */ var process = __webpack_require__("./node_modules/process/browser.js");
/**
 * @license Angular v13.3.10
 * (c) 2010-2022 Google LLC. https://angular.io/
 * License: MIT
 */



/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

const NG_DEV_MODE$1 = typeof ngDevMode === 'undefined' || !!ngDevMode;
const LINE_START = '\n - ';

function invalidTimingValue(exp) {
  return new core["ɵRuntimeError"](3000
  /* INVALID_TIMING_VALUE */
  , NG_DEV_MODE$1 && `The provided timing value "${exp}" is invalid.`);
}

function negativeStepValue() {
  return new core["ɵRuntimeError"](3100
  /* NEGATIVE_STEP_VALUE */
  , NG_DEV_MODE$1 && 'Duration values below 0 are not allowed for this animation step.');
}

function negativeDelayValue() {
  return new core["ɵRuntimeError"](3101
  /* NEGATIVE_DELAY_VALUE */
  , NG_DEV_MODE$1 && 'Delay values below 0 are not allowed for this animation step.');
}

function invalidStyleParams(varName) {
  return new core["ɵRuntimeError"](3001
  /* INVALID_STYLE_PARAMS */
  , NG_DEV_MODE$1 && `Unable to resolve the local animation param ${varName} in the given list of values`);
}

function invalidParamValue(varName) {
  return new core["ɵRuntimeError"](3003
  /* INVALID_PARAM_VALUE */
  , NG_DEV_MODE$1 && `Please provide a value for the animation param ${varName}`);
}

function invalidNodeType(nodeType) {
  return new core["ɵRuntimeError"](3004
  /* INVALID_NODE_TYPE */
  , NG_DEV_MODE$1 && `Unable to resolve animation metadata node #${nodeType}`);
}

function invalidCssUnitValue(userProvidedProperty, value) {
  return new core["ɵRuntimeError"](3005
  /* INVALID_CSS_UNIT_VALUE */
  , NG_DEV_MODE$1 && `Please provide a CSS unit value for ${userProvidedProperty}:${value}`);
}

function invalidTrigger() {
  return new core["ɵRuntimeError"](3006
  /* INVALID_TRIGGER */
  , NG_DEV_MODE$1 && 'animation triggers cannot be prefixed with an `@` sign (e.g. trigger(\'@foo\', [...]))');
}

function invalidDefinition() {
  return new core["ɵRuntimeError"](3007
  /* INVALID_DEFINITION */
  , NG_DEV_MODE$1 && 'only state() and transition() definitions can sit inside of a trigger()');
}

function invalidState(metadataName, missingSubs) {
  return new core["ɵRuntimeError"](3008
  /* INVALID_STATE */
  , NG_DEV_MODE$1 && `state("${metadataName}", ...) must define default values for all the following style substitutions: ${missingSubs.join(', ')}`);
}

function invalidStyleValue(value) {
  return new core["ɵRuntimeError"](3002
  /* INVALID_STYLE_VALUE */
  , NG_DEV_MODE$1 && `The provided style string value ${value} is not allowed.`);
}

function invalidProperty(prop) {
  return new ɵRuntimeError(3009
  /* INVALID_PROPERTY */
  , NG_DEV_MODE$1 && `The provided animation property "${prop}" is not a supported CSS property for animations`);
}

function invalidParallelAnimation(prop, firstStart, firstEnd, secondStart, secondEnd) {
  return new core["ɵRuntimeError"](3010
  /* INVALID_PARALLEL_ANIMATION */
  , NG_DEV_MODE$1 && `The CSS property "${prop}" that exists between the times of "${firstStart}ms" and "${firstEnd}ms" is also being animated in a parallel animation between the times of "${secondStart}ms" and "${secondEnd}ms"`);
}

function invalidKeyframes() {
  return new core["ɵRuntimeError"](3011
  /* INVALID_KEYFRAMES */
  , NG_DEV_MODE$1 && `keyframes() must be placed inside of a call to animate()`);
}

function invalidOffset() {
  return new core["ɵRuntimeError"](3012
  /* INVALID_OFFSET */
  , NG_DEV_MODE$1 && `Please ensure that all keyframe offsets are between 0 and 1`);
}

function keyframeOffsetsOutOfOrder() {
  return new core["ɵRuntimeError"](3200
  /* KEYFRAME_OFFSETS_OUT_OF_ORDER */
  , NG_DEV_MODE$1 && `Please ensure that all keyframe offsets are in order`);
}

function keyframesMissingOffsets() {
  return new core["ɵRuntimeError"](3202
  /* KEYFRAMES_MISSING_OFFSETS */
  , NG_DEV_MODE$1 && `Not all style() steps within the declared keyframes() contain offsets`);
}

function invalidStagger() {
  return new core["ɵRuntimeError"](3013
  /* INVALID_STAGGER */
  , NG_DEV_MODE$1 && `stagger() can only be used inside of query()`);
}

function invalidQuery(selector) {
  return new core["ɵRuntimeError"](3014
  /* INVALID_QUERY */
  , NG_DEV_MODE$1 && `\`query("${selector}")\` returned zero elements. (Use \`query("${selector}", { optional: true })\` if you wish to allow this.)`);
}

function invalidExpression(expr) {
  return new core["ɵRuntimeError"](3015
  /* INVALID_EXPRESSION */
  , NG_DEV_MODE$1 && `The provided transition expression "${expr}" is not supported`);
}

function invalidTransitionAlias(alias) {
  return new core["ɵRuntimeError"](3016
  /* INVALID_TRANSITION_ALIAS */
  , NG_DEV_MODE$1 && `The transition alias value "${alias}" is not supported`);
}

function validationFailed(errors) {
  return new ɵRuntimeError(3500
  /* VALIDATION_FAILED */
  , NG_DEV_MODE$1 && `animation validation failed:\n${errors.map(err => err.message).join('\n')}`);
}

function buildingFailed(errors) {
  return new ɵRuntimeError(3501
  /* BUILDING_FAILED */
  , NG_DEV_MODE$1 && `animation building failed:\n${errors.map(err => err.message).join('\n')}`);
}

function triggerBuildFailed(name, errors) {
  return new core["ɵRuntimeError"](3404
  /* TRIGGER_BUILD_FAILED */
  , NG_DEV_MODE$1 && `The animation trigger "${name}" has failed to build due to the following errors:\n - ${errors.map(err => err.message).join('\n - ')}`);
}

function animationFailed(errors) {
  return new core["ɵRuntimeError"](3502
  /* ANIMATION_FAILED */
  , NG_DEV_MODE$1 && `Unable to animate due to the following errors:${LINE_START}${errors.map(err => err.message).join(LINE_START)}`);
}

function registerFailed(errors) {
  return new core["ɵRuntimeError"](3503
  /* REGISTRATION_FAILED */
  , NG_DEV_MODE$1 && `Unable to build the animation due to the following errors: ${errors.map(err => err.message).join('\n')}`);
}

function missingOrDestroyedAnimation() {
  return new core["ɵRuntimeError"](3300
  /* MISSING_OR_DESTROYED_ANIMATION */
  , NG_DEV_MODE$1 && 'The requested animation doesn\'t exist or has already been destroyed');
}

function createAnimationFailed(errors) {
  return new core["ɵRuntimeError"](3504
  /* CREATE_ANIMATION_FAILED */
  , NG_DEV_MODE$1 && `Unable to create the animation due to the following errors:${errors.map(err => err.message).join('\n')}`);
}

function missingPlayer(id) {
  return new core["ɵRuntimeError"](3301
  /* MISSING_PLAYER */
  , NG_DEV_MODE$1 && `Unable to find the timeline player referenced by ${id}`);
}

function missingTrigger(phase, name) {
  return new core["ɵRuntimeError"](3302
  /* MISSING_TRIGGER */
  , NG_DEV_MODE$1 && `Unable to listen on the animation trigger event "${phase}" because the animation trigger "${name}" doesn\'t exist!`);
}

function missingEvent(name) {
  return new core["ɵRuntimeError"](3303
  /* MISSING_EVENT */
  , NG_DEV_MODE$1 && `Unable to listen on the animation trigger "${name}" because the provided event is undefined!`);
}

function unsupportedTriggerEvent(phase, name) {
  return new core["ɵRuntimeError"](3400
  /* UNSUPPORTED_TRIGGER_EVENT */
  , NG_DEV_MODE$1 && `The provided animation trigger event "${phase}" for the animation trigger "${name}" is not supported!`);
}

function unregisteredTrigger(name) {
  return new core["ɵRuntimeError"](3401
  /* UNREGISTERED_TRIGGER */
  , NG_DEV_MODE$1 && `The provided animation trigger "${name}" has not been registered!`);
}

function triggerTransitionsFailed(errors) {
  return new core["ɵRuntimeError"](3402
  /* TRIGGER_TRANSITIONS_FAILED */
  , NG_DEV_MODE$1 && `Unable to process animations due to the following failed trigger transitions\n ${errors.map(err => err.message).join('\n')}`);
}

function triggerParsingFailed(name, errors) {
  return new ɵRuntimeError(3403
  /* TRIGGER_PARSING_FAILED */
  , NG_DEV_MODE$1 && `Animation parsing for the ${name} trigger have failed:${LINE_START}${errors.map(err => err.message).join(LINE_START)}`);
}

function transitionFailed(name, errors) {
  return new core["ɵRuntimeError"](3505
  /* TRANSITION_FAILED */
  , NG_DEV_MODE$1 && `@${name} has failed due to:\n ${errors.map(err => err.message).join('\n- ')}`);
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


function isBrowser() {
  return typeof window !== 'undefined' && typeof window.document !== 'undefined';
}

function isNode() {
  // Checking only for `process` isn't enough to identify whether or not we're in a Node
  // environment, because Webpack by default will polyfill the `process`. While we can discern
  // that Webpack polyfilled it by looking at `process.browser`, it's very Webpack-specific and
  // might not be future-proof. Instead we look at the stringified version of `process` which
  // is `[object process]` in Node and `[object Object]` when polyfilled.
  return typeof process !== 'undefined' && {}.toString.call(process) === '[object process]';
}

function optimizeGroupPlayer(players) {
  switch (players.length) {
    case 0:
      return new animations/* NoopAnimationPlayer */.ZN();

    case 1:
      return players[0];

    default:
      return new animations/* ɵAnimationGroupPlayer */.ZE(players);
  }
}

function normalizeKeyframes(driver, normalizer, element, keyframes, preStyles = {}, postStyles = {}) {
  const errors = [];
  const normalizedKeyframes = [];
  let previousOffset = -1;
  let previousKeyframe = null;
  keyframes.forEach(kf => {
    const offset = kf['offset'];
    const isSameOffset = offset == previousOffset;
    const normalizedKeyframe = isSameOffset && previousKeyframe || {};
    Object.keys(kf).forEach(prop => {
      let normalizedProp = prop;
      let normalizedValue = kf[prop];

      if (prop !== 'offset') {
        normalizedProp = normalizer.normalizePropertyName(normalizedProp, errors);

        switch (normalizedValue) {
          case animations/* ɵPRE_STYLE */.k1:
            normalizedValue = preStyles[prop];
            break;

          case animations/* AUTO_STYLE */.l3:
            normalizedValue = postStyles[prop];
            break;

          default:
            normalizedValue = normalizer.normalizeStyleValue(prop, normalizedProp, normalizedValue, errors);
            break;
        }
      }

      normalizedKeyframe[normalizedProp] = normalizedValue;
    });

    if (!isSameOffset) {
      normalizedKeyframes.push(normalizedKeyframe);
    }

    previousKeyframe = normalizedKeyframe;
    previousOffset = offset;
  });

  if (errors.length) {
    throw animationFailed(errors);
  }

  return normalizedKeyframes;
}

function listenOnPlayer(player, eventName, event, callback) {
  switch (eventName) {
    case 'start':
      player.onStart(() => callback(event && copyAnimationEvent(event, 'start', player)));
      break;

    case 'done':
      player.onDone(() => callback(event && copyAnimationEvent(event, 'done', player)));
      break;

    case 'destroy':
      player.onDestroy(() => callback(event && copyAnimationEvent(event, 'destroy', player)));
      break;
  }
}

function copyAnimationEvent(e, phaseName, player) {
  const totalTime = player.totalTime;
  const disabled = player.disabled ? true : false;
  const event = makeAnimationEvent(e.element, e.triggerName, e.fromState, e.toState, phaseName || e.phaseName, totalTime == undefined ? e.totalTime : totalTime, disabled);
  const data = e['_data'];

  if (data != null) {
    event['_data'] = data;
  }

  return event;
}

function makeAnimationEvent(element, triggerName, fromState, toState, phaseName = '', totalTime = 0, disabled) {
  return {
    element,
    triggerName,
    fromState,
    toState,
    phaseName,
    totalTime,
    disabled: !!disabled
  };
}

function getOrSetAsInMap(map, key, defaultValue) {
  let value;

  if (map instanceof Map) {
    value = map.get(key);

    if (!value) {
      map.set(key, value = defaultValue);
    }
  } else {
    value = map[key];

    if (!value) {
      value = map[key] = defaultValue;
    }
  }

  return value;
}

function parseTimelineCommand(command) {
  const separatorPos = command.indexOf(':');
  const id = command.substring(1, separatorPos);
  const action = command.substr(separatorPos + 1);
  return [id, action];
}

let _contains = (elm1, elm2) => false;

let _query = (element, selector, multi) => {
  return [];
};

let _documentElement = null;

function getParentElement(element) {
  const parent = element.parentNode || element.host; // consider host to support shadow DOM

  if (parent === _documentElement) {
    return null;
  }

  return parent;
} // Define utility methods for browsers and platform-server(domino) where Element
// and utility methods exist.


const _isNode = isNode();

if (_isNode || typeof Element !== 'undefined') {
  if (!isBrowser()) {
    _contains = (elm1, elm2) => elm1.contains(elm2);
  } else {
    // Read the document element in an IIFE that's been marked pure to avoid a top-level property
    // read that may prevent tree-shaking.
    _documentElement = /* @__PURE__ */(() => document.documentElement)();

    _contains = (elm1, elm2) => {
      while (elm2) {
        if (elm2 === elm1) {
          return true;
        }

        elm2 = getParentElement(elm2);
      }

      return false;
    };
  }

  _query = (element, selector, multi) => {
    if (multi) {
      return Array.from(element.querySelectorAll(selector));
    }

    const elem = element.querySelector(selector);
    return elem ? [elem] : [];
  };
}

function containsVendorPrefix(prop) {
  // Webkit is the only real popular vendor prefix nowadays
  // cc: http://shouldiprefix.com/
  return prop.substring(1, 6) == 'ebkit'; // webkit or Webkit
}

let _CACHED_BODY = null;
let _IS_WEBKIT = false;

function validateStyleProperty(prop) {
  if (!_CACHED_BODY) {
    _CACHED_BODY = getBodyNode() || {};
    _IS_WEBKIT = _CACHED_BODY.style ? 'WebkitAppearance' in _CACHED_BODY.style : false;
  }

  let result = true;

  if (_CACHED_BODY.style && !containsVendorPrefix(prop)) {
    result = prop in _CACHED_BODY.style;

    if (!result && _IS_WEBKIT) {
      const camelProp = 'Webkit' + prop.charAt(0).toUpperCase() + prop.substr(1);
      result = camelProp in _CACHED_BODY.style;
    }
  }

  return result;
}

function getBodyNode() {
  if (typeof document != 'undefined') {
    return document.body;
  }

  return null;
}

const containsElement = _contains;
const invokeQuery = _query;

function hypenatePropsObject(object) {
  const newObj = {};
  Object.keys(object).forEach(prop => {
    const newProp = prop.replace(/([a-z])([A-Z])/g, '$1-$2');
    newObj[newProp] = object[prop];
  });
  return newObj;
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @publicApi
 */


class NoopAnimationDriver {
  validateStyleProperty(prop) {
    return validateStyleProperty(prop);
  }

  matchesElement(_element, _selector) {
    // This method is deprecated and no longer in use so we return false.
    return false;
  }

  containsElement(elm1, elm2) {
    return containsElement(elm1, elm2);
  }

  getParentElement(element) {
    return getParentElement(element);
  }

  query(element, selector, multi) {
    return invokeQuery(element, selector, multi);
  }

  computeStyle(element, prop, defaultValue) {
    return defaultValue || '';
  }

  animate(element, keyframes, duration, delay, easing, previousPlayers = [], scrubberAccessRequested) {
    return new animations/* NoopAnimationPlayer */.ZN(duration, delay);
  }

}

NoopAnimationDriver.ɵfac = function NoopAnimationDriver_Factory(t) {
  return new (t || NoopAnimationDriver)();
};

NoopAnimationDriver.ɵprov = /* @__PURE__ */core["ɵɵdefineInjectable"]({
  token: NoopAnimationDriver,
  factory: NoopAnimationDriver.ɵfac
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && core["ɵsetClassMetadata"](NoopAnimationDriver, [{
    type: core.Injectable
  }], null, null);
})();
/**
 * @publicApi
 */


class AnimationDriver {}

AnimationDriver.NOOP = /* @__PURE__ */new NoopAnimationDriver();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

const ONE_SECOND = 1000;
const SUBSTITUTION_EXPR_START = '{{';
const SUBSTITUTION_EXPR_END = '}}';
const ENTER_CLASSNAME = 'ng-enter';
const LEAVE_CLASSNAME = 'ng-leave';
const NG_TRIGGER_CLASSNAME = 'ng-trigger';
const NG_TRIGGER_SELECTOR = '.ng-trigger';
const NG_ANIMATING_CLASSNAME = 'ng-animating';
const NG_ANIMATING_SELECTOR = '.ng-animating';

function resolveTimingValue(value) {
  if (typeof value == 'number') return value;
  const matches = value.match(/^(-?[\.\d]+)(m?s)/);
  if (!matches || matches.length < 2) return 0;
  return _convertTimeValueToMS(parseFloat(matches[1]), matches[2]);
}

function _convertTimeValueToMS(value, unit) {
  switch (unit) {
    case 's':
      return value * ONE_SECOND;

    default:
      // ms or something else
      return value;
  }
}

function resolveTiming(timings, errors, allowNegativeValues) {
  return timings.hasOwnProperty('duration') ? timings : parseTimeExpression(timings, errors, allowNegativeValues);
}

function parseTimeExpression(exp, errors, allowNegativeValues) {
  const regex = /^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i;
  let duration;
  let delay = 0;
  let easing = '';

  if (typeof exp === 'string') {
    const matches = exp.match(regex);

    if (matches === null) {
      errors.push(invalidTimingValue(exp));
      return {
        duration: 0,
        delay: 0,
        easing: ''
      };
    }

    duration = _convertTimeValueToMS(parseFloat(matches[1]), matches[2]);
    const delayMatch = matches[3];

    if (delayMatch != null) {
      delay = _convertTimeValueToMS(parseFloat(delayMatch), matches[4]);
    }

    const easingVal = matches[5];

    if (easingVal) {
      easing = easingVal;
    }
  } else {
    duration = exp;
  }

  if (!allowNegativeValues) {
    let containsErrors = false;
    let startIndex = errors.length;

    if (duration < 0) {
      errors.push(negativeStepValue());
      containsErrors = true;
    }

    if (delay < 0) {
      errors.push(negativeDelayValue());
      containsErrors = true;
    }

    if (containsErrors) {
      errors.splice(startIndex, 0, invalidTimingValue(exp));
    }
  }

  return {
    duration,
    delay,
    easing
  };
}

function copyObj(obj, destination = {}) {
  Object.keys(obj).forEach(prop => {
    destination[prop] = obj[prop];
  });
  return destination;
}

function normalizeStyles(styles) {
  const normalizedStyles = {};

  if (Array.isArray(styles)) {
    styles.forEach(data => copyStyles(data, false, normalizedStyles));
  } else {
    copyStyles(styles, false, normalizedStyles);
  }

  return normalizedStyles;
}

function copyStyles(styles, readPrototype, destination = {}) {
  if (readPrototype) {
    // we make use of a for-in loop so that the
    // prototypically inherited properties are
    // revealed from the backFill map
    for (let prop in styles) {
      destination[prop] = styles[prop];
    }
  } else {
    copyObj(styles, destination);
  }

  return destination;
}

function getStyleAttributeString(element, key, value) {
  // Return the key-value pair string to be added to the style attribute for the
  // given CSS style key.
  if (value) {
    return key + ':' + value + ';';
  } else {
    return '';
  }
}

function writeStyleAttribute(element) {
  // Read the style property of the element and manually reflect it to the
  // style attribute. This is needed because Domino on platform-server doesn't
  // understand the full set of allowed CSS properties and doesn't reflect some
  // of them automatically.
  let styleAttrValue = '';

  for (let i = 0; i < element.style.length; i++) {
    const key = element.style.item(i);
    styleAttrValue += getStyleAttributeString(element, key, element.style.getPropertyValue(key));
  }

  for (const key in element.style) {
    // Skip internal Domino properties that don't need to be reflected.
    if (!element.style.hasOwnProperty(key) || key.startsWith('_')) {
      continue;
    }

    const dashKey = camelCaseToDashCase(key);
    styleAttrValue += getStyleAttributeString(element, dashKey, element.style[key]);
  }

  element.setAttribute('style', styleAttrValue);
}

function setStyles(element, styles, formerStyles) {
  if (element['style']) {
    Object.keys(styles).forEach(prop => {
      const camelProp = dashCaseToCamelCase(prop);

      if (formerStyles && !formerStyles.hasOwnProperty(prop)) {
        formerStyles[prop] = element.style[camelProp];
      }

      element.style[camelProp] = styles[prop];
    }); // On the server set the 'style' attribute since it's not automatically reflected.

    if (isNode()) {
      writeStyleAttribute(element);
    }
  }
}

function eraseStyles(element, styles) {
  if (element['style']) {
    Object.keys(styles).forEach(prop => {
      const camelProp = dashCaseToCamelCase(prop);
      element.style[camelProp] = '';
    }); // On the server set the 'style' attribute since it's not automatically reflected.

    if (isNode()) {
      writeStyleAttribute(element);
    }
  }
}

function normalizeAnimationEntry(steps) {
  if (Array.isArray(steps)) {
    if (steps.length == 1) return steps[0];
    return (0,animations/* sequence */.vP)(steps);
  }

  return steps;
}

function validateStyleParams(value, options, errors) {
  const params = options.params || {};
  const matches = extractStyleParams(value);

  if (matches.length) {
    matches.forEach(varName => {
      if (!params.hasOwnProperty(varName)) {
        errors.push(invalidStyleParams(varName));
      }
    });
  }
}

const PARAM_REGEX = new RegExp(`${SUBSTITUTION_EXPR_START}\\s*(.+?)\\s*${SUBSTITUTION_EXPR_END}`, 'g');

function extractStyleParams(value) {
  let params = [];

  if (typeof value === 'string') {
    let match;

    while (match = PARAM_REGEX.exec(value)) {
      params.push(match[1]);
    }

    PARAM_REGEX.lastIndex = 0;
  }

  return params;
}

function interpolateParams(value, params, errors) {
  const original = value.toString();
  const str = original.replace(PARAM_REGEX, (_, varName) => {
    let localVal = params[varName]; // this means that the value was never overridden by the data passed in by the user

    if (!params.hasOwnProperty(varName)) {
      errors.push(invalidParamValue(varName));
      localVal = '';
    }

    return localVal.toString();
  }); // we do this to assert that numeric values stay as they are

  return str == original ? value : str;
}

function iteratorToArray(iterator) {
  const arr = [];
  let item = iterator.next();

  while (!item.done) {
    arr.push(item.value);
    item = iterator.next();
  }

  return arr;
}

const DASH_CASE_REGEXP = /-+([a-z0-9])/g;

function dashCaseToCamelCase(input) {
  return input.replace(DASH_CASE_REGEXP, (...m) => m[1].toUpperCase());
}

function camelCaseToDashCase(input) {
  return input.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

function allowPreviousPlayerStylesMerge(duration, delay) {
  return duration === 0 || delay === 0;
}

function balancePreviousStylesIntoKeyframes(element, keyframes, previousStyles) {
  const previousStyleProps = Object.keys(previousStyles);

  if (previousStyleProps.length && keyframes.length) {
    let startingKeyframe = keyframes[0];
    let missingStyleProps = [];
    previousStyleProps.forEach(prop => {
      if (!startingKeyframe.hasOwnProperty(prop)) {
        missingStyleProps.push(prop);
      }

      startingKeyframe[prop] = previousStyles[prop];
    });

    if (missingStyleProps.length) {
      // tslint:disable-next-line
      for (var i = 1; i < keyframes.length; i++) {
        let kf = keyframes[i];
        missingStyleProps.forEach(function (prop) {
          kf[prop] = computeStyle(element, prop);
        });
      }
    }
  }

  return keyframes;
}

function visitDslNode(visitor, node, context) {
  switch (node.type) {
    case 7
    /* Trigger */
    :
      return visitor.visitTrigger(node, context);

    case 0
    /* State */
    :
      return visitor.visitState(node, context);

    case 1
    /* Transition */
    :
      return visitor.visitTransition(node, context);

    case 2
    /* Sequence */
    :
      return visitor.visitSequence(node, context);

    case 3
    /* Group */
    :
      return visitor.visitGroup(node, context);

    case 4
    /* Animate */
    :
      return visitor.visitAnimate(node, context);

    case 5
    /* Keyframes */
    :
      return visitor.visitKeyframes(node, context);

    case 6
    /* Style */
    :
      return visitor.visitStyle(node, context);

    case 8
    /* Reference */
    :
      return visitor.visitReference(node, context);

    case 9
    /* AnimateChild */
    :
      return visitor.visitAnimateChild(node, context);

    case 10
    /* AnimateRef */
    :
      return visitor.visitAnimateRef(node, context);

    case 11
    /* Query */
    :
      return visitor.visitQuery(node, context);

    case 12
    /* Stagger */
    :
      return visitor.visitStagger(node, context);

    default:
      throw invalidNodeType(node.type);
  }
}

function computeStyle(element, prop) {
  return window.getComputedStyle(element)[prop];
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


const NG_DEV_MODE = typeof ngDevMode === 'undefined' || !!ngDevMode;

function createListOfWarnings(warnings) {
  const LINE_START = '\n - ';
  return `${LINE_START}${warnings.filter(Boolean).map(warning => warning).join(LINE_START)}`;
}

function warnValidation(warnings) {
  NG_DEV_MODE && console.warn(`animation validation warnings:${createListOfWarnings(warnings)}`);
}

function warnTriggerBuild(name, warnings) {
  NG_DEV_MODE && console.warn(`The animation trigger "${name}" has built with the following warnings:${createListOfWarnings(warnings)}`);
}

function warnRegister(warnings) {
  NG_DEV_MODE && console.warn(`Animation built with the following warnings:${createListOfWarnings(warnings)}`);
}

function triggerParsingWarnings(name, warnings) {
  NG_DEV_MODE && console.warn(`Animation parsing for the ${name} trigger presents the following warnings:${createListOfWarnings(warnings)}`);
}

function pushUnrecognizedPropertiesWarning(warnings, props) {
  if (ngDevMode && props.length) {
    warnings.push(`The provided CSS properties are not recognized properties supported for animations: ${props.join(', ')}`);
  }
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


const ANY_STATE = '*';

function parseTransitionExpr(transitionValue, errors) {
  const expressions = [];

  if (typeof transitionValue == 'string') {
    transitionValue.split(/\s*,\s*/).forEach(str => parseInnerTransitionStr(str, expressions, errors));
  } else {
    expressions.push(transitionValue);
  }

  return expressions;
}

function parseInnerTransitionStr(eventStr, expressions, errors) {
  if (eventStr[0] == ':') {
    const result = parseAnimationAlias(eventStr, errors);

    if (typeof result == 'function') {
      expressions.push(result);
      return;
    }

    eventStr = result;
  }

  const match = eventStr.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/);

  if (match == null || match.length < 4) {
    errors.push(invalidExpression(eventStr));
    return expressions;
  }

  const fromState = match[1];
  const separator = match[2];
  const toState = match[3];
  expressions.push(makeLambdaFromStates(fromState, toState));
  const isFullAnyStateExpr = fromState == ANY_STATE && toState == ANY_STATE;

  if (separator[0] == '<' && !isFullAnyStateExpr) {
    expressions.push(makeLambdaFromStates(toState, fromState));
  }
}

function parseAnimationAlias(alias, errors) {
  switch (alias) {
    case ':enter':
      return 'void => *';

    case ':leave':
      return '* => void';

    case ':increment':
      return (fromState, toState) => parseFloat(toState) > parseFloat(fromState);

    case ':decrement':
      return (fromState, toState) => parseFloat(toState) < parseFloat(fromState);

    default:
      errors.push(invalidTransitionAlias(alias));
      return '* => *';
  }
} // DO NOT REFACTOR ... keep the follow set instantiations
// with the values intact (closure compiler for some reason
// removes follow-up lines that add the values outside of
// the constructor...


const TRUE_BOOLEAN_VALUES = new Set(['true', '1']);
const FALSE_BOOLEAN_VALUES = new Set(['false', '0']);

function makeLambdaFromStates(lhs, rhs) {
  const LHS_MATCH_BOOLEAN = TRUE_BOOLEAN_VALUES.has(lhs) || FALSE_BOOLEAN_VALUES.has(lhs);
  const RHS_MATCH_BOOLEAN = TRUE_BOOLEAN_VALUES.has(rhs) || FALSE_BOOLEAN_VALUES.has(rhs);
  return (fromState, toState) => {
    let lhsMatch = lhs == ANY_STATE || lhs == fromState;
    let rhsMatch = rhs == ANY_STATE || rhs == toState;

    if (!lhsMatch && LHS_MATCH_BOOLEAN && typeof fromState === 'boolean') {
      lhsMatch = fromState ? TRUE_BOOLEAN_VALUES.has(lhs) : FALSE_BOOLEAN_VALUES.has(lhs);
    }

    if (!rhsMatch && RHS_MATCH_BOOLEAN && typeof toState === 'boolean') {
      rhsMatch = toState ? TRUE_BOOLEAN_VALUES.has(rhs) : FALSE_BOOLEAN_VALUES.has(rhs);
    }

    return lhsMatch && rhsMatch;
  };
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


const SELF_TOKEN = ':self';
const SELF_TOKEN_REGEX = new RegExp(`\s*${SELF_TOKEN}\s*,?`, 'g');
/*
 * [Validation]
 * The visitor code below will traverse the animation AST generated by the animation verb functions
 * (the output is a tree of objects) and attempt to perform a series of validations on the data. The
 * following corner-cases will be validated:
 *
 * 1. Overlap of animations
 * Given that a CSS property cannot be animated in more than one place at the same time, it's
 * important that this behavior is detected and validated. The way in which this occurs is that
 * each time a style property is examined, a string-map containing the property will be updated with
 * the start and end times for when the property is used within an animation step.
 *
 * If there are two or more parallel animations that are currently running (these are invoked by the
 * group()) on the same element then the validator will throw an error. Since the start/end timing
 * values are collected for each property then if the current animation step is animating the same
 * property and its timing values fall anywhere into the window of time that the property is
 * currently being animated within then this is what causes an error.
 *
 * 2. Timing values
 * The validator will validate to see if a timing value of `duration delay easing` or
 * `durationNumber` is valid or not.
 *
 * (note that upon validation the code below will replace the timing data with an object containing
 * {duration,delay,easing}.
 *
 * 3. Offset Validation
 * Each of the style() calls are allowed to have an offset value when placed inside of keyframes().
 * Offsets within keyframes() are considered valid when:
 *
 *   - No offsets are used at all
 *   - Each style() entry contains an offset value
 *   - Each offset is between 0 and 1
 *   - Each offset is greater to or equal than the previous one
 *
 * Otherwise an error will be thrown.
 */

function buildAnimationAst(driver, metadata, errors, warnings) {
  return new AnimationAstBuilderVisitor(driver).build(metadata, errors, warnings);
}

const ROOT_SELECTOR = '';

class AnimationAstBuilderVisitor {
  constructor(_driver) {
    this._driver = _driver;
  }

  build(metadata, errors, warnings) {
    const context = new AnimationAstBuilderContext(errors);

    this._resetContextStyleTimingState(context);

    const ast = visitDslNode(this, normalizeAnimationEntry(metadata), context);

    if (context.unsupportedCSSPropertiesFound.size) {
      pushUnrecognizedPropertiesWarning(warnings, [...context.unsupportedCSSPropertiesFound.keys()]);
    }

    return ast;
  }

  _resetContextStyleTimingState(context) {
    context.currentQuerySelector = ROOT_SELECTOR;
    context.collectedStyles = {};
    context.collectedStyles[ROOT_SELECTOR] = {};
    context.currentTime = 0;
  }

  visitTrigger(metadata, context) {
    let queryCount = context.queryCount = 0;
    let depCount = context.depCount = 0;
    const states = [];
    const transitions = [];

    if (metadata.name.charAt(0) == '@') {
      context.errors.push(invalidTrigger());
    }

    metadata.definitions.forEach(def => {
      this._resetContextStyleTimingState(context);

      if (def.type == 0
      /* State */
      ) {
        const stateDef = def;
        const name = stateDef.name;
        name.toString().split(/\s*,\s*/).forEach(n => {
          stateDef.name = n;
          states.push(this.visitState(stateDef, context));
        });
        stateDef.name = name;
      } else if (def.type == 1
      /* Transition */
      ) {
        const transition = this.visitTransition(def, context);
        queryCount += transition.queryCount;
        depCount += transition.depCount;
        transitions.push(transition);
      } else {
        context.errors.push(invalidDefinition());
      }
    });
    return {
      type: 7
      /* Trigger */
      ,
      name: metadata.name,
      states,
      transitions,
      queryCount,
      depCount,
      options: null
    };
  }

  visitState(metadata, context) {
    const styleAst = this.visitStyle(metadata.styles, context);
    const astParams = metadata.options && metadata.options.params || null;

    if (styleAst.containsDynamicStyles) {
      const missingSubs = new Set();
      const params = astParams || {};
      styleAst.styles.forEach(value => {
        if (isObject(value)) {
          const stylesObj = value;
          Object.keys(stylesObj).forEach(prop => {
            extractStyleParams(stylesObj[prop]).forEach(sub => {
              if (!params.hasOwnProperty(sub)) {
                missingSubs.add(sub);
              }
            });
          });
        }
      });

      if (missingSubs.size) {
        const missingSubsArr = iteratorToArray(missingSubs.values());
        context.errors.push(invalidState(metadata.name, missingSubsArr));
      }
    }

    return {
      type: 0
      /* State */
      ,
      name: metadata.name,
      style: styleAst,
      options: astParams ? {
        params: astParams
      } : null
    };
  }

  visitTransition(metadata, context) {
    context.queryCount = 0;
    context.depCount = 0;
    const animation = visitDslNode(this, normalizeAnimationEntry(metadata.animation), context);
    const matchers = parseTransitionExpr(metadata.expr, context.errors);
    return {
      type: 1
      /* Transition */
      ,
      matchers,
      animation,
      queryCount: context.queryCount,
      depCount: context.depCount,
      options: normalizeAnimationOptions(metadata.options)
    };
  }

  visitSequence(metadata, context) {
    return {
      type: 2
      /* Sequence */
      ,
      steps: metadata.steps.map(s => visitDslNode(this, s, context)),
      options: normalizeAnimationOptions(metadata.options)
    };
  }

  visitGroup(metadata, context) {
    const currentTime = context.currentTime;
    let furthestTime = 0;
    const steps = metadata.steps.map(step => {
      context.currentTime = currentTime;
      const innerAst = visitDslNode(this, step, context);
      furthestTime = Math.max(furthestTime, context.currentTime);
      return innerAst;
    });
    context.currentTime = furthestTime;
    return {
      type: 3
      /* Group */
      ,
      steps,
      options: normalizeAnimationOptions(metadata.options)
    };
  }

  visitAnimate(metadata, context) {
    const timingAst = constructTimingAst(metadata.timings, context.errors);
    context.currentAnimateTimings = timingAst;
    let styleAst;
    let styleMetadata = metadata.styles ? metadata.styles : (0,animations/* style */.oB)({});

    if (styleMetadata.type == 5
    /* Keyframes */
    ) {
      styleAst = this.visitKeyframes(styleMetadata, context);
    } else {
      let styleMetadata = metadata.styles;
      let isEmpty = false;

      if (!styleMetadata) {
        isEmpty = true;
        const newStyleData = {};

        if (timingAst.easing) {
          newStyleData['easing'] = timingAst.easing;
        }

        styleMetadata = (0,animations/* style */.oB)(newStyleData);
      }

      context.currentTime += timingAst.duration + timingAst.delay;

      const _styleAst = this.visitStyle(styleMetadata, context);

      _styleAst.isEmptyStep = isEmpty;
      styleAst = _styleAst;
    }

    context.currentAnimateTimings = null;
    return {
      type: 4
      /* Animate */
      ,
      timings: timingAst,
      style: styleAst,
      options: null
    };
  }

  visitStyle(metadata, context) {
    const ast = this._makeStyleAst(metadata, context);

    this._validateStyleAst(ast, context);

    return ast;
  }

  _makeStyleAst(metadata, context) {
    const styles = [];

    if (Array.isArray(metadata.styles)) {
      metadata.styles.forEach(styleTuple => {
        if (typeof styleTuple == 'string') {
          if (styleTuple == animations/* AUTO_STYLE */.l3) {
            styles.push(styleTuple);
          } else {
            context.errors.push(invalidStyleValue(styleTuple));
          }
        } else {
          styles.push(styleTuple);
        }
      });
    } else {
      styles.push(metadata.styles);
    }

    let containsDynamicStyles = false;
    let collectedEasing = null;
    styles.forEach(styleData => {
      if (isObject(styleData)) {
        const styleMap = styleData;
        const easing = styleMap['easing'];

        if (easing) {
          collectedEasing = easing;
          delete styleMap['easing'];
        }

        if (!containsDynamicStyles) {
          for (let prop in styleMap) {
            const value = styleMap[prop];

            if (value.toString().indexOf(SUBSTITUTION_EXPR_START) >= 0) {
              containsDynamicStyles = true;
              break;
            }
          }
        }
      }
    });
    return {
      type: 6
      /* Style */
      ,
      styles,
      easing: collectedEasing,
      offset: metadata.offset,
      containsDynamicStyles,
      options: null
    };
  }

  _validateStyleAst(ast, context) {
    const timings = context.currentAnimateTimings;
    let endTime = context.currentTime;
    let startTime = context.currentTime;

    if (timings && startTime > 0) {
      startTime -= timings.duration + timings.delay;
    }

    ast.styles.forEach(tuple => {
      if (typeof tuple == 'string') return;
      Object.keys(tuple).forEach(prop => {
        if (!this._driver.validateStyleProperty(prop)) {
          delete tuple[prop];
          context.unsupportedCSSPropertiesFound.add(prop);
          return;
        }

        const collectedStyles = context.collectedStyles[context.currentQuerySelector];
        const collectedEntry = collectedStyles[prop];
        let updateCollectedStyle = true;

        if (collectedEntry) {
          if (startTime != endTime && startTime >= collectedEntry.startTime && endTime <= collectedEntry.endTime) {
            context.errors.push(invalidParallelAnimation(prop, collectedEntry.startTime, collectedEntry.endTime, startTime, endTime));
            updateCollectedStyle = false;
          } // we always choose the smaller start time value since we
          // want to have a record of the entire animation window where
          // the style property is being animated in between


          startTime = collectedEntry.startTime;
        }

        if (updateCollectedStyle) {
          collectedStyles[prop] = {
            startTime,
            endTime
          };
        }

        if (context.options) {
          validateStyleParams(tuple[prop], context.options, context.errors);
        }
      });
    });
  }

  visitKeyframes(metadata, context) {
    const ast = {
      type: 5
      /* Keyframes */
      ,
      styles: [],
      options: null
    };

    if (!context.currentAnimateTimings) {
      context.errors.push(invalidKeyframes());
      return ast;
    }

    const MAX_KEYFRAME_OFFSET = 1;
    let totalKeyframesWithOffsets = 0;
    const offsets = [];
    let offsetsOutOfOrder = false;
    let keyframesOutOfRange = false;
    let previousOffset = 0;
    const keyframes = metadata.steps.map(styles => {
      const style = this._makeStyleAst(styles, context);

      let offsetVal = style.offset != null ? style.offset : consumeOffset(style.styles);
      let offset = 0;

      if (offsetVal != null) {
        totalKeyframesWithOffsets++;
        offset = style.offset = offsetVal;
      }

      keyframesOutOfRange = keyframesOutOfRange || offset < 0 || offset > 1;
      offsetsOutOfOrder = offsetsOutOfOrder || offset < previousOffset;
      previousOffset = offset;
      offsets.push(offset);
      return style;
    });

    if (keyframesOutOfRange) {
      context.errors.push(invalidOffset());
    }

    if (offsetsOutOfOrder) {
      context.errors.push(keyframeOffsetsOutOfOrder());
    }

    const length = metadata.steps.length;
    let generatedOffset = 0;

    if (totalKeyframesWithOffsets > 0 && totalKeyframesWithOffsets < length) {
      context.errors.push(keyframesMissingOffsets());
    } else if (totalKeyframesWithOffsets == 0) {
      generatedOffset = MAX_KEYFRAME_OFFSET / (length - 1);
    }

    const limit = length - 1;
    const currentTime = context.currentTime;
    const currentAnimateTimings = context.currentAnimateTimings;
    const animateDuration = currentAnimateTimings.duration;
    keyframes.forEach((kf, i) => {
      const offset = generatedOffset > 0 ? i == limit ? 1 : generatedOffset * i : offsets[i];
      const durationUpToThisFrame = offset * animateDuration;
      context.currentTime = currentTime + currentAnimateTimings.delay + durationUpToThisFrame;
      currentAnimateTimings.duration = durationUpToThisFrame;

      this._validateStyleAst(kf, context);

      kf.offset = offset;
      ast.styles.push(kf);
    });
    return ast;
  }

  visitReference(metadata, context) {
    return {
      type: 8
      /* Reference */
      ,
      animation: visitDslNode(this, normalizeAnimationEntry(metadata.animation), context),
      options: normalizeAnimationOptions(metadata.options)
    };
  }

  visitAnimateChild(metadata, context) {
    context.depCount++;
    return {
      type: 9
      /* AnimateChild */
      ,
      options: normalizeAnimationOptions(metadata.options)
    };
  }

  visitAnimateRef(metadata, context) {
    return {
      type: 10
      /* AnimateRef */
      ,
      animation: this.visitReference(metadata.animation, context),
      options: normalizeAnimationOptions(metadata.options)
    };
  }

  visitQuery(metadata, context) {
    const parentSelector = context.currentQuerySelector;
    const options = metadata.options || {};
    context.queryCount++;
    context.currentQuery = metadata;
    const [selector, includeSelf] = normalizeSelector(metadata.selector);
    context.currentQuerySelector = parentSelector.length ? parentSelector + ' ' + selector : selector;
    getOrSetAsInMap(context.collectedStyles, context.currentQuerySelector, {});
    const animation = visitDslNode(this, normalizeAnimationEntry(metadata.animation), context);
    context.currentQuery = null;
    context.currentQuerySelector = parentSelector;
    return {
      type: 11
      /* Query */
      ,
      selector,
      limit: options.limit || 0,
      optional: !!options.optional,
      includeSelf,
      animation,
      originalSelector: metadata.selector,
      options: normalizeAnimationOptions(metadata.options)
    };
  }

  visitStagger(metadata, context) {
    if (!context.currentQuery) {
      context.errors.push(invalidStagger());
    }

    const timings = metadata.timings === 'full' ? {
      duration: 0,
      delay: 0,
      easing: 'full'
    } : resolveTiming(metadata.timings, context.errors, true);
    return {
      type: 12
      /* Stagger */
      ,
      animation: visitDslNode(this, normalizeAnimationEntry(metadata.animation), context),
      timings,
      options: null
    };
  }

}

function normalizeSelector(selector) {
  const hasAmpersand = selector.split(/\s*,\s*/).find(token => token == SELF_TOKEN) ? true : false;

  if (hasAmpersand) {
    selector = selector.replace(SELF_TOKEN_REGEX, '');
  } // Note: the :enter and :leave aren't normalized here since those
  // selectors are filled in at runtime during timeline building


  selector = selector.replace(/@\*/g, NG_TRIGGER_SELECTOR).replace(/@\w+/g, match => NG_TRIGGER_SELECTOR + '-' + match.substr(1)).replace(/:animating/g, NG_ANIMATING_SELECTOR);
  return [selector, hasAmpersand];
}

function normalizeParams(obj) {
  return obj ? copyObj(obj) : null;
}

class AnimationAstBuilderContext {
  constructor(errors) {
    this.errors = errors;
    this.queryCount = 0;
    this.depCount = 0;
    this.currentTransition = null;
    this.currentQuery = null;
    this.currentQuerySelector = null;
    this.currentAnimateTimings = null;
    this.currentTime = 0;
    this.collectedStyles = {};
    this.options = null;
    this.unsupportedCSSPropertiesFound = new Set();
  }

}

function consumeOffset(styles) {
  if (typeof styles == 'string') return null;
  let offset = null;

  if (Array.isArray(styles)) {
    styles.forEach(styleTuple => {
      if (isObject(styleTuple) && styleTuple.hasOwnProperty('offset')) {
        const obj = styleTuple;
        offset = parseFloat(obj['offset']);
        delete obj['offset'];
      }
    });
  } else if (isObject(styles) && styles.hasOwnProperty('offset')) {
    const obj = styles;
    offset = parseFloat(obj['offset']);
    delete obj['offset'];
  }

  return offset;
}

function isObject(value) {
  return !Array.isArray(value) && typeof value == 'object';
}

function constructTimingAst(value, errors) {
  if (value.hasOwnProperty('duration')) {
    return value;
  }

  if (typeof value == 'number') {
    const duration = resolveTiming(value, errors).duration;
    return makeTimingAst(duration, 0, '');
  }

  const strValue = value;
  const isDynamic = strValue.split(/\s+/).some(v => v.charAt(0) == '{' && v.charAt(1) == '{');

  if (isDynamic) {
    const ast = makeTimingAst(0, 0, '');
    ast.dynamic = true;
    ast.strValue = strValue;
    return ast;
  }

  const timings = resolveTiming(strValue, errors);
  return makeTimingAst(timings.duration, timings.delay, timings.easing);
}

function normalizeAnimationOptions(options) {
  if (options) {
    options = copyObj(options);

    if (options['params']) {
      options['params'] = normalizeParams(options['params']);
    }
  } else {
    options = {};
  }

  return options;
}

function makeTimingAst(duration, delay, easing) {
  return {
    duration,
    delay,
    easing
  };
}

function createTimelineInstruction(element, keyframes, preStyleProps, postStyleProps, duration, delay, easing = null, subTimeline = false) {
  return {
    type: 1
    /* TimelineAnimation */
    ,
    element,
    keyframes,
    preStyleProps,
    postStyleProps,
    duration,
    delay,
    totalTime: duration + delay,
    easing,
    subTimeline
  };
}

class ElementInstructionMap {
  constructor() {
    this._map = new Map();
  }

  get(element) {
    return this._map.get(element) || [];
  }

  append(element, instructions) {
    let existingInstructions = this._map.get(element);

    if (!existingInstructions) {
      this._map.set(element, existingInstructions = []);
    }

    existingInstructions.push(...instructions);
  }

  has(element) {
    return this._map.has(element);
  }

  clear() {
    this._map.clear();
  }

}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


const ONE_FRAME_IN_MILLISECONDS = 1;
const ENTER_TOKEN = ':enter';
const ENTER_TOKEN_REGEX = new RegExp(ENTER_TOKEN, 'g');
const LEAVE_TOKEN = ':leave';
const LEAVE_TOKEN_REGEX = new RegExp(LEAVE_TOKEN, 'g');
/*
 * The code within this file aims to generate web-animations-compatible keyframes from Angular's
 * animation DSL code.
 *
 * The code below will be converted from:
 *
 * ```
 * sequence([
 *   style({ opacity: 0 }),
 *   animate(1000, style({ opacity: 0 }))
 * ])
 * ```
 *
 * To:
 * ```
 * keyframes = [{ opacity: 0, offset: 0 }, { opacity: 1, offset: 1 }]
 * duration = 1000
 * delay = 0
 * easing = ''
 * ```
 *
 * For this operation to cover the combination of animation verbs (style, animate, group, etc...) a
 * combination of prototypical inheritance, AST traversal and merge-sort-like algorithms are used.
 *
 * [AST Traversal]
 * Each of the animation verbs, when executed, will return an string-map object representing what
 * type of action it is (style, animate, group, etc...) and the data associated with it. This means
 * that when functional composition mix of these functions is evaluated (like in the example above)
 * then it will end up producing a tree of objects representing the animation itself.
 *
 * When this animation object tree is processed by the visitor code below it will visit each of the
 * verb statements within the visitor. And during each visit it will build the context of the
 * animation keyframes by interacting with the `TimelineBuilder`.
 *
 * [TimelineBuilder]
 * This class is responsible for tracking the styles and building a series of keyframe objects for a
 * timeline between a start and end time. The builder starts off with an initial timeline and each
 * time the AST comes across a `group()`, `keyframes()` or a combination of the two within a
 * `sequence()` then it will generate a sub timeline for each step as well as a new one after
 * they are complete.
 *
 * As the AST is traversed, the timing state on each of the timelines will be incremented. If a sub
 * timeline was created (based on one of the cases above) then the parent timeline will attempt to
 * merge the styles used within the sub timelines into itself (only with group() this will happen).
 * This happens with a merge operation (much like how the merge works in mergeSort) and it will only
 * copy the most recently used styles from the sub timelines into the parent timeline. This ensures
 * that if the styles are used later on in another phase of the animation then they will be the most
 * up-to-date values.
 *
 * [How Missing Styles Are Updated]
 * Each timeline has a `backFill` property which is responsible for filling in new styles into
 * already processed keyframes if a new style shows up later within the animation sequence.
 *
 * ```
 * sequence([
 *   style({ width: 0 }),
 *   animate(1000, style({ width: 100 })),
 *   animate(1000, style({ width: 200 })),
 *   animate(1000, style({ width: 300 }))
 *   animate(1000, style({ width: 400, height: 400 })) // notice how `height` doesn't exist anywhere
 * else
 * ])
 * ```
 *
 * What is happening here is that the `height` value is added later in the sequence, but is missing
 * from all previous animation steps. Therefore when a keyframe is created it would also be missing
 * from all previous keyframes up until where it is first used. For the timeline keyframe generation
 * to properly fill in the style it will place the previous value (the value from the parent
 * timeline) or a default value of `*` into the backFill object. Given that each of the keyframe
 * styles is an object that prototypically inherits from the backFill object, this means that if a
 * value is added into the backFill then it will automatically propagate any missing values to all
 * keyframes. Therefore the missing `height` value will be properly filled into the already
 * processed keyframes.
 *
 * When a sub-timeline is created it will have its own backFill property. This is done so that
 * styles present within the sub-timeline do not accidentally seep into the previous/future timeline
 * keyframes
 *
 * (For prototypically-inherited contents to be detected a `for(i in obj)` loop must be used.)
 *
 * [Validation]
 * The code in this file is not responsible for validation. That functionality happens with within
 * the `AnimationValidatorVisitor` code.
 */

function buildAnimationTimelines(driver, rootElement, ast, enterClassName, leaveClassName, startingStyles = {}, finalStyles = {}, options, subInstructions, errors = []) {
  return new AnimationTimelineBuilderVisitor().buildKeyframes(driver, rootElement, ast, enterClassName, leaveClassName, startingStyles, finalStyles, options, subInstructions, errors);
}

class AnimationTimelineBuilderVisitor {
  buildKeyframes(driver, rootElement, ast, enterClassName, leaveClassName, startingStyles, finalStyles, options, subInstructions, errors = []) {
    subInstructions = subInstructions || new ElementInstructionMap();
    const context = new AnimationTimelineContext(driver, rootElement, subInstructions, enterClassName, leaveClassName, errors, []);
    context.options = options;
    context.currentTimeline.setStyles([startingStyles], null, context.errors, options);
    visitDslNode(this, ast, context); // this checks to see if an actual animation happened

    const timelines = context.timelines.filter(timeline => timeline.containsAnimation());

    if (Object.keys(finalStyles).length) {
      // note: we just want to apply the final styles for the rootElement, so we do not
      //       just apply the styles to the last timeline but the last timeline which
      //       element is the root one (basically `*`-styles are replaced with the actual
      //       state style values only for the root element)
      let lastRootTimeline;

      for (let i = timelines.length - 1; i >= 0; i--) {
        const timeline = timelines[i];

        if (timeline.element === rootElement) {
          lastRootTimeline = timeline;
          break;
        }
      }

      if (lastRootTimeline && !lastRootTimeline.allowOnlyTimelineStyles()) {
        lastRootTimeline.setStyles([finalStyles], null, context.errors, options);
      }
    }

    return timelines.length ? timelines.map(timeline => timeline.buildKeyframes()) : [createTimelineInstruction(rootElement, [], [], [], 0, 0, '', false)];
  }

  visitTrigger(ast, context) {// these values are not visited in this AST
  }

  visitState(ast, context) {// these values are not visited in this AST
  }

  visitTransition(ast, context) {// these values are not visited in this AST
  }

  visitAnimateChild(ast, context) {
    const elementInstructions = context.subInstructions.get(context.element);

    if (elementInstructions) {
      const innerContext = context.createSubContext(ast.options);
      const startTime = context.currentTimeline.currentTime;

      const endTime = this._visitSubInstructions(elementInstructions, innerContext, innerContext.options);

      if (startTime != endTime) {
        // we do this on the upper context because we created a sub context for
        // the sub child animations
        context.transformIntoNewTimeline(endTime);
      }
    }

    context.previousNode = ast;
  }

  visitAnimateRef(ast, context) {
    const innerContext = context.createSubContext(ast.options);
    innerContext.transformIntoNewTimeline();
    this.visitReference(ast.animation, innerContext);
    context.transformIntoNewTimeline(innerContext.currentTimeline.currentTime);
    context.previousNode = ast;
  }

  _visitSubInstructions(instructions, context, options) {
    const startTime = context.currentTimeline.currentTime;
    let furthestTime = startTime; // this is a special-case for when a user wants to skip a sub
    // animation from being fired entirely.

    const duration = options.duration != null ? resolveTimingValue(options.duration) : null;
    const delay = options.delay != null ? resolveTimingValue(options.delay) : null;

    if (duration !== 0) {
      instructions.forEach(instruction => {
        const instructionTimings = context.appendInstructionToTimeline(instruction, duration, delay);
        furthestTime = Math.max(furthestTime, instructionTimings.duration + instructionTimings.delay);
      });
    }

    return furthestTime;
  }

  visitReference(ast, context) {
    context.updateOptions(ast.options, true);
    visitDslNode(this, ast.animation, context);
    context.previousNode = ast;
  }

  visitSequence(ast, context) {
    const subContextCount = context.subContextCount;
    let ctx = context;
    const options = ast.options;

    if (options && (options.params || options.delay)) {
      ctx = context.createSubContext(options);
      ctx.transformIntoNewTimeline();

      if (options.delay != null) {
        if (ctx.previousNode.type == 6
        /* Style */
        ) {
          ctx.currentTimeline.snapshotCurrentStyles();
          ctx.previousNode = DEFAULT_NOOP_PREVIOUS_NODE;
        }

        const delay = resolveTimingValue(options.delay);
        ctx.delayNextStep(delay);
      }
    }

    if (ast.steps.length) {
      ast.steps.forEach(s => visitDslNode(this, s, ctx)); // this is here just in case the inner steps only contain or end with a style() call

      ctx.currentTimeline.applyStylesToKeyframe(); // this means that some animation function within the sequence
      // ended up creating a sub timeline (which means the current
      // timeline cannot overlap with the contents of the sequence)

      if (ctx.subContextCount > subContextCount) {
        ctx.transformIntoNewTimeline();
      }
    }

    context.previousNode = ast;
  }

  visitGroup(ast, context) {
    const innerTimelines = [];
    let furthestTime = context.currentTimeline.currentTime;
    const delay = ast.options && ast.options.delay ? resolveTimingValue(ast.options.delay) : 0;
    ast.steps.forEach(s => {
      const innerContext = context.createSubContext(ast.options);

      if (delay) {
        innerContext.delayNextStep(delay);
      }

      visitDslNode(this, s, innerContext);
      furthestTime = Math.max(furthestTime, innerContext.currentTimeline.currentTime);
      innerTimelines.push(innerContext.currentTimeline);
    }); // this operation is run after the AST loop because otherwise
    // if the parent timeline's collected styles were updated then
    // it would pass in invalid data into the new-to-be forked items

    innerTimelines.forEach(timeline => context.currentTimeline.mergeTimelineCollectedStyles(timeline));
    context.transformIntoNewTimeline(furthestTime);
    context.previousNode = ast;
  }

  _visitTiming(ast, context) {
    if (ast.dynamic) {
      const strValue = ast.strValue;
      const timingValue = context.params ? interpolateParams(strValue, context.params, context.errors) : strValue;
      return resolveTiming(timingValue, context.errors);
    } else {
      return {
        duration: ast.duration,
        delay: ast.delay,
        easing: ast.easing
      };
    }
  }

  visitAnimate(ast, context) {
    const timings = context.currentAnimateTimings = this._visitTiming(ast.timings, context);

    const timeline = context.currentTimeline;

    if (timings.delay) {
      context.incrementTime(timings.delay);
      timeline.snapshotCurrentStyles();
    }

    const style = ast.style;

    if (style.type == 5
    /* Keyframes */
    ) {
      this.visitKeyframes(style, context);
    } else {
      context.incrementTime(timings.duration);
      this.visitStyle(style, context);
      timeline.applyStylesToKeyframe();
    }

    context.currentAnimateTimings = null;
    context.previousNode = ast;
  }

  visitStyle(ast, context) {
    const timeline = context.currentTimeline;
    const timings = context.currentAnimateTimings; // this is a special case for when a style() call
    // directly follows  an animate() call (but not inside of an animate() call)

    if (!timings && timeline.getCurrentStyleProperties().length) {
      timeline.forwardFrame();
    }

    const easing = timings && timings.easing || ast.easing;

    if (ast.isEmptyStep) {
      timeline.applyEmptyStep(easing);
    } else {
      timeline.setStyles(ast.styles, easing, context.errors, context.options);
    }

    context.previousNode = ast;
  }

  visitKeyframes(ast, context) {
    const currentAnimateTimings = context.currentAnimateTimings;
    const startTime = context.currentTimeline.duration;
    const duration = currentAnimateTimings.duration;
    const innerContext = context.createSubContext();
    const innerTimeline = innerContext.currentTimeline;
    innerTimeline.easing = currentAnimateTimings.easing;
    ast.styles.forEach(step => {
      const offset = step.offset || 0;
      innerTimeline.forwardTime(offset * duration);
      innerTimeline.setStyles(step.styles, step.easing, context.errors, context.options);
      innerTimeline.applyStylesToKeyframe();
    }); // this will ensure that the parent timeline gets all the styles from
    // the child even if the new timeline below is not used

    context.currentTimeline.mergeTimelineCollectedStyles(innerTimeline); // we do this because the window between this timeline and the sub timeline
    // should ensure that the styles within are exactly the same as they were before

    context.transformIntoNewTimeline(startTime + duration);
    context.previousNode = ast;
  }

  visitQuery(ast, context) {
    // in the event that the first step before this is a style step we need
    // to ensure the styles are applied before the children are animated
    const startTime = context.currentTimeline.currentTime;
    const options = ast.options || {};
    const delay = options.delay ? resolveTimingValue(options.delay) : 0;

    if (delay && (context.previousNode.type === 6
    /* Style */
    || startTime == 0 && context.currentTimeline.getCurrentStyleProperties().length)) {
      context.currentTimeline.snapshotCurrentStyles();
      context.previousNode = DEFAULT_NOOP_PREVIOUS_NODE;
    }

    let furthestTime = startTime;
    const elms = context.invokeQuery(ast.selector, ast.originalSelector, ast.limit, ast.includeSelf, options.optional ? true : false, context.errors);
    context.currentQueryTotal = elms.length;
    let sameElementTimeline = null;
    elms.forEach((element, i) => {
      context.currentQueryIndex = i;
      const innerContext = context.createSubContext(ast.options, element);

      if (delay) {
        innerContext.delayNextStep(delay);
      }

      if (element === context.element) {
        sameElementTimeline = innerContext.currentTimeline;
      }

      visitDslNode(this, ast.animation, innerContext); // this is here just incase the inner steps only contain or end
      // with a style() call (which is here to signal that this is a preparatory
      // call to style an element before it is animated again)

      innerContext.currentTimeline.applyStylesToKeyframe();
      const endTime = innerContext.currentTimeline.currentTime;
      furthestTime = Math.max(furthestTime, endTime);
    });
    context.currentQueryIndex = 0;
    context.currentQueryTotal = 0;
    context.transformIntoNewTimeline(furthestTime);

    if (sameElementTimeline) {
      context.currentTimeline.mergeTimelineCollectedStyles(sameElementTimeline);
      context.currentTimeline.snapshotCurrentStyles();
    }

    context.previousNode = ast;
  }

  visitStagger(ast, context) {
    const parentContext = context.parentContext;
    const tl = context.currentTimeline;
    const timings = ast.timings;
    const duration = Math.abs(timings.duration);
    const maxTime = duration * (context.currentQueryTotal - 1);
    let delay = duration * context.currentQueryIndex;
    let staggerTransformer = timings.duration < 0 ? 'reverse' : timings.easing;

    switch (staggerTransformer) {
      case 'reverse':
        delay = maxTime - delay;
        break;

      case 'full':
        delay = parentContext.currentStaggerTime;
        break;
    }

    const timeline = context.currentTimeline;

    if (delay) {
      timeline.delayNextStep(delay);
    }

    const startingTime = timeline.currentTime;
    visitDslNode(this, ast.animation, context);
    context.previousNode = ast; // time = duration + delay
    // the reason why this computation is so complex is because
    // the inner timeline may either have a delay value or a stretched
    // keyframe depending on if a subtimeline is not used or is used.

    parentContext.currentStaggerTime = tl.currentTime - startingTime + (tl.startTime - parentContext.currentTimeline.startTime);
  }

}

const DEFAULT_NOOP_PREVIOUS_NODE = {};

class AnimationTimelineContext {
  constructor(_driver, element, subInstructions, _enterClassName, _leaveClassName, errors, timelines, initialTimeline) {
    this._driver = _driver;
    this.element = element;
    this.subInstructions = subInstructions;
    this._enterClassName = _enterClassName;
    this._leaveClassName = _leaveClassName;
    this.errors = errors;
    this.timelines = timelines;
    this.parentContext = null;
    this.currentAnimateTimings = null;
    this.previousNode = DEFAULT_NOOP_PREVIOUS_NODE;
    this.subContextCount = 0;
    this.options = {};
    this.currentQueryIndex = 0;
    this.currentQueryTotal = 0;
    this.currentStaggerTime = 0;
    this.currentTimeline = initialTimeline || new TimelineBuilder(this._driver, element, 0);
    timelines.push(this.currentTimeline);
  }

  get params() {
    return this.options.params;
  }

  updateOptions(options, skipIfExists) {
    if (!options) return;
    const newOptions = options;
    let optionsToUpdate = this.options; // NOTE: this will get patched up when other animation methods support duration overrides

    if (newOptions.duration != null) {
      optionsToUpdate.duration = resolveTimingValue(newOptions.duration);
    }

    if (newOptions.delay != null) {
      optionsToUpdate.delay = resolveTimingValue(newOptions.delay);
    }

    const newParams = newOptions.params;

    if (newParams) {
      let paramsToUpdate = optionsToUpdate.params;

      if (!paramsToUpdate) {
        paramsToUpdate = this.options.params = {};
      }

      Object.keys(newParams).forEach(name => {
        if (!skipIfExists || !paramsToUpdate.hasOwnProperty(name)) {
          paramsToUpdate[name] = interpolateParams(newParams[name], paramsToUpdate, this.errors);
        }
      });
    }
  }

  _copyOptions() {
    const options = {};

    if (this.options) {
      const oldParams = this.options.params;

      if (oldParams) {
        const params = options['params'] = {};
        Object.keys(oldParams).forEach(name => {
          params[name] = oldParams[name];
        });
      }
    }

    return options;
  }

  createSubContext(options = null, element, newTime) {
    const target = element || this.element;
    const context = new AnimationTimelineContext(this._driver, target, this.subInstructions, this._enterClassName, this._leaveClassName, this.errors, this.timelines, this.currentTimeline.fork(target, newTime || 0));
    context.previousNode = this.previousNode;
    context.currentAnimateTimings = this.currentAnimateTimings;
    context.options = this._copyOptions();
    context.updateOptions(options);
    context.currentQueryIndex = this.currentQueryIndex;
    context.currentQueryTotal = this.currentQueryTotal;
    context.parentContext = this;
    this.subContextCount++;
    return context;
  }

  transformIntoNewTimeline(newTime) {
    this.previousNode = DEFAULT_NOOP_PREVIOUS_NODE;
    this.currentTimeline = this.currentTimeline.fork(this.element, newTime);
    this.timelines.push(this.currentTimeline);
    return this.currentTimeline;
  }

  appendInstructionToTimeline(instruction, duration, delay) {
    const updatedTimings = {
      duration: duration != null ? duration : instruction.duration,
      delay: this.currentTimeline.currentTime + (delay != null ? delay : 0) + instruction.delay,
      easing: ''
    };
    const builder = new SubTimelineBuilder(this._driver, instruction.element, instruction.keyframes, instruction.preStyleProps, instruction.postStyleProps, updatedTimings, instruction.stretchStartingKeyframe);
    this.timelines.push(builder);
    return updatedTimings;
  }

  incrementTime(time) {
    this.currentTimeline.forwardTime(this.currentTimeline.duration + time);
  }

  delayNextStep(delay) {
    // negative delays are not yet supported
    if (delay > 0) {
      this.currentTimeline.delayNextStep(delay);
    }
  }

  invokeQuery(selector, originalSelector, limit, includeSelf, optional, errors) {
    let results = [];

    if (includeSelf) {
      results.push(this.element);
    }

    if (selector.length > 0) {
      // only if :self is used then the selector can be empty
      selector = selector.replace(ENTER_TOKEN_REGEX, '.' + this._enterClassName);
      selector = selector.replace(LEAVE_TOKEN_REGEX, '.' + this._leaveClassName);
      const multi = limit != 1;

      let elements = this._driver.query(this.element, selector, multi);

      if (limit !== 0) {
        elements = limit < 0 ? elements.slice(elements.length + limit, elements.length) : elements.slice(0, limit);
      }

      results.push(...elements);
    }

    if (!optional && results.length == 0) {
      errors.push(invalidQuery(originalSelector));
    }

    return results;
  }

}

class TimelineBuilder {
  constructor(_driver, element, startTime, _elementTimelineStylesLookup) {
    this._driver = _driver;
    this.element = element;
    this.startTime = startTime;
    this._elementTimelineStylesLookup = _elementTimelineStylesLookup;
    this.duration = 0;
    this._previousKeyframe = {};
    this._currentKeyframe = {};
    this._keyframes = new Map();
    this._styleSummary = {};
    this._pendingStyles = {};
    this._backFill = {};
    this._currentEmptyStepKeyframe = null;

    if (!this._elementTimelineStylesLookup) {
      this._elementTimelineStylesLookup = new Map();
    }

    this._localTimelineStyles = Object.create(this._backFill, {});
    this._globalTimelineStyles = this._elementTimelineStylesLookup.get(element);

    if (!this._globalTimelineStyles) {
      this._globalTimelineStyles = this._localTimelineStyles;

      this._elementTimelineStylesLookup.set(element, this._localTimelineStyles);
    }

    this._loadKeyframe();
  }

  containsAnimation() {
    switch (this._keyframes.size) {
      case 0:
        return false;

      case 1:
        return this.getCurrentStyleProperties().length > 0;

      default:
        return true;
    }
  }

  getCurrentStyleProperties() {
    return Object.keys(this._currentKeyframe);
  }

  get currentTime() {
    return this.startTime + this.duration;
  }

  delayNextStep(delay) {
    // in the event that a style() step is placed right before a stagger()
    // and that style() step is the very first style() value in the animation
    // then we need to make a copy of the keyframe [0, copy, 1] so that the delay
    // properly applies the style() values to work with the stagger...
    const hasPreStyleStep = this._keyframes.size == 1 && Object.keys(this._pendingStyles).length;

    if (this.duration || hasPreStyleStep) {
      this.forwardTime(this.currentTime + delay);

      if (hasPreStyleStep) {
        this.snapshotCurrentStyles();
      }
    } else {
      this.startTime += delay;
    }
  }

  fork(element, currentTime) {
    this.applyStylesToKeyframe();
    return new TimelineBuilder(this._driver, element, currentTime || this.currentTime, this._elementTimelineStylesLookup);
  }

  _loadKeyframe() {
    if (this._currentKeyframe) {
      this._previousKeyframe = this._currentKeyframe;
    }

    this._currentKeyframe = this._keyframes.get(this.duration);

    if (!this._currentKeyframe) {
      this._currentKeyframe = Object.create(this._backFill, {});

      this._keyframes.set(this.duration, this._currentKeyframe);
    }
  }

  forwardFrame() {
    this.duration += ONE_FRAME_IN_MILLISECONDS;

    this._loadKeyframe();
  }

  forwardTime(time) {
    this.applyStylesToKeyframe();
    this.duration = time;

    this._loadKeyframe();
  }

  _updateStyle(prop, value) {
    this._localTimelineStyles[prop] = value;
    this._globalTimelineStyles[prop] = value;
    this._styleSummary[prop] = {
      time: this.currentTime,
      value
    };
  }

  allowOnlyTimelineStyles() {
    return this._currentEmptyStepKeyframe !== this._currentKeyframe;
  }

  applyEmptyStep(easing) {
    if (easing) {
      this._previousKeyframe['easing'] = easing;
    } // special case for animate(duration):
    // all missing styles are filled with a `*` value then
    // if any destination styles are filled in later on the same
    // keyframe then they will override the overridden styles
    // We use `_globalTimelineStyles` here because there may be
    // styles in previous keyframes that are not present in this timeline


    Object.keys(this._globalTimelineStyles).forEach(prop => {
      this._backFill[prop] = this._globalTimelineStyles[prop] || animations/* AUTO_STYLE */.l3;
      this._currentKeyframe[prop] = animations/* AUTO_STYLE */.l3;
    });
    this._currentEmptyStepKeyframe = this._currentKeyframe;
  }

  setStyles(input, easing, errors, options) {
    if (easing) {
      this._previousKeyframe['easing'] = easing;
    }

    const params = options && options.params || {};
    const styles = flattenStyles(input, this._globalTimelineStyles);
    Object.keys(styles).forEach(prop => {
      const val = interpolateParams(styles[prop], params, errors);
      this._pendingStyles[prop] = val;

      if (!this._localTimelineStyles.hasOwnProperty(prop)) {
        this._backFill[prop] = this._globalTimelineStyles.hasOwnProperty(prop) ? this._globalTimelineStyles[prop] : animations/* AUTO_STYLE */.l3;
      }

      this._updateStyle(prop, val);
    });
  }

  applyStylesToKeyframe() {
    const styles = this._pendingStyles;
    const props = Object.keys(styles);
    if (props.length == 0) return;
    this._pendingStyles = {};
    props.forEach(prop => {
      const val = styles[prop];
      this._currentKeyframe[prop] = val;
    });
    Object.keys(this._localTimelineStyles).forEach(prop => {
      if (!this._currentKeyframe.hasOwnProperty(prop)) {
        this._currentKeyframe[prop] = this._localTimelineStyles[prop];
      }
    });
  }

  snapshotCurrentStyles() {
    Object.keys(this._localTimelineStyles).forEach(prop => {
      const val = this._localTimelineStyles[prop];
      this._pendingStyles[prop] = val;

      this._updateStyle(prop, val);
    });
  }

  getFinalKeyframe() {
    return this._keyframes.get(this.duration);
  }

  get properties() {
    const properties = [];

    for (let prop in this._currentKeyframe) {
      properties.push(prop);
    }

    return properties;
  }

  mergeTimelineCollectedStyles(timeline) {
    Object.keys(timeline._styleSummary).forEach(prop => {
      const details0 = this._styleSummary[prop];
      const details1 = timeline._styleSummary[prop];

      if (!details0 || details1.time > details0.time) {
        this._updateStyle(prop, details1.value);
      }
    });
  }

  buildKeyframes() {
    this.applyStylesToKeyframe();
    const preStyleProps = new Set();
    const postStyleProps = new Set();
    const isEmpty = this._keyframes.size === 1 && this.duration === 0;
    let finalKeyframes = [];

    this._keyframes.forEach((keyframe, time) => {
      const finalKeyframe = copyStyles(keyframe, true);
      Object.keys(finalKeyframe).forEach(prop => {
        const value = finalKeyframe[prop];

        if (value == animations/* ɵPRE_STYLE */.k1) {
          preStyleProps.add(prop);
        } else if (value == animations/* AUTO_STYLE */.l3) {
          postStyleProps.add(prop);
        }
      });

      if (!isEmpty) {
        finalKeyframe['offset'] = time / this.duration;
      }

      finalKeyframes.push(finalKeyframe);
    });

    const preProps = preStyleProps.size ? iteratorToArray(preStyleProps.values()) : [];
    const postProps = postStyleProps.size ? iteratorToArray(postStyleProps.values()) : []; // special case for a 0-second animation (which is designed just to place styles onscreen)

    if (isEmpty) {
      const kf0 = finalKeyframes[0];
      const kf1 = copyObj(kf0);
      kf0['offset'] = 0;
      kf1['offset'] = 1;
      finalKeyframes = [kf0, kf1];
    }

    return createTimelineInstruction(this.element, finalKeyframes, preProps, postProps, this.duration, this.startTime, this.easing, false);
  }

}

class SubTimelineBuilder extends TimelineBuilder {
  constructor(driver, element, keyframes, preStyleProps, postStyleProps, timings, _stretchStartingKeyframe = false) {
    super(driver, element, timings.delay);
    this.keyframes = keyframes;
    this.preStyleProps = preStyleProps;
    this.postStyleProps = postStyleProps;
    this._stretchStartingKeyframe = _stretchStartingKeyframe;
    this.timings = {
      duration: timings.duration,
      delay: timings.delay,
      easing: timings.easing
    };
  }

  containsAnimation() {
    return this.keyframes.length > 1;
  }

  buildKeyframes() {
    let keyframes = this.keyframes;
    let {
      delay,
      duration,
      easing
    } = this.timings;

    if (this._stretchStartingKeyframe && delay) {
      const newKeyframes = [];
      const totalTime = duration + delay;
      const startingGap = delay / totalTime; // the original starting keyframe now starts once the delay is done

      const newFirstKeyframe = copyStyles(keyframes[0], false);
      newFirstKeyframe['offset'] = 0;
      newKeyframes.push(newFirstKeyframe);
      const oldFirstKeyframe = copyStyles(keyframes[0], false);
      oldFirstKeyframe['offset'] = roundOffset(startingGap);
      newKeyframes.push(oldFirstKeyframe);
      /*
        When the keyframe is stretched then it means that the delay before the animation
        starts is gone. Instead the first keyframe is placed at the start of the animation
        and it is then copied to where it starts when the original delay is over. This basically
        means nothing animates during that delay, but the styles are still rendered. For this
        to work the original offset values that exist in the original keyframes must be "warped"
        so that they can take the new keyframe + delay into account.
               delay=1000, duration=1000, keyframes = 0 .5 1
               turns into
               delay=0, duration=2000, keyframes = 0 .33 .66 1
       */
      // offsets between 1 ... n -1 are all warped by the keyframe stretch

      const limit = keyframes.length - 1;

      for (let i = 1; i <= limit; i++) {
        let kf = copyStyles(keyframes[i], false);
        const oldOffset = kf['offset'];
        const timeAtKeyframe = delay + oldOffset * duration;
        kf['offset'] = roundOffset(timeAtKeyframe / totalTime);
        newKeyframes.push(kf);
      } // the new starting keyframe should be added at the start


      duration = totalTime;
      delay = 0;
      easing = '';
      keyframes = newKeyframes;
    }

    return createTimelineInstruction(this.element, keyframes, this.preStyleProps, this.postStyleProps, duration, delay, easing, true);
  }

}

function roundOffset(offset, decimalPoints = 3) {
  const mult = Math.pow(10, decimalPoints - 1);
  return Math.round(offset * mult) / mult;
}

function flattenStyles(input, allStyles) {
  const styles = {};
  let allProperties;
  input.forEach(token => {
    if (token === '*') {
      allProperties = allProperties || Object.keys(allStyles);
      allProperties.forEach(prop => {
        styles[prop] = animations/* AUTO_STYLE */.l3;
      });
    } else {
      copyStyles(token, false, styles);
    }
  });
  return styles;
}

class Animation {
  constructor(_driver, input) {
    this._driver = _driver;
    const errors = [];
    const warnings = [];
    const ast = buildAnimationAst(_driver, input, errors, warnings);

    if (errors.length) {
      throw validationFailed(errors);
    }

    if (warnings.length) {
      warnValidation(warnings);
    }

    this._animationAst = ast;
  }

  buildTimelines(element, startingStyles, destinationStyles, options, subInstructions) {
    const start = Array.isArray(startingStyles) ? normalizeStyles(startingStyles) : startingStyles;
    const dest = Array.isArray(destinationStyles) ? normalizeStyles(destinationStyles) : destinationStyles;
    const errors = [];
    subInstructions = subInstructions || new ElementInstructionMap();
    const result = buildAnimationTimelines(this._driver, element, this._animationAst, ENTER_CLASSNAME, LEAVE_CLASSNAME, start, dest, options, subInstructions, errors);

    if (errors.length) {
      throw buildingFailed(errors);
    }

    return result;
  }

}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @publicApi
 */


class AnimationStyleNormalizer {}
/**
 * @publicApi
 */


class NoopAnimationStyleNormalizer {
  normalizePropertyName(propertyName, errors) {
    return propertyName;
  }

  normalizeStyleValue(userProvidedProperty, normalizedProperty, value, errors) {
    return value;
  }

}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


class WebAnimationsStyleNormalizer extends AnimationStyleNormalizer {
  normalizePropertyName(propertyName, errors) {
    return dashCaseToCamelCase(propertyName);
  }

  normalizeStyleValue(userProvidedProperty, normalizedProperty, value, errors) {
    let unit = '';
    const strVal = value.toString().trim();

    if (DIMENSIONAL_PROP_MAP[normalizedProperty] && value !== 0 && value !== '0') {
      if (typeof value === 'number') {
        unit = 'px';
      } else {
        const valAndSuffixMatch = value.match(/^[+-]?[\d\.]+([a-z]*)$/);

        if (valAndSuffixMatch && valAndSuffixMatch[1].length == 0) {
          errors.push(invalidCssUnitValue(userProvidedProperty, value));
        }
      }
    }

    return strVal + unit;
  }

}

const DIMENSIONAL_PROP_MAP = (() => makeBooleanMap('width,height,minWidth,minHeight,maxWidth,maxHeight,left,top,bottom,right,fontSize,outlineWidth,outlineOffset,paddingTop,paddingLeft,paddingBottom,paddingRight,marginTop,marginLeft,marginBottom,marginRight,borderRadius,borderWidth,borderTopWidth,borderLeftWidth,borderRightWidth,borderBottomWidth,textIndent,perspective'.split(',')))();

function makeBooleanMap(keys) {
  const map = {};
  keys.forEach(key => map[key] = true);
  return map;
}

function createTransitionInstruction(element, triggerName, fromState, toState, isRemovalTransition, fromStyles, toStyles, timelines, queriedElements, preStyleProps, postStyleProps, totalTime, errors) {
  return {
    type: 0
    /* TransitionAnimation */
    ,
    element,
    triggerName,
    isRemovalTransition,
    fromState,
    fromStyles,
    toState,
    toStyles,
    timelines,
    queriedElements,
    preStyleProps,
    postStyleProps,
    totalTime,
    errors
  };
}

const EMPTY_OBJECT = {};

class AnimationTransitionFactory {
  constructor(_triggerName, ast, _stateStyles) {
    this._triggerName = _triggerName;
    this.ast = ast;
    this._stateStyles = _stateStyles;
  }

  match(currentState, nextState, element, params) {
    return oneOrMoreTransitionsMatch(this.ast.matchers, currentState, nextState, element, params);
  }

  buildStyles(stateName, params, errors) {
    const backupStateStyler = this._stateStyles['*'];
    const stateStyler = this._stateStyles[stateName];
    const backupStyles = backupStateStyler ? backupStateStyler.buildStyles(params, errors) : {};
    return stateStyler ? stateStyler.buildStyles(params, errors) : backupStyles;
  }

  build(driver, element, currentState, nextState, enterClassName, leaveClassName, currentOptions, nextOptions, subInstructions, skipAstBuild) {
    const errors = [];
    const transitionAnimationParams = this.ast.options && this.ast.options.params || EMPTY_OBJECT;
    const currentAnimationParams = currentOptions && currentOptions.params || EMPTY_OBJECT;
    const currentStateStyles = this.buildStyles(currentState, currentAnimationParams, errors);
    const nextAnimationParams = nextOptions && nextOptions.params || EMPTY_OBJECT;
    const nextStateStyles = this.buildStyles(nextState, nextAnimationParams, errors);
    const queriedElements = new Set();
    const preStyleMap = new Map();
    const postStyleMap = new Map();
    const isRemoval = nextState === 'void';
    const animationOptions = {
      params: { ...transitionAnimationParams,
        ...nextAnimationParams
      }
    };
    const timelines = skipAstBuild ? [] : buildAnimationTimelines(driver, element, this.ast.animation, enterClassName, leaveClassName, currentStateStyles, nextStateStyles, animationOptions, subInstructions, errors);
    let totalTime = 0;
    timelines.forEach(tl => {
      totalTime = Math.max(tl.duration + tl.delay, totalTime);
    });

    if (errors.length) {
      return createTransitionInstruction(element, this._triggerName, currentState, nextState, isRemoval, currentStateStyles, nextStateStyles, [], [], preStyleMap, postStyleMap, totalTime, errors);
    }

    timelines.forEach(tl => {
      const elm = tl.element;
      const preProps = getOrSetAsInMap(preStyleMap, elm, {});
      tl.preStyleProps.forEach(prop => preProps[prop] = true);
      const postProps = getOrSetAsInMap(postStyleMap, elm, {});
      tl.postStyleProps.forEach(prop => postProps[prop] = true);

      if (elm !== element) {
        queriedElements.add(elm);
      }
    });
    const queriedElementsList = iteratorToArray(queriedElements.values());
    return createTransitionInstruction(element, this._triggerName, currentState, nextState, isRemoval, currentStateStyles, nextStateStyles, timelines, queriedElementsList, preStyleMap, postStyleMap, totalTime);
  }

}

function oneOrMoreTransitionsMatch(matchFns, currentState, nextState, element, params) {
  return matchFns.some(fn => fn(currentState, nextState, element, params));
}

class AnimationStateStyles {
  constructor(styles, defaultParams, normalizer) {
    this.styles = styles;
    this.defaultParams = defaultParams;
    this.normalizer = normalizer;
  }

  buildStyles(params, errors) {
    const finalStyles = {};
    const combinedParams = copyObj(this.defaultParams);
    Object.keys(params).forEach(key => {
      const value = params[key];

      if (value != null) {
        combinedParams[key] = value;
      }
    });
    this.styles.styles.forEach(value => {
      if (typeof value !== 'string') {
        const styleObj = value;
        Object.keys(styleObj).forEach(prop => {
          let val = styleObj[prop];

          if (val.length > 1) {
            val = interpolateParams(val, combinedParams, errors);
          }

          const normalizedProp = this.normalizer.normalizePropertyName(prop, errors);
          val = this.normalizer.normalizeStyleValue(prop, normalizedProp, val, errors);
          finalStyles[normalizedProp] = val;
        });
      }
    });
    return finalStyles;
  }

}

function buildTrigger(name, ast, normalizer) {
  return new AnimationTrigger(name, ast, normalizer);
}

class AnimationTrigger {
  constructor(name, ast, _normalizer) {
    this.name = name;
    this.ast = ast;
    this._normalizer = _normalizer;
    this.transitionFactories = [];
    this.states = {};
    ast.states.forEach(ast => {
      const defaultParams = ast.options && ast.options.params || {};
      this.states[ast.name] = new AnimationStateStyles(ast.style, defaultParams, _normalizer);
    });
    balanceProperties(this.states, 'true', '1');
    balanceProperties(this.states, 'false', '0');
    ast.transitions.forEach(ast => {
      this.transitionFactories.push(new AnimationTransitionFactory(name, ast, this.states));
    });
    this.fallbackTransition = createFallbackTransition(name, this.states, this._normalizer);
  }

  get containsQueries() {
    return this.ast.queryCount > 0;
  }

  matchTransition(currentState, nextState, element, params) {
    const entry = this.transitionFactories.find(f => f.match(currentState, nextState, element, params));
    return entry || null;
  }

  matchStyles(currentState, params, errors) {
    return this.fallbackTransition.buildStyles(currentState, params, errors);
  }

}

function createFallbackTransition(triggerName, states, normalizer) {
  const matchers = [(fromState, toState) => true];
  const animation = {
    type: 2
    /* Sequence */
    ,
    steps: [],
    options: null
  };
  const transition = {
    type: 1
    /* Transition */
    ,
    animation,
    matchers,
    options: null,
    queryCount: 0,
    depCount: 0
  };
  return new AnimationTransitionFactory(triggerName, transition, states);
}

function balanceProperties(obj, key1, key2) {
  if (obj.hasOwnProperty(key1)) {
    if (!obj.hasOwnProperty(key2)) {
      obj[key2] = obj[key1];
    }
  } else if (obj.hasOwnProperty(key2)) {
    obj[key1] = obj[key2];
  }
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


const EMPTY_INSTRUCTION_MAP = new ElementInstructionMap();

class TimelineAnimationEngine {
  constructor(bodyNode, _driver, _normalizer) {
    this.bodyNode = bodyNode;
    this._driver = _driver;
    this._normalizer = _normalizer;
    this._animations = {};
    this._playersById = {};
    this.players = [];
  }

  register(id, metadata) {
    const errors = [];
    const warnings = [];
    const ast = buildAnimationAst(this._driver, metadata, errors, warnings);

    if (errors.length) {
      throw registerFailed(errors);
    } else {
      if (warnings.length) {
        warnRegister(warnings);
      }

      this._animations[id] = ast;
    }
  }

  _buildPlayer(i, preStyles, postStyles) {
    const element = i.element;
    const keyframes = normalizeKeyframes(this._driver, this._normalizer, element, i.keyframes, preStyles, postStyles);
    return this._driver.animate(element, keyframes, i.duration, i.delay, i.easing, [], true);
  }

  create(id, element, options = {}) {
    const errors = [];
    const ast = this._animations[id];
    let instructions;
    const autoStylesMap = new Map();

    if (ast) {
      instructions = buildAnimationTimelines(this._driver, element, ast, ENTER_CLASSNAME, LEAVE_CLASSNAME, {}, {}, options, EMPTY_INSTRUCTION_MAP, errors);
      instructions.forEach(inst => {
        const styles = getOrSetAsInMap(autoStylesMap, inst.element, {});
        inst.postStyleProps.forEach(prop => styles[prop] = null);
      });
    } else {
      errors.push(missingOrDestroyedAnimation());
      instructions = [];
    }

    if (errors.length) {
      throw createAnimationFailed(errors);
    }

    autoStylesMap.forEach((styles, element) => {
      Object.keys(styles).forEach(prop => {
        styles[prop] = this._driver.computeStyle(element, prop, animations/* AUTO_STYLE */.l3);
      });
    });
    const players = instructions.map(i => {
      const styles = autoStylesMap.get(i.element);
      return this._buildPlayer(i, {}, styles);
    });
    const player = optimizeGroupPlayer(players);
    this._playersById[id] = player;
    player.onDestroy(() => this.destroy(id));
    this.players.push(player);
    return player;
  }

  destroy(id) {
    const player = this._getPlayer(id);

    player.destroy();
    delete this._playersById[id];
    const index = this.players.indexOf(player);

    if (index >= 0) {
      this.players.splice(index, 1);
    }
  }

  _getPlayer(id) {
    const player = this._playersById[id];

    if (!player) {
      throw missingPlayer(id);
    }

    return player;
  }

  listen(id, element, eventName, callback) {
    // triggerName, fromState, toState are all ignored for timeline animations
    const baseEvent = makeAnimationEvent(element, '', '', '');
    listenOnPlayer(this._getPlayer(id), eventName, baseEvent, callback);
    return () => {};
  }

  command(id, element, command, args) {
    if (command == 'register') {
      this.register(id, args[0]);
      return;
    }

    if (command == 'create') {
      const options = args[0] || {};
      this.create(id, element, options);
      return;
    }

    const player = this._getPlayer(id);

    switch (command) {
      case 'play':
        player.play();
        break;

      case 'pause':
        player.pause();
        break;

      case 'reset':
        player.reset();
        break;

      case 'restart':
        player.restart();
        break;

      case 'finish':
        player.finish();
        break;

      case 'init':
        player.init();
        break;

      case 'setPosition':
        player.setPosition(parseFloat(args[0]));
        break;

      case 'destroy':
        this.destroy(id);
        break;
    }
  }

}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


const QUEUED_CLASSNAME = 'ng-animate-queued';
const QUEUED_SELECTOR = '.ng-animate-queued';
const DISABLED_CLASSNAME = 'ng-animate-disabled';
const DISABLED_SELECTOR = '.ng-animate-disabled';
const STAR_CLASSNAME = 'ng-star-inserted';
const STAR_SELECTOR = '.ng-star-inserted';
const EMPTY_PLAYER_ARRAY = [];
const NULL_REMOVAL_STATE = {
  namespaceId: '',
  setForRemoval: false,
  setForMove: false,
  hasAnimation: false,
  removedBeforeQueried: false
};
const NULL_REMOVED_QUERIED_STATE = {
  namespaceId: '',
  setForMove: false,
  setForRemoval: false,
  hasAnimation: false,
  removedBeforeQueried: true
};
const REMOVAL_FLAG = '__ng_removed';

class StateValue {
  constructor(input, namespaceId = '') {
    this.namespaceId = namespaceId;
    const isObj = input && input.hasOwnProperty('value');
    const value = isObj ? input['value'] : input;
    this.value = normalizeTriggerValue(value);

    if (isObj) {
      const options = copyObj(input);
      delete options['value'];
      this.options = options;
    } else {
      this.options = {};
    }

    if (!this.options.params) {
      this.options.params = {};
    }
  }

  get params() {
    return this.options.params;
  }

  absorbOptions(options) {
    const newParams = options.params;

    if (newParams) {
      const oldParams = this.options.params;
      Object.keys(newParams).forEach(prop => {
        if (oldParams[prop] == null) {
          oldParams[prop] = newParams[prop];
        }
      });
    }
  }

}

const VOID_VALUE = 'void';
const DEFAULT_STATE_VALUE = new StateValue(VOID_VALUE);

class AnimationTransitionNamespace {
  constructor(id, hostElement, _engine) {
    this.id = id;
    this.hostElement = hostElement;
    this._engine = _engine;
    this.players = [];
    this._triggers = {};
    this._queue = [];
    this._elementListeners = new Map();
    this._hostClassName = 'ng-tns-' + id;
    addClass(hostElement, this._hostClassName);
  }

  listen(element, name, phase, callback) {
    if (!this._triggers.hasOwnProperty(name)) {
      throw missingTrigger(phase, name);
    }

    if (phase == null || phase.length == 0) {
      throw missingEvent(name);
    }

    if (!isTriggerEventValid(phase)) {
      throw unsupportedTriggerEvent(phase, name);
    }

    const listeners = getOrSetAsInMap(this._elementListeners, element, []);
    const data = {
      name,
      phase,
      callback
    };
    listeners.push(data);
    const triggersWithStates = getOrSetAsInMap(this._engine.statesByElement, element, {});

    if (!triggersWithStates.hasOwnProperty(name)) {
      addClass(element, NG_TRIGGER_CLASSNAME);
      addClass(element, NG_TRIGGER_CLASSNAME + '-' + name);
      triggersWithStates[name] = DEFAULT_STATE_VALUE;
    }

    return () => {
      // the event listener is removed AFTER the flush has occurred such
      // that leave animations callbacks can fire (otherwise if the node
      // is removed in between then the listeners would be deregistered)
      this._engine.afterFlush(() => {
        const index = listeners.indexOf(data);

        if (index >= 0) {
          listeners.splice(index, 1);
        }

        if (!this._triggers[name]) {
          delete triggersWithStates[name];
        }
      });
    };
  }

  register(name, ast) {
    if (this._triggers[name]) {
      // throw
      return false;
    } else {
      this._triggers[name] = ast;
      return true;
    }
  }

  _getTrigger(name) {
    const trigger = this._triggers[name];

    if (!trigger) {
      throw unregisteredTrigger(name);
    }

    return trigger;
  }

  trigger(element, triggerName, value, defaultToFallback = true) {
    const trigger = this._getTrigger(triggerName);

    const player = new TransitionAnimationPlayer(this.id, triggerName, element);

    let triggersWithStates = this._engine.statesByElement.get(element);

    if (!triggersWithStates) {
      addClass(element, NG_TRIGGER_CLASSNAME);
      addClass(element, NG_TRIGGER_CLASSNAME + '-' + triggerName);

      this._engine.statesByElement.set(element, triggersWithStates = {});
    }

    let fromState = triggersWithStates[triggerName];
    const toState = new StateValue(value, this.id);
    const isObj = value && value.hasOwnProperty('value');

    if (!isObj && fromState) {
      toState.absorbOptions(fromState.options);
    }

    triggersWithStates[triggerName] = toState;

    if (!fromState) {
      fromState = DEFAULT_STATE_VALUE;
    }

    const isRemoval = toState.value === VOID_VALUE; // normally this isn't reached by here, however, if an object expression
    // is passed in then it may be a new object each time. Comparing the value
    // is important since that will stay the same despite there being a new object.
    // The removal arc here is special cased because the same element is triggered
    // twice in the event that it contains animations on the outer/inner portions
    // of the host container

    if (!isRemoval && fromState.value === toState.value) {
      // this means that despite the value not changing, some inner params
      // have changed which means that the animation final styles need to be applied
      if (!objEquals(fromState.params, toState.params)) {
        const errors = [];
        const fromStyles = trigger.matchStyles(fromState.value, fromState.params, errors);
        const toStyles = trigger.matchStyles(toState.value, toState.params, errors);

        if (errors.length) {
          this._engine.reportError(errors);
        } else {
          this._engine.afterFlush(() => {
            eraseStyles(element, fromStyles);
            setStyles(element, toStyles);
          });
        }
      }

      return;
    }

    const playersOnElement = getOrSetAsInMap(this._engine.playersByElement, element, []);
    playersOnElement.forEach(player => {
      // only remove the player if it is queued on the EXACT same trigger/namespace
      // we only also deal with queued players here because if the animation has
      // started then we want to keep the player alive until the flush happens
      // (which is where the previousPlayers are passed into the new player)
      if (player.namespaceId == this.id && player.triggerName == triggerName && player.queued) {
        player.destroy();
      }
    });
    let transition = trigger.matchTransition(fromState.value, toState.value, element, toState.params);
    let isFallbackTransition = false;

    if (!transition) {
      if (!defaultToFallback) return;
      transition = trigger.fallbackTransition;
      isFallbackTransition = true;
    }

    this._engine.totalQueuedPlayers++;

    this._queue.push({
      element,
      triggerName,
      transition,
      fromState,
      toState,
      player,
      isFallbackTransition
    });

    if (!isFallbackTransition) {
      addClass(element, QUEUED_CLASSNAME);
      player.onStart(() => {
        removeClass(element, QUEUED_CLASSNAME);
      });
    }

    player.onDone(() => {
      let index = this.players.indexOf(player);

      if (index >= 0) {
        this.players.splice(index, 1);
      }

      const players = this._engine.playersByElement.get(element);

      if (players) {
        let index = players.indexOf(player);

        if (index >= 0) {
          players.splice(index, 1);
        }
      }
    });
    this.players.push(player);
    playersOnElement.push(player);
    return player;
  }

  deregister(name) {
    delete this._triggers[name];

    this._engine.statesByElement.forEach((stateMap, element) => {
      delete stateMap[name];
    });

    this._elementListeners.forEach((listeners, element) => {
      this._elementListeners.set(element, listeners.filter(entry => {
        return entry.name != name;
      }));
    });
  }

  clearElementCache(element) {
    this._engine.statesByElement.delete(element);

    this._elementListeners.delete(element);

    const elementPlayers = this._engine.playersByElement.get(element);

    if (elementPlayers) {
      elementPlayers.forEach(player => player.destroy());

      this._engine.playersByElement.delete(element);
    }
  }

  _signalRemovalForInnerTriggers(rootElement, context) {
    const elements = this._engine.driver.query(rootElement, NG_TRIGGER_SELECTOR, true); // emulate a leave animation for all inner nodes within this node.
    // If there are no animations found for any of the nodes then clear the cache
    // for the element.


    elements.forEach(elm => {
      // this means that an inner remove() operation has already kicked off
      // the animation on this element...
      if (elm[REMOVAL_FLAG]) return;

      const namespaces = this._engine.fetchNamespacesByElement(elm);

      if (namespaces.size) {
        namespaces.forEach(ns => ns.triggerLeaveAnimation(elm, context, false, true));
      } else {
        this.clearElementCache(elm);
      }
    }); // If the child elements were removed along with the parent, their animations might not
    // have completed. Clear all the elements from the cache so we don't end up with a memory leak.

    this._engine.afterFlushAnimationsDone(() => elements.forEach(elm => this.clearElementCache(elm)));
  }

  triggerLeaveAnimation(element, context, destroyAfterComplete, defaultToFallback) {
    const triggerStates = this._engine.statesByElement.get(element);

    const previousTriggersValues = new Map();

    if (triggerStates) {
      const players = [];
      Object.keys(triggerStates).forEach(triggerName => {
        previousTriggersValues.set(triggerName, triggerStates[triggerName].value); // this check is here in the event that an element is removed
        // twice (both on the host level and the component level)

        if (this._triggers[triggerName]) {
          const player = this.trigger(element, triggerName, VOID_VALUE, defaultToFallback);

          if (player) {
            players.push(player);
          }
        }
      });

      if (players.length) {
        this._engine.markElementAsRemoved(this.id, element, true, context, previousTriggersValues);

        if (destroyAfterComplete) {
          optimizeGroupPlayer(players).onDone(() => this._engine.processLeaveNode(element));
        }

        return true;
      }
    }

    return false;
  }

  prepareLeaveAnimationListeners(element) {
    const listeners = this._elementListeners.get(element);

    const elementStates = this._engine.statesByElement.get(element); // if this statement fails then it means that the element was picked up
    // by an earlier flush (or there are no listeners at all to track the leave).


    if (listeners && elementStates) {
      const visitedTriggers = new Set();
      listeners.forEach(listener => {
        const triggerName = listener.name;
        if (visitedTriggers.has(triggerName)) return;
        visitedTriggers.add(triggerName);
        const trigger = this._triggers[triggerName];
        const transition = trigger.fallbackTransition;
        const fromState = elementStates[triggerName] || DEFAULT_STATE_VALUE;
        const toState = new StateValue(VOID_VALUE);
        const player = new TransitionAnimationPlayer(this.id, triggerName, element);
        this._engine.totalQueuedPlayers++;

        this._queue.push({
          element,
          triggerName,
          transition,
          fromState,
          toState,
          player,
          isFallbackTransition: true
        });
      });
    }
  }

  removeNode(element, context) {
    const engine = this._engine;

    if (element.childElementCount) {
      this._signalRemovalForInnerTriggers(element, context);
    } // this means that a * => VOID animation was detected and kicked off


    if (this.triggerLeaveAnimation(element, context, true)) return; // find the player that is animating and make sure that the
    // removal is delayed until that player has completed

    let containsPotentialParentTransition = false;

    if (engine.totalAnimations) {
      const currentPlayers = engine.players.length ? engine.playersByQueriedElement.get(element) : []; // when this `if statement` does not continue forward it means that
      // a previous animation query has selected the current element and
      // is animating it. In this situation want to continue forwards and
      // allow the element to be queued up for animation later.

      if (currentPlayers && currentPlayers.length) {
        containsPotentialParentTransition = true;
      } else {
        let parent = element;

        while (parent = parent.parentNode) {
          const triggers = engine.statesByElement.get(parent);

          if (triggers) {
            containsPotentialParentTransition = true;
            break;
          }
        }
      }
    } // at this stage we know that the element will either get removed
    // during flush or will be picked up by a parent query. Either way
    // we need to fire the listeners for this element when it DOES get
    // removed (once the query parent animation is done or after flush)


    this.prepareLeaveAnimationListeners(element); // whether or not a parent has an animation we need to delay the deferral of the leave
    // operation until we have more information (which we do after flush() has been called)

    if (containsPotentialParentTransition) {
      engine.markElementAsRemoved(this.id, element, false, context);
    } else {
      const removalFlag = element[REMOVAL_FLAG];

      if (!removalFlag || removalFlag === NULL_REMOVAL_STATE) {
        // we do this after the flush has occurred such
        // that the callbacks can be fired
        engine.afterFlush(() => this.clearElementCache(element));
        engine.destroyInnerAnimations(element);

        engine._onRemovalComplete(element, context);
      }
    }
  }

  insertNode(element, parent) {
    addClass(element, this._hostClassName);
  }

  drainQueuedTransitions(microtaskId) {
    const instructions = [];

    this._queue.forEach(entry => {
      const player = entry.player;
      if (player.destroyed) return;
      const element = entry.element;

      const listeners = this._elementListeners.get(element);

      if (listeners) {
        listeners.forEach(listener => {
          if (listener.name == entry.triggerName) {
            const baseEvent = makeAnimationEvent(element, entry.triggerName, entry.fromState.value, entry.toState.value);
            baseEvent['_data'] = microtaskId;
            listenOnPlayer(entry.player, listener.phase, baseEvent, listener.callback);
          }
        });
      }

      if (player.markedForDestroy) {
        this._engine.afterFlush(() => {
          // now we can destroy the element properly since the event listeners have
          // been bound to the player
          player.destroy();
        });
      } else {
        instructions.push(entry);
      }
    });

    this._queue = [];
    return instructions.sort((a, b) => {
      // if depCount == 0 them move to front
      // otherwise if a contains b then move back
      const d0 = a.transition.ast.depCount;
      const d1 = b.transition.ast.depCount;

      if (d0 == 0 || d1 == 0) {
        return d0 - d1;
      }

      return this._engine.driver.containsElement(a.element, b.element) ? 1 : -1;
    });
  }

  destroy(context) {
    this.players.forEach(p => p.destroy());

    this._signalRemovalForInnerTriggers(this.hostElement, context);
  }

  elementContainsData(element) {
    let containsData = false;
    if (this._elementListeners.has(element)) containsData = true;
    containsData = (this._queue.find(entry => entry.element === element) ? true : false) || containsData;
    return containsData;
  }

}

class TransitionAnimationEngine {
  constructor(bodyNode, driver, _normalizer) {
    this.bodyNode = bodyNode;
    this.driver = driver;
    this._normalizer = _normalizer;
    this.players = [];
    this.newHostElements = new Map();
    this.playersByElement = new Map();
    this.playersByQueriedElement = new Map();
    this.statesByElement = new Map();
    this.disabledNodes = new Set();
    this.totalAnimations = 0;
    this.totalQueuedPlayers = 0;
    this._namespaceLookup = {};
    this._namespaceList = [];
    this._flushFns = [];
    this._whenQuietFns = [];
    this.namespacesByHostElement = new Map();
    this.collectedEnterElements = [];
    this.collectedLeaveElements = []; // this method is designed to be overridden by the code that uses this engine

    this.onRemovalComplete = (element, context) => {};
  }
  /** @internal */


  _onRemovalComplete(element, context) {
    this.onRemovalComplete(element, context);
  }

  get queuedPlayers() {
    const players = [];

    this._namespaceList.forEach(ns => {
      ns.players.forEach(player => {
        if (player.queued) {
          players.push(player);
        }
      });
    });

    return players;
  }

  createNamespace(namespaceId, hostElement) {
    const ns = new AnimationTransitionNamespace(namespaceId, hostElement, this);

    if (this.bodyNode && this.driver.containsElement(this.bodyNode, hostElement)) {
      this._balanceNamespaceList(ns, hostElement);
    } else {
      // defer this later until flush during when the host element has
      // been inserted so that we know exactly where to place it in
      // the namespace list
      this.newHostElements.set(hostElement, ns); // given that this host element is a part of the animation code, it
      // may or may not be inserted by a parent node that is of an
      // animation renderer type. If this happens then we can still have
      // access to this item when we query for :enter nodes. If the parent
      // is a renderer then the set data-structure will normalize the entry

      this.collectEnterElement(hostElement);
    }

    return this._namespaceLookup[namespaceId] = ns;
  }

  _balanceNamespaceList(ns, hostElement) {
    const namespaceList = this._namespaceList;
    const namespacesByHostElement = this.namespacesByHostElement;
    const limit = namespaceList.length - 1;

    if (limit >= 0) {
      let found = false;

      if (this.driver.getParentElement !== undefined) {
        // Fast path for when the driver implements `getParentElement`, which allows us to find the
        // closest ancestor with an existing namespace that we can then insert `ns` after, without
        // having to inspect all existing namespaces.
        let ancestor = this.driver.getParentElement(hostElement);

        while (ancestor) {
          const ancestorNs = namespacesByHostElement.get(ancestor);

          if (ancestorNs) {
            // An animation namespace has been registered for this ancestor, so we insert `ns`
            // right after it to establish top-down ordering of animation namespaces.
            const index = namespaceList.indexOf(ancestorNs);
            namespaceList.splice(index + 1, 0, ns);
            found = true;
            break;
          }

          ancestor = this.driver.getParentElement(ancestor);
        }
      } else {
        // Slow path for backwards compatibility if the driver does not implement
        // `getParentElement`, to be removed once `getParentElement` is a required method.
        for (let i = limit; i >= 0; i--) {
          const nextNamespace = namespaceList[i];

          if (this.driver.containsElement(nextNamespace.hostElement, hostElement)) {
            namespaceList.splice(i + 1, 0, ns);
            found = true;
            break;
          }
        }
      }

      if (!found) {
        // No namespace exists that is an ancestor of `ns`, so `ns` is inserted at the front to
        // ensure that any existing descendants are ordered after `ns`, retaining the desired
        // top-down ordering.
        namespaceList.unshift(ns);
      }
    } else {
      namespaceList.push(ns);
    }

    namespacesByHostElement.set(hostElement, ns);
    return ns;
  }

  register(namespaceId, hostElement) {
    let ns = this._namespaceLookup[namespaceId];

    if (!ns) {
      ns = this.createNamespace(namespaceId, hostElement);
    }

    return ns;
  }

  registerTrigger(namespaceId, name, trigger) {
    let ns = this._namespaceLookup[namespaceId];

    if (ns && ns.register(name, trigger)) {
      this.totalAnimations++;
    }
  }

  destroy(namespaceId, context) {
    if (!namespaceId) return;

    const ns = this._fetchNamespace(namespaceId);

    this.afterFlush(() => {
      this.namespacesByHostElement.delete(ns.hostElement);
      delete this._namespaceLookup[namespaceId];

      const index = this._namespaceList.indexOf(ns);

      if (index >= 0) {
        this._namespaceList.splice(index, 1);
      }
    });
    this.afterFlushAnimationsDone(() => ns.destroy(context));
  }

  _fetchNamespace(id) {
    return this._namespaceLookup[id];
  }

  fetchNamespacesByElement(element) {
    // normally there should only be one namespace per element, however
    // if @triggers are placed on both the component element and then
    // its host element (within the component code) then there will be
    // two namespaces returned. We use a set here to simply deduplicate
    // the namespaces in case (for the reason described above) there are multiple triggers
    const namespaces = new Set();
    const elementStates = this.statesByElement.get(element);

    if (elementStates) {
      const keys = Object.keys(elementStates);

      for (let i = 0; i < keys.length; i++) {
        const nsId = elementStates[keys[i]].namespaceId;

        if (nsId) {
          const ns = this._fetchNamespace(nsId);

          if (ns) {
            namespaces.add(ns);
          }
        }
      }
    }

    return namespaces;
  }

  trigger(namespaceId, element, name, value) {
    if (isElementNode(element)) {
      const ns = this._fetchNamespace(namespaceId);

      if (ns) {
        ns.trigger(element, name, value);
        return true;
      }
    }

    return false;
  }

  insertNode(namespaceId, element, parent, insertBefore) {
    if (!isElementNode(element)) return; // special case for when an element is removed and reinserted (move operation)
    // when this occurs we do not want to use the element for deletion later

    const details = element[REMOVAL_FLAG];

    if (details && details.setForRemoval) {
      details.setForRemoval = false;
      details.setForMove = true;
      const index = this.collectedLeaveElements.indexOf(element);

      if (index >= 0) {
        this.collectedLeaveElements.splice(index, 1);
      }
    } // in the event that the namespaceId is blank then the caller
    // code does not contain any animation code in it, but it is
    // just being called so that the node is marked as being inserted


    if (namespaceId) {
      const ns = this._fetchNamespace(namespaceId); // This if-statement is a workaround for router issue #21947.
      // The router sometimes hits a race condition where while a route
      // is being instantiated a new navigation arrives, triggering leave
      // animation of DOM that has not been fully initialized, until this
      // is resolved, we need to handle the scenario when DOM is not in a
      // consistent state during the animation.


      if (ns) {
        ns.insertNode(element, parent);
      }
    } // only *directives and host elements are inserted before


    if (insertBefore) {
      this.collectEnterElement(element);
    }
  }

  collectEnterElement(element) {
    this.collectedEnterElements.push(element);
  }

  markElementAsDisabled(element, value) {
    if (value) {
      if (!this.disabledNodes.has(element)) {
        this.disabledNodes.add(element);
        addClass(element, DISABLED_CLASSNAME);
      }
    } else if (this.disabledNodes.has(element)) {
      this.disabledNodes.delete(element);
      removeClass(element, DISABLED_CLASSNAME);
    }
  }

  removeNode(namespaceId, element, isHostElement, context) {
    if (isElementNode(element)) {
      const ns = namespaceId ? this._fetchNamespace(namespaceId) : null;

      if (ns) {
        ns.removeNode(element, context);
      } else {
        this.markElementAsRemoved(namespaceId, element, false, context);
      }

      if (isHostElement) {
        const hostNS = this.namespacesByHostElement.get(element);

        if (hostNS && hostNS.id !== namespaceId) {
          hostNS.removeNode(element, context);
        }
      }
    } else {
      this._onRemovalComplete(element, context);
    }
  }

  markElementAsRemoved(namespaceId, element, hasAnimation, context, previousTriggersValues) {
    this.collectedLeaveElements.push(element);
    element[REMOVAL_FLAG] = {
      namespaceId,
      setForRemoval: context,
      hasAnimation,
      removedBeforeQueried: false,
      previousTriggersValues
    };
  }

  listen(namespaceId, element, name, phase, callback) {
    if (isElementNode(element)) {
      return this._fetchNamespace(namespaceId).listen(element, name, phase, callback);
    }

    return () => {};
  }

  _buildInstruction(entry, subTimelines, enterClassName, leaveClassName, skipBuildAst) {
    return entry.transition.build(this.driver, entry.element, entry.fromState.value, entry.toState.value, enterClassName, leaveClassName, entry.fromState.options, entry.toState.options, subTimelines, skipBuildAst);
  }

  destroyInnerAnimations(containerElement) {
    let elements = this.driver.query(containerElement, NG_TRIGGER_SELECTOR, true);
    elements.forEach(element => this.destroyActiveAnimationsForElement(element));
    if (this.playersByQueriedElement.size == 0) return;
    elements = this.driver.query(containerElement, NG_ANIMATING_SELECTOR, true);
    elements.forEach(element => this.finishActiveQueriedAnimationOnElement(element));
  }

  destroyActiveAnimationsForElement(element) {
    const players = this.playersByElement.get(element);

    if (players) {
      players.forEach(player => {
        // special case for when an element is set for destruction, but hasn't started.
        // in this situation we want to delay the destruction until the flush occurs
        // so that any event listeners attached to the player are triggered.
        if (player.queued) {
          player.markedForDestroy = true;
        } else {
          player.destroy();
        }
      });
    }
  }

  finishActiveQueriedAnimationOnElement(element) {
    const players = this.playersByQueriedElement.get(element);

    if (players) {
      players.forEach(player => player.finish());
    }
  }

  whenRenderingDone() {
    return new Promise(resolve => {
      if (this.players.length) {
        return optimizeGroupPlayer(this.players).onDone(() => resolve());
      } else {
        resolve();
      }
    });
  }

  processLeaveNode(element) {
    const details = element[REMOVAL_FLAG];

    if (details && details.setForRemoval) {
      // this will prevent it from removing it twice
      element[REMOVAL_FLAG] = NULL_REMOVAL_STATE;

      if (details.namespaceId) {
        this.destroyInnerAnimations(element);

        const ns = this._fetchNamespace(details.namespaceId);

        if (ns) {
          ns.clearElementCache(element);
        }
      }

      this._onRemovalComplete(element, details.setForRemoval);
    }

    if (element.classList?.contains(DISABLED_CLASSNAME)) {
      this.markElementAsDisabled(element, false);
    }

    this.driver.query(element, DISABLED_SELECTOR, true).forEach(node => {
      this.markElementAsDisabled(node, false);
    });
  }

  flush(microtaskId = -1) {
    let players = [];

    if (this.newHostElements.size) {
      this.newHostElements.forEach((ns, element) => this._balanceNamespaceList(ns, element));
      this.newHostElements.clear();
    }

    if (this.totalAnimations && this.collectedEnterElements.length) {
      for (let i = 0; i < this.collectedEnterElements.length; i++) {
        const elm = this.collectedEnterElements[i];
        addClass(elm, STAR_CLASSNAME);
      }
    }

    if (this._namespaceList.length && (this.totalQueuedPlayers || this.collectedLeaveElements.length)) {
      const cleanupFns = [];

      try {
        players = this._flushAnimations(cleanupFns, microtaskId);
      } finally {
        for (let i = 0; i < cleanupFns.length; i++) {
          cleanupFns[i]();
        }
      }
    } else {
      for (let i = 0; i < this.collectedLeaveElements.length; i++) {
        const element = this.collectedLeaveElements[i];
        this.processLeaveNode(element);
      }
    }

    this.totalQueuedPlayers = 0;
    this.collectedEnterElements.length = 0;
    this.collectedLeaveElements.length = 0;

    this._flushFns.forEach(fn => fn());

    this._flushFns = [];

    if (this._whenQuietFns.length) {
      // we move these over to a variable so that
      // if any new callbacks are registered in another
      // flush they do not populate the existing set
      const quietFns = this._whenQuietFns;
      this._whenQuietFns = [];

      if (players.length) {
        optimizeGroupPlayer(players).onDone(() => {
          quietFns.forEach(fn => fn());
        });
      } else {
        quietFns.forEach(fn => fn());
      }
    }
  }

  reportError(errors) {
    throw triggerTransitionsFailed(errors);
  }

  _flushAnimations(cleanupFns, microtaskId) {
    const subTimelines = new ElementInstructionMap();
    const skippedPlayers = [];
    const skippedPlayersMap = new Map();
    const queuedInstructions = [];
    const queriedElements = new Map();
    const allPreStyleElements = new Map();
    const allPostStyleElements = new Map();
    const disabledElementsSet = new Set();
    this.disabledNodes.forEach(node => {
      disabledElementsSet.add(node);
      const nodesThatAreDisabled = this.driver.query(node, QUEUED_SELECTOR, true);

      for (let i = 0; i < nodesThatAreDisabled.length; i++) {
        disabledElementsSet.add(nodesThatAreDisabled[i]);
      }
    });
    const bodyNode = this.bodyNode;
    const allTriggerElements = Array.from(this.statesByElement.keys());
    const enterNodeMap = buildRootMap(allTriggerElements, this.collectedEnterElements); // this must occur before the instructions are built below such that
    // the :enter queries match the elements (since the timeline queries
    // are fired during instruction building).

    const enterNodeMapIds = new Map();
    let i = 0;
    enterNodeMap.forEach((nodes, root) => {
      const className = ENTER_CLASSNAME + i++;
      enterNodeMapIds.set(root, className);
      nodes.forEach(node => addClass(node, className));
    });
    const allLeaveNodes = [];
    const mergedLeaveNodes = new Set();
    const leaveNodesWithoutAnimations = new Set();

    for (let i = 0; i < this.collectedLeaveElements.length; i++) {
      const element = this.collectedLeaveElements[i];
      const details = element[REMOVAL_FLAG];

      if (details && details.setForRemoval) {
        allLeaveNodes.push(element);
        mergedLeaveNodes.add(element);

        if (details.hasAnimation) {
          this.driver.query(element, STAR_SELECTOR, true).forEach(elm => mergedLeaveNodes.add(elm));
        } else {
          leaveNodesWithoutAnimations.add(element);
        }
      }
    }

    const leaveNodeMapIds = new Map();
    const leaveNodeMap = buildRootMap(allTriggerElements, Array.from(mergedLeaveNodes));
    leaveNodeMap.forEach((nodes, root) => {
      const className = LEAVE_CLASSNAME + i++;
      leaveNodeMapIds.set(root, className);
      nodes.forEach(node => addClass(node, className));
    });
    cleanupFns.push(() => {
      enterNodeMap.forEach((nodes, root) => {
        const className = enterNodeMapIds.get(root);
        nodes.forEach(node => removeClass(node, className));
      });
      leaveNodeMap.forEach((nodes, root) => {
        const className = leaveNodeMapIds.get(root);
        nodes.forEach(node => removeClass(node, className));
      });
      allLeaveNodes.forEach(element => {
        this.processLeaveNode(element);
      });
    });
    const allPlayers = [];
    const erroneousTransitions = [];

    for (let i = this._namespaceList.length - 1; i >= 0; i--) {
      const ns = this._namespaceList[i];
      ns.drainQueuedTransitions(microtaskId).forEach(entry => {
        const player = entry.player;
        const element = entry.element;
        allPlayers.push(player);

        if (this.collectedEnterElements.length) {
          const details = element[REMOVAL_FLAG]; // animations for move operations (elements being removed and reinserted,
          // e.g. when the order of an *ngFor list changes) are currently not supported

          if (details && details.setForMove) {
            if (details.previousTriggersValues && details.previousTriggersValues.has(entry.triggerName)) {
              const previousValue = details.previousTriggersValues.get(entry.triggerName); // we need to restore the previous trigger value since the element has
              // only been moved and hasn't actually left the DOM

              const triggersWithStates = this.statesByElement.get(entry.element);

              if (triggersWithStates && triggersWithStates[entry.triggerName]) {
                triggersWithStates[entry.triggerName].value = previousValue;
              }
            }

            player.destroy();
            return;
          }
        }

        const nodeIsOrphaned = !bodyNode || !this.driver.containsElement(bodyNode, element);
        const leaveClassName = leaveNodeMapIds.get(element);
        const enterClassName = enterNodeMapIds.get(element);

        const instruction = this._buildInstruction(entry, subTimelines, enterClassName, leaveClassName, nodeIsOrphaned);

        if (instruction.errors && instruction.errors.length) {
          erroneousTransitions.push(instruction);
          return;
        } // even though the element may not be in the DOM, it may still
        // be added at a later point (due to the mechanics of content
        // projection and/or dynamic component insertion) therefore it's
        // important to still style the element.


        if (nodeIsOrphaned) {
          player.onStart(() => eraseStyles(element, instruction.fromStyles));
          player.onDestroy(() => setStyles(element, instruction.toStyles));
          skippedPlayers.push(player);
          return;
        } // if an unmatched transition is queued and ready to go
        // then it SHOULD NOT render an animation and cancel the
        // previously running animations.


        if (entry.isFallbackTransition) {
          player.onStart(() => eraseStyles(element, instruction.fromStyles));
          player.onDestroy(() => setStyles(element, instruction.toStyles));
          skippedPlayers.push(player);
          return;
        } // this means that if a parent animation uses this animation as a sub-trigger
        // then it will instruct the timeline builder not to add a player delay, but
        // instead stretch the first keyframe gap until the animation starts. This is
        // important in order to prevent extra initialization styles from being
        // required by the user for the animation.


        const timelines = [];
        instruction.timelines.forEach(tl => {
          tl.stretchStartingKeyframe = true;

          if (!this.disabledNodes.has(tl.element)) {
            timelines.push(tl);
          }
        });
        instruction.timelines = timelines;
        subTimelines.append(element, instruction.timelines);
        const tuple = {
          instruction,
          player,
          element
        };
        queuedInstructions.push(tuple);
        instruction.queriedElements.forEach(element => getOrSetAsInMap(queriedElements, element, []).push(player));
        instruction.preStyleProps.forEach((stringMap, element) => {
          const props = Object.keys(stringMap);

          if (props.length) {
            let setVal = allPreStyleElements.get(element);

            if (!setVal) {
              allPreStyleElements.set(element, setVal = new Set());
            }

            props.forEach(prop => setVal.add(prop));
          }
        });
        instruction.postStyleProps.forEach((stringMap, element) => {
          const props = Object.keys(stringMap);
          let setVal = allPostStyleElements.get(element);

          if (!setVal) {
            allPostStyleElements.set(element, setVal = new Set());
          }

          props.forEach(prop => setVal.add(prop));
        });
      });
    }

    if (erroneousTransitions.length) {
      const errors = [];
      erroneousTransitions.forEach(instruction => {
        errors.push(transitionFailed(instruction.triggerName, instruction.errors));
      });
      allPlayers.forEach(player => player.destroy());
      this.reportError(errors);
    }

    const allPreviousPlayersMap = new Map(); // this map tells us which element in the DOM tree is contained by
    // which animation. Further down this map will get populated once
    // the players are built and in doing so we can use it to efficiently
    // figure out if a sub player is skipped due to a parent player having priority.

    const animationElementMap = new Map();
    queuedInstructions.forEach(entry => {
      const element = entry.element;

      if (subTimelines.has(element)) {
        animationElementMap.set(element, element);

        this._beforeAnimationBuild(entry.player.namespaceId, entry.instruction, allPreviousPlayersMap);
      }
    });
    skippedPlayers.forEach(player => {
      const element = player.element;

      const previousPlayers = this._getPreviousPlayers(element, false, player.namespaceId, player.triggerName, null);

      previousPlayers.forEach(prevPlayer => {
        getOrSetAsInMap(allPreviousPlayersMap, element, []).push(prevPlayer);
        prevPlayer.destroy();
      });
    }); // this is a special case for nodes that will be removed either by
    // having their own leave animations or by being queried in a container
    // that will be removed once a parent animation is complete. The idea
    // here is that * styles must be identical to ! styles because of
    // backwards compatibility (* is also filled in by default in many places).
    // Otherwise * styles will return an empty value or "auto" since the element
    // passed to getComputedStyle will not be visible (since * === destination)

    const replaceNodes = allLeaveNodes.filter(node => {
      return replacePostStylesAsPre(node, allPreStyleElements, allPostStyleElements);
    }); // POST STAGE: fill the * styles

    const postStylesMap = new Map();
    const allLeaveQueriedNodes = cloakAndComputeStyles(postStylesMap, this.driver, leaveNodesWithoutAnimations, allPostStyleElements, animations/* AUTO_STYLE */.l3);
    allLeaveQueriedNodes.forEach(node => {
      if (replacePostStylesAsPre(node, allPreStyleElements, allPostStyleElements)) {
        replaceNodes.push(node);
      }
    }); // PRE STAGE: fill the ! styles

    const preStylesMap = new Map();
    enterNodeMap.forEach((nodes, root) => {
      cloakAndComputeStyles(preStylesMap, this.driver, new Set(nodes), allPreStyleElements, animations/* ɵPRE_STYLE */.k1);
    });
    replaceNodes.forEach(node => {
      const post = postStylesMap.get(node);
      const pre = preStylesMap.get(node);
      postStylesMap.set(node, { ...post,
        ...pre
      });
    });
    const rootPlayers = [];
    const subPlayers = [];
    const NO_PARENT_ANIMATION_ELEMENT_DETECTED = {};
    queuedInstructions.forEach(entry => {
      const {
        element,
        player,
        instruction
      } = entry; // this means that it was never consumed by a parent animation which
      // means that it is independent and therefore should be set for animation

      if (subTimelines.has(element)) {
        if (disabledElementsSet.has(element)) {
          player.onDestroy(() => setStyles(element, instruction.toStyles));
          player.disabled = true;
          player.overrideTotalTime(instruction.totalTime);
          skippedPlayers.push(player);
          return;
        } // this will flow up the DOM and query the map to figure out
        // if a parent animation has priority over it. In the situation
        // that a parent is detected then it will cancel the loop. If
        // nothing is detected, or it takes a few hops to find a parent,
        // then it will fill in the missing nodes and signal them as having
        // a detected parent (or a NO_PARENT value via a special constant).


        let parentWithAnimation = NO_PARENT_ANIMATION_ELEMENT_DETECTED;

        if (animationElementMap.size > 1) {
          let elm = element;
          const parentsToAdd = [];

          while (elm = elm.parentNode) {
            const detectedParent = animationElementMap.get(elm);

            if (detectedParent) {
              parentWithAnimation = detectedParent;
              break;
            }

            parentsToAdd.push(elm);
          }

          parentsToAdd.forEach(parent => animationElementMap.set(parent, parentWithAnimation));
        }

        const innerPlayer = this._buildAnimation(player.namespaceId, instruction, allPreviousPlayersMap, skippedPlayersMap, preStylesMap, postStylesMap);

        player.setRealPlayer(innerPlayer);

        if (parentWithAnimation === NO_PARENT_ANIMATION_ELEMENT_DETECTED) {
          rootPlayers.push(player);
        } else {
          const parentPlayers = this.playersByElement.get(parentWithAnimation);

          if (parentPlayers && parentPlayers.length) {
            player.parentPlayer = optimizeGroupPlayer(parentPlayers);
          }

          skippedPlayers.push(player);
        }
      } else {
        eraseStyles(element, instruction.fromStyles);
        player.onDestroy(() => setStyles(element, instruction.toStyles)); // there still might be a ancestor player animating this
        // element therefore we will still add it as a sub player
        // even if its animation may be disabled

        subPlayers.push(player);

        if (disabledElementsSet.has(element)) {
          skippedPlayers.push(player);
        }
      }
    }); // find all of the sub players' corresponding inner animation players

    subPlayers.forEach(player => {
      // even if no players are found for a sub animation it
      // will still complete itself after the next tick since it's Noop
      const playersForElement = skippedPlayersMap.get(player.element);

      if (playersForElement && playersForElement.length) {
        const innerPlayer = optimizeGroupPlayer(playersForElement);
        player.setRealPlayer(innerPlayer);
      }
    }); // the reason why we don't actually play the animation is
    // because all that a skipped player is designed to do is to
    // fire the start/done transition callback events

    skippedPlayers.forEach(player => {
      if (player.parentPlayer) {
        player.syncPlayerEvents(player.parentPlayer);
      } else {
        player.destroy();
      }
    }); // run through all of the queued removals and see if they
    // were picked up by a query. If not then perform the removal
    // operation right away unless a parent animation is ongoing.

    for (let i = 0; i < allLeaveNodes.length; i++) {
      const element = allLeaveNodes[i];
      const details = element[REMOVAL_FLAG];
      removeClass(element, LEAVE_CLASSNAME); // this means the element has a removal animation that is being
      // taken care of and therefore the inner elements will hang around
      // until that animation is over (or the parent queried animation)

      if (details && details.hasAnimation) continue;
      let players = []; // if this element is queried or if it contains queried children
      // then we want for the element not to be removed from the page
      // until the queried animations have finished

      if (queriedElements.size) {
        let queriedPlayerResults = queriedElements.get(element);

        if (queriedPlayerResults && queriedPlayerResults.length) {
          players.push(...queriedPlayerResults);
        }

        let queriedInnerElements = this.driver.query(element, NG_ANIMATING_SELECTOR, true);

        for (let j = 0; j < queriedInnerElements.length; j++) {
          let queriedPlayers = queriedElements.get(queriedInnerElements[j]);

          if (queriedPlayers && queriedPlayers.length) {
            players.push(...queriedPlayers);
          }
        }
      }

      const activePlayers = players.filter(p => !p.destroyed);

      if (activePlayers.length) {
        removeNodesAfterAnimationDone(this, element, activePlayers);
      } else {
        this.processLeaveNode(element);
      }
    } // this is required so the cleanup method doesn't remove them


    allLeaveNodes.length = 0;
    rootPlayers.forEach(player => {
      this.players.push(player);
      player.onDone(() => {
        player.destroy();
        const index = this.players.indexOf(player);
        this.players.splice(index, 1);
      });
      player.play();
    });
    return rootPlayers;
  }

  elementContainsData(namespaceId, element) {
    let containsData = false;
    const details = element[REMOVAL_FLAG];
    if (details && details.setForRemoval) containsData = true;
    if (this.playersByElement.has(element)) containsData = true;
    if (this.playersByQueriedElement.has(element)) containsData = true;
    if (this.statesByElement.has(element)) containsData = true;
    return this._fetchNamespace(namespaceId).elementContainsData(element) || containsData;
  }

  afterFlush(callback) {
    this._flushFns.push(callback);
  }

  afterFlushAnimationsDone(callback) {
    this._whenQuietFns.push(callback);
  }

  _getPreviousPlayers(element, isQueriedElement, namespaceId, triggerName, toStateValue) {
    let players = [];

    if (isQueriedElement) {
      const queriedElementPlayers = this.playersByQueriedElement.get(element);

      if (queriedElementPlayers) {
        players = queriedElementPlayers;
      }
    } else {
      const elementPlayers = this.playersByElement.get(element);

      if (elementPlayers) {
        const isRemovalAnimation = !toStateValue || toStateValue == VOID_VALUE;
        elementPlayers.forEach(player => {
          if (player.queued) return;
          if (!isRemovalAnimation && player.triggerName != triggerName) return;
          players.push(player);
        });
      }
    }

    if (namespaceId || triggerName) {
      players = players.filter(player => {
        if (namespaceId && namespaceId != player.namespaceId) return false;
        if (triggerName && triggerName != player.triggerName) return false;
        return true;
      });
    }

    return players;
  }

  _beforeAnimationBuild(namespaceId, instruction, allPreviousPlayersMap) {
    const triggerName = instruction.triggerName;
    const rootElement = instruction.element; // when a removal animation occurs, ALL previous players are collected
    // and destroyed (even if they are outside of the current namespace)

    const targetNameSpaceId = instruction.isRemovalTransition ? undefined : namespaceId;
    const targetTriggerName = instruction.isRemovalTransition ? undefined : triggerName;

    for (const timelineInstruction of instruction.timelines) {
      const element = timelineInstruction.element;
      const isQueriedElement = element !== rootElement;
      const players = getOrSetAsInMap(allPreviousPlayersMap, element, []);

      const previousPlayers = this._getPreviousPlayers(element, isQueriedElement, targetNameSpaceId, targetTriggerName, instruction.toState);

      previousPlayers.forEach(player => {
        const realPlayer = player.getRealPlayer();

        if (realPlayer.beforeDestroy) {
          realPlayer.beforeDestroy();
        }

        player.destroy();
        players.push(player);
      });
    } // this needs to be done so that the PRE/POST styles can be
    // computed properly without interfering with the previous animation


    eraseStyles(rootElement, instruction.fromStyles);
  }

  _buildAnimation(namespaceId, instruction, allPreviousPlayersMap, skippedPlayersMap, preStylesMap, postStylesMap) {
    const triggerName = instruction.triggerName;
    const rootElement = instruction.element; // we first run this so that the previous animation player
    // data can be passed into the successive animation players

    const allQueriedPlayers = [];
    const allConsumedElements = new Set();
    const allSubElements = new Set();
    const allNewPlayers = instruction.timelines.map(timelineInstruction => {
      const element = timelineInstruction.element;
      allConsumedElements.add(element); // FIXME (matsko): make sure to-be-removed animations are removed properly

      const details = element[REMOVAL_FLAG];
      if (details && details.removedBeforeQueried) return new animations/* NoopAnimationPlayer */.ZN(timelineInstruction.duration, timelineInstruction.delay);
      const isQueriedElement = element !== rootElement;
      const previousPlayers = flattenGroupPlayers((allPreviousPlayersMap.get(element) || EMPTY_PLAYER_ARRAY).map(p => p.getRealPlayer())).filter(p => {
        // the `element` is not apart of the AnimationPlayer definition, but
        // Mock/WebAnimations
        // use the element within their implementation. This will be added in Angular5 to
        // AnimationPlayer
        const pp = p;
        return pp.element ? pp.element === element : false;
      });
      const preStyles = preStylesMap.get(element);
      const postStyles = postStylesMap.get(element);
      const keyframes = normalizeKeyframes(this.driver, this._normalizer, element, timelineInstruction.keyframes, preStyles, postStyles);

      const player = this._buildPlayer(timelineInstruction, keyframes, previousPlayers); // this means that this particular player belongs to a sub trigger. It is
      // important that we match this player up with the corresponding (@trigger.listener)


      if (timelineInstruction.subTimeline && skippedPlayersMap) {
        allSubElements.add(element);
      }

      if (isQueriedElement) {
        const wrappedPlayer = new TransitionAnimationPlayer(namespaceId, triggerName, element);
        wrappedPlayer.setRealPlayer(player);
        allQueriedPlayers.push(wrappedPlayer);
      }

      return player;
    });
    allQueriedPlayers.forEach(player => {
      getOrSetAsInMap(this.playersByQueriedElement, player.element, []).push(player);
      player.onDone(() => deleteOrUnsetInMap(this.playersByQueriedElement, player.element, player));
    });
    allConsumedElements.forEach(element => addClass(element, NG_ANIMATING_CLASSNAME));
    const player = optimizeGroupPlayer(allNewPlayers);
    player.onDestroy(() => {
      allConsumedElements.forEach(element => removeClass(element, NG_ANIMATING_CLASSNAME));
      setStyles(rootElement, instruction.toStyles);
    }); // this basically makes all of the callbacks for sub element animations
    // be dependent on the upper players for when they finish

    allSubElements.forEach(element => {
      getOrSetAsInMap(skippedPlayersMap, element, []).push(player);
    });
    return player;
  }

  _buildPlayer(instruction, keyframes, previousPlayers) {
    if (keyframes.length > 0) {
      return this.driver.animate(instruction.element, keyframes, instruction.duration, instruction.delay, instruction.easing, previousPlayers);
    } // special case for when an empty transition|definition is provided
    // ... there is no point in rendering an empty animation


    return new animations/* NoopAnimationPlayer */.ZN(instruction.duration, instruction.delay);
  }

}

class TransitionAnimationPlayer {
  constructor(namespaceId, triggerName, element) {
    this.namespaceId = namespaceId;
    this.triggerName = triggerName;
    this.element = element;
    this._player = new animations/* NoopAnimationPlayer */.ZN();
    this._containsRealPlayer = false;
    this._queuedCallbacks = {};
    this.destroyed = false;
    this.markedForDestroy = false;
    this.disabled = false;
    this.queued = true;
    this.totalTime = 0;
  }

  setRealPlayer(player) {
    if (this._containsRealPlayer) return;
    this._player = player;
    Object.keys(this._queuedCallbacks).forEach(phase => {
      this._queuedCallbacks[phase].forEach(callback => listenOnPlayer(player, phase, undefined, callback));
    });
    this._queuedCallbacks = {};
    this._containsRealPlayer = true;
    this.overrideTotalTime(player.totalTime);
    this.queued = false;
  }

  getRealPlayer() {
    return this._player;
  }

  overrideTotalTime(totalTime) {
    this.totalTime = totalTime;
  }

  syncPlayerEvents(player) {
    const p = this._player;

    if (p.triggerCallback) {
      player.onStart(() => p.triggerCallback('start'));
    }

    player.onDone(() => this.finish());
    player.onDestroy(() => this.destroy());
  }

  _queueEvent(name, callback) {
    getOrSetAsInMap(this._queuedCallbacks, name, []).push(callback);
  }

  onDone(fn) {
    if (this.queued) {
      this._queueEvent('done', fn);
    }

    this._player.onDone(fn);
  }

  onStart(fn) {
    if (this.queued) {
      this._queueEvent('start', fn);
    }

    this._player.onStart(fn);
  }

  onDestroy(fn) {
    if (this.queued) {
      this._queueEvent('destroy', fn);
    }

    this._player.onDestroy(fn);
  }

  init() {
    this._player.init();
  }

  hasStarted() {
    return this.queued ? false : this._player.hasStarted();
  }

  play() {
    !this.queued && this._player.play();
  }

  pause() {
    !this.queued && this._player.pause();
  }

  restart() {
    !this.queued && this._player.restart();
  }

  finish() {
    this._player.finish();
  }

  destroy() {
    this.destroyed = true;

    this._player.destroy();
  }

  reset() {
    !this.queued && this._player.reset();
  }

  setPosition(p) {
    if (!this.queued) {
      this._player.setPosition(p);
    }
  }

  getPosition() {
    return this.queued ? 0 : this._player.getPosition();
  }
  /** @internal */


  triggerCallback(phaseName) {
    const p = this._player;

    if (p.triggerCallback) {
      p.triggerCallback(phaseName);
    }
  }

}

function deleteOrUnsetInMap(map, key, value) {
  let currentValues;

  if (map instanceof Map) {
    currentValues = map.get(key);

    if (currentValues) {
      if (currentValues.length) {
        const index = currentValues.indexOf(value);
        currentValues.splice(index, 1);
      }

      if (currentValues.length == 0) {
        map.delete(key);
      }
    }
  } else {
    currentValues = map[key];

    if (currentValues) {
      if (currentValues.length) {
        const index = currentValues.indexOf(value);
        currentValues.splice(index, 1);
      }

      if (currentValues.length == 0) {
        delete map[key];
      }
    }
  }

  return currentValues;
}

function normalizeTriggerValue(value) {
  // we use `!= null` here because it's the most simple
  // way to test against a "falsy" value without mixing
  // in empty strings or a zero value. DO NOT OPTIMIZE.
  return value != null ? value : null;
}

function isElementNode(node) {
  return node && node['nodeType'] === 1;
}

function isTriggerEventValid(eventName) {
  return eventName == 'start' || eventName == 'done';
}

function cloakElement(element, value) {
  const oldValue = element.style.display;
  element.style.display = value != null ? value : 'none';
  return oldValue;
}

function cloakAndComputeStyles(valuesMap, driver, elements, elementPropsMap, defaultStyle) {
  const cloakVals = [];
  elements.forEach(element => cloakVals.push(cloakElement(element)));
  const failedElements = [];
  elementPropsMap.forEach((props, element) => {
    const styles = {};
    props.forEach(prop => {
      const value = styles[prop] = driver.computeStyle(element, prop, defaultStyle); // there is no easy way to detect this because a sub element could be removed
      // by a parent animation element being detached.

      if (!value || value.length == 0) {
        element[REMOVAL_FLAG] = NULL_REMOVED_QUERIED_STATE;
        failedElements.push(element);
      }
    });
    valuesMap.set(element, styles);
  }); // we use a index variable here since Set.forEach(a, i) does not return
  // an index value for the closure (but instead just the value)

  let i = 0;
  elements.forEach(element => cloakElement(element, cloakVals[i++]));
  return failedElements;
}
/*
Since the Angular renderer code will return a collection of inserted
nodes in all areas of a DOM tree, it's up to this algorithm to figure
out which nodes are roots for each animation @trigger.

By placing each inserted node into a Set and traversing upwards, it
is possible to find the @trigger elements and well any direct *star
insertion nodes, if a @trigger root is found then the enter element
is placed into the Map[@trigger] spot.
 */


function buildRootMap(roots, nodes) {
  const rootMap = new Map();
  roots.forEach(root => rootMap.set(root, []));
  if (nodes.length == 0) return rootMap;
  const NULL_NODE = 1;
  const nodeSet = new Set(nodes);
  const localRootMap = new Map();

  function getRoot(node) {
    if (!node) return NULL_NODE;
    let root = localRootMap.get(node);
    if (root) return root;
    const parent = node.parentNode;

    if (rootMap.has(parent)) {
      // ngIf inside @trigger
      root = parent;
    } else if (nodeSet.has(parent)) {
      // ngIf inside ngIf
      root = NULL_NODE;
    } else {
      // recurse upwards
      root = getRoot(parent);
    }

    localRootMap.set(node, root);
    return root;
  }

  nodes.forEach(node => {
    const root = getRoot(node);

    if (root !== NULL_NODE) {
      rootMap.get(root).push(node);
    }
  });
  return rootMap;
}

function addClass(element, className) {
  element.classList?.add(className);
}

function removeClass(element, className) {
  element.classList?.remove(className);
}

function removeNodesAfterAnimationDone(engine, element, players) {
  optimizeGroupPlayer(players).onDone(() => engine.processLeaveNode(element));
}

function flattenGroupPlayers(players) {
  const finalPlayers = [];

  _flattenGroupPlayersRecur(players, finalPlayers);

  return finalPlayers;
}

function _flattenGroupPlayersRecur(players, finalPlayers) {
  for (let i = 0; i < players.length; i++) {
    const player = players[i];

    if (player instanceof animations/* ɵAnimationGroupPlayer */.ZE) {
      _flattenGroupPlayersRecur(player.players, finalPlayers);
    } else {
      finalPlayers.push(player);
    }
  }
}

function objEquals(a, b) {
  const k1 = Object.keys(a);
  const k2 = Object.keys(b);
  if (k1.length != k2.length) return false;

  for (let i = 0; i < k1.length; i++) {
    const prop = k1[i];
    if (!b.hasOwnProperty(prop) || a[prop] !== b[prop]) return false;
  }

  return true;
}

function replacePostStylesAsPre(element, allPreStyleElements, allPostStyleElements) {
  const postEntry = allPostStyleElements.get(element);
  if (!postEntry) return false;
  let preEntry = allPreStyleElements.get(element);

  if (preEntry) {
    postEntry.forEach(data => preEntry.add(data));
  } else {
    allPreStyleElements.set(element, postEntry);
  }

  allPostStyleElements.delete(element);
  return true;
}

class AnimationEngine {
  constructor(bodyNode, _driver, _normalizer) {
    this.bodyNode = bodyNode;
    this._driver = _driver;
    this._normalizer = _normalizer;
    this._triggerCache = {}; // this method is designed to be overridden by the code that uses this engine

    this.onRemovalComplete = (element, context) => {};

    this._transitionEngine = new TransitionAnimationEngine(bodyNode, _driver, _normalizer);
    this._timelineEngine = new TimelineAnimationEngine(bodyNode, _driver, _normalizer);

    this._transitionEngine.onRemovalComplete = (element, context) => this.onRemovalComplete(element, context);
  }

  registerTrigger(componentId, namespaceId, hostElement, name, metadata) {
    const cacheKey = componentId + '-' + name;
    let trigger = this._triggerCache[cacheKey];

    if (!trigger) {
      const errors = [];
      const warnings = [];
      const ast = buildAnimationAst(this._driver, metadata, errors, warnings);

      if (errors.length) {
        throw triggerBuildFailed(name, errors);
      }

      if (warnings.length) {
        warnTriggerBuild(name, warnings);
      }

      trigger = buildTrigger(name, ast, this._normalizer);
      this._triggerCache[cacheKey] = trigger;
    }

    this._transitionEngine.registerTrigger(namespaceId, name, trigger);
  }

  register(namespaceId, hostElement) {
    this._transitionEngine.register(namespaceId, hostElement);
  }

  destroy(namespaceId, context) {
    this._transitionEngine.destroy(namespaceId, context);
  }

  onInsert(namespaceId, element, parent, insertBefore) {
    this._transitionEngine.insertNode(namespaceId, element, parent, insertBefore);
  }

  onRemove(namespaceId, element, context, isHostElement) {
    this._transitionEngine.removeNode(namespaceId, element, isHostElement || false, context);
  }

  disableAnimations(element, disable) {
    this._transitionEngine.markElementAsDisabled(element, disable);
  }

  process(namespaceId, element, property, value) {
    if (property.charAt(0) == '@') {
      const [id, action] = parseTimelineCommand(property);
      const args = value;

      this._timelineEngine.command(id, element, action, args);
    } else {
      this._transitionEngine.trigger(namespaceId, element, property, value);
    }
  }

  listen(namespaceId, element, eventName, eventPhase, callback) {
    // @@listen
    if (eventName.charAt(0) == '@') {
      const [id, action] = parseTimelineCommand(eventName);
      return this._timelineEngine.listen(id, element, action, callback);
    }

    return this._transitionEngine.listen(namespaceId, element, eventName, eventPhase, callback);
  }

  flush(microtaskId = -1) {
    this._transitionEngine.flush(microtaskId);
  }

  get players() {
    return this._transitionEngine.players.concat(this._timelineEngine.players);
  }

  whenRenderingDone() {
    return this._transitionEngine.whenRenderingDone();
  }

}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Returns an instance of `SpecialCasedStyles` if and when any special (non animateable) styles are
 * detected.
 *
 * In CSS there exist properties that cannot be animated within a keyframe animation
 * (whether it be via CSS keyframes or web-animations) and the animation implementation
 * will ignore them. This function is designed to detect those special cased styles and
 * return a container that will be executed at the start and end of the animation.
 *
 * @returns an instance of `SpecialCasedStyles` if any special styles are detected otherwise `null`
 */


function packageNonAnimatableStyles(element, styles) {
  let startStyles = null;
  let endStyles = null;

  if (Array.isArray(styles) && styles.length) {
    startStyles = filterNonAnimatableStyles(styles[0]);

    if (styles.length > 1) {
      endStyles = filterNonAnimatableStyles(styles[styles.length - 1]);
    }
  } else if (styles) {
    startStyles = filterNonAnimatableStyles(styles);
  }

  return startStyles || endStyles ? new SpecialCasedStyles(element, startStyles, endStyles) : null;
}
/**
 * Designed to be executed during a keyframe-based animation to apply any special-cased styles.
 *
 * When started (when the `start()` method is run) then the provided `startStyles`
 * will be applied. When finished (when the `finish()` method is called) the
 * `endStyles` will be applied as well any any starting styles. Finally when
 * `destroy()` is called then all styles will be removed.
 */


class SpecialCasedStyles {
  constructor(_element, _startStyles, _endStyles) {
    this._element = _element;
    this._startStyles = _startStyles;
    this._endStyles = _endStyles;
    this._state = 0
    /* Pending */
    ;
    let initialStyles = SpecialCasedStyles.initialStylesByElement.get(_element);

    if (!initialStyles) {
      SpecialCasedStyles.initialStylesByElement.set(_element, initialStyles = {});
    }

    this._initialStyles = initialStyles;
  }

  start() {
    if (this._state < 1
    /* Started */
    ) {
      if (this._startStyles) {
        setStyles(this._element, this._startStyles, this._initialStyles);
      }

      this._state = 1
      /* Started */
      ;
    }
  }

  finish() {
    this.start();

    if (this._state < 2
    /* Finished */
    ) {
      setStyles(this._element, this._initialStyles);

      if (this._endStyles) {
        setStyles(this._element, this._endStyles);
        this._endStyles = null;
      }

      this._state = 1
      /* Started */
      ;
    }
  }

  destroy() {
    this.finish();

    if (this._state < 3
    /* Destroyed */
    ) {
      SpecialCasedStyles.initialStylesByElement.delete(this._element);

      if (this._startStyles) {
        eraseStyles(this._element, this._startStyles);
        this._endStyles = null;
      }

      if (this._endStyles) {
        eraseStyles(this._element, this._endStyles);
        this._endStyles = null;
      }

      setStyles(this._element, this._initialStyles);
      this._state = 3
      /* Destroyed */
      ;
    }
  }

}

SpecialCasedStyles.initialStylesByElement = /* @__PURE__ */new WeakMap();

function filterNonAnimatableStyles(styles) {
  let result = null;
  const props = Object.keys(styles);

  for (let i = 0; i < props.length; i++) {
    const prop = props[i];

    if (isNonAnimatableStyle(prop)) {
      result = result || {};
      result[prop] = styles[prop];
    }
  }

  return result;
}

function isNonAnimatableStyle(prop) {
  return prop === 'display' || prop === 'position';
}

class WebAnimationsPlayer {
  constructor(element, keyframes, options, _specialStyles) {
    this.element = element;
    this.keyframes = keyframes;
    this.options = options;
    this._specialStyles = _specialStyles;
    this._onDoneFns = [];
    this._onStartFns = [];
    this._onDestroyFns = [];
    this._initialized = false;
    this._finished = false;
    this._started = false;
    this._destroyed = false;
    this.time = 0;
    this.parentPlayer = null;
    this.currentSnapshot = {};
    this._duration = options['duration'];
    this._delay = options['delay'] || 0;
    this.time = this._duration + this._delay;
  }

  _onFinish() {
    if (!this._finished) {
      this._finished = true;

      this._onDoneFns.forEach(fn => fn());

      this._onDoneFns = [];
    }
  }

  init() {
    this._buildPlayer();

    this._preparePlayerBeforeStart();
  }

  _buildPlayer() {
    if (this._initialized) return;
    this._initialized = true;
    const keyframes = this.keyframes;
    this.domPlayer = this._triggerWebAnimation(this.element, keyframes, this.options);
    this._finalKeyframe = keyframes.length ? keyframes[keyframes.length - 1] : {};
    this.domPlayer.addEventListener('finish', () => this._onFinish());
  }

  _preparePlayerBeforeStart() {
    // this is required so that the player doesn't start to animate right away
    if (this._delay) {
      this._resetDomPlayerState();
    } else {
      this.domPlayer.pause();
    }
  }
  /** @internal */


  _triggerWebAnimation(element, keyframes, options) {
    // jscompiler doesn't seem to know animate is a native property because it's not fully
    // supported yet across common browsers (we polyfill it for Edge/Safari) [CL #143630929]
    return element['animate'](keyframes, options);
  }

  onStart(fn) {
    this._onStartFns.push(fn);
  }

  onDone(fn) {
    this._onDoneFns.push(fn);
  }

  onDestroy(fn) {
    this._onDestroyFns.push(fn);
  }

  play() {
    this._buildPlayer();

    if (!this.hasStarted()) {
      this._onStartFns.forEach(fn => fn());

      this._onStartFns = [];
      this._started = true;

      if (this._specialStyles) {
        this._specialStyles.start();
      }
    }

    this.domPlayer.play();
  }

  pause() {
    this.init();
    this.domPlayer.pause();
  }

  finish() {
    this.init();

    if (this._specialStyles) {
      this._specialStyles.finish();
    }

    this._onFinish();

    this.domPlayer.finish();
  }

  reset() {
    this._resetDomPlayerState();

    this._destroyed = false;
    this._finished = false;
    this._started = false;
  }

  _resetDomPlayerState() {
    if (this.domPlayer) {
      this.domPlayer.cancel();
    }
  }

  restart() {
    this.reset();
    this.play();
  }

  hasStarted() {
    return this._started;
  }

  destroy() {
    if (!this._destroyed) {
      this._destroyed = true;

      this._resetDomPlayerState();

      this._onFinish();

      if (this._specialStyles) {
        this._specialStyles.destroy();
      }

      this._onDestroyFns.forEach(fn => fn());

      this._onDestroyFns = [];
    }
  }

  setPosition(p) {
    if (this.domPlayer === undefined) {
      this.init();
    }

    this.domPlayer.currentTime = p * this.time;
  }

  getPosition() {
    return this.domPlayer.currentTime / this.time;
  }

  get totalTime() {
    return this._delay + this._duration;
  }

  beforeDestroy() {
    const styles = {};

    if (this.hasStarted()) {
      // note: this code is invoked only when the `play` function was called prior to this
      // (thus `hasStarted` returns true), this implies that the code that initializes
      // `_finalKeyframe` has also been executed and the non-null assertion can be safely used here
      const finalKeyframe = this._finalKeyframe;
      Object.keys(finalKeyframe).forEach(prop => {
        if (prop != 'offset') {
          styles[prop] = this._finished ? finalKeyframe[prop] : computeStyle(this.element, prop);
        }
      });
    }

    this.currentSnapshot = styles;
  }
  /** @internal */


  triggerCallback(phaseName) {
    const methods = phaseName == 'start' ? this._onStartFns : this._onDoneFns;
    methods.forEach(fn => fn());
    methods.length = 0;
  }

}

class WebAnimationsDriver {
  validateStyleProperty(prop) {
    return validateStyleProperty(prop);
  }

  matchesElement(_element, _selector) {
    // This method is deprecated and no longer in use so we return false.
    return false;
  }

  containsElement(elm1, elm2) {
    return containsElement(elm1, elm2);
  }

  getParentElement(element) {
    return getParentElement(element);
  }

  query(element, selector, multi) {
    return invokeQuery(element, selector, multi);
  }

  computeStyle(element, prop, defaultValue) {
    return window.getComputedStyle(element)[prop];
  }

  animate(element, keyframes, duration, delay, easing, previousPlayers = []) {
    const fill = delay == 0 ? 'both' : 'forwards';
    const playerOptions = {
      duration,
      delay,
      fill
    }; // we check for this to avoid having a null|undefined value be present
    // for the easing (which results in an error for certain browsers #9752)

    if (easing) {
      playerOptions['easing'] = easing;
    }

    const previousStyles = {};
    const previousWebAnimationPlayers = previousPlayers.filter(player => player instanceof WebAnimationsPlayer);

    if (allowPreviousPlayerStylesMerge(duration, delay)) {
      previousWebAnimationPlayers.forEach(player => {
        let styles = player.currentSnapshot;
        Object.keys(styles).forEach(prop => previousStyles[prop] = styles[prop]);
      });
    }

    keyframes = keyframes.map(styles => copyStyles(styles, false));
    keyframes = balancePreviousStylesIntoKeyframes(element, keyframes, previousStyles);
    const specialStyles = packageNonAnimatableStyles(element, keyframes);
    return new WebAnimationsPlayer(element, keyframes, playerOptions, specialStyles);
  }

}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */


 //# sourceMappingURL=browser.mjs.map
// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2020/common.mjs
var common = __webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs");
;// CONCATENATED MODULE: ./node_modules/@angular/platform-browser/fesm2020/animations.mjs
/**
 * @license Angular v13.3.10
 * (c) 2010-2022 Google LLC. https://angular.io/
 * License: MIT
 */







/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

class BrowserAnimationBuilder extends animations/* AnimationBuilder */._j {
  constructor(rootRenderer, doc) {
    super();
    this._nextAnimationId = 0;
    const typeData = {
      id: '0',
      encapsulation: core.ViewEncapsulation.None,
      styles: [],
      data: {
        animation: []
      }
    };
    this._renderer = rootRenderer.createRenderer(doc.body, typeData);
  }

  build(animation) {
    const id = this._nextAnimationId.toString();

    this._nextAnimationId++;
    const entry = Array.isArray(animation) ? (0,animations/* sequence */.vP)(animation) : animation;
    issueAnimationCommand(this._renderer, null, id, 'register', [entry]);
    return new BrowserAnimationFactory(id, this._renderer);
  }

}

BrowserAnimationBuilder.ɵfac = function BrowserAnimationBuilder_Factory(t) {
  return new (t || BrowserAnimationBuilder)(core["ɵɵinject"](core.RendererFactory2), core["ɵɵinject"](common/* DOCUMENT */.K0));
};

BrowserAnimationBuilder.ɵprov = /* @__PURE__ */core["ɵɵdefineInjectable"]({
  token: BrowserAnimationBuilder,
  factory: BrowserAnimationBuilder.ɵfac
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && core["ɵsetClassMetadata"](BrowserAnimationBuilder, [{
    type: core.Injectable
  }], function () {
    return [{
      type: core.RendererFactory2
    }, {
      type: undefined,
      decorators: [{
        type: core.Inject,
        args: [common/* DOCUMENT */.K0]
      }]
    }];
  }, null);
})();

class BrowserAnimationFactory extends animations/* AnimationFactory */.LC {
  constructor(_id, _renderer) {
    super();
    this._id = _id;
    this._renderer = _renderer;
  }

  create(element, options) {
    return new RendererAnimationPlayer(this._id, element, options || {}, this._renderer);
  }

}

class RendererAnimationPlayer {
  constructor(id, element, options, _renderer) {
    this.id = id;
    this.element = element;
    this._renderer = _renderer;
    this.parentPlayer = null;
    this._started = false;
    this.totalTime = 0;

    this._command('create', options);
  }

  _listen(eventName, callback) {
    return this._renderer.listen(this.element, `@@${this.id}:${eventName}`, callback);
  }

  _command(command, ...args) {
    return issueAnimationCommand(this._renderer, this.element, this.id, command, args);
  }

  onDone(fn) {
    this._listen('done', fn);
  }

  onStart(fn) {
    this._listen('start', fn);
  }

  onDestroy(fn) {
    this._listen('destroy', fn);
  }

  init() {
    this._command('init');
  }

  hasStarted() {
    return this._started;
  }

  play() {
    this._command('play');

    this._started = true;
  }

  pause() {
    this._command('pause');
  }

  restart() {
    this._command('restart');
  }

  finish() {
    this._command('finish');
  }

  destroy() {
    this._command('destroy');
  }

  reset() {
    this._command('reset');

    this._started = false;
  }

  setPosition(p) {
    this._command('setPosition', p);
  }

  getPosition() {
    return this._renderer.engine.players[+this.id]?.getPosition() ?? 0;
  }

}

function issueAnimationCommand(renderer, element, id, command, args) {
  return renderer.setProperty(element, `@@${id}:${command}`, args);
}

const ANIMATION_PREFIX = '@';
const DISABLE_ANIMATIONS_FLAG = '@.disabled';

class AnimationRendererFactory {
  constructor(delegate, engine, _zone) {
    this.delegate = delegate;
    this.engine = engine;
    this._zone = _zone;
    this._currentId = 0;
    this._microtaskId = 1;
    this._animationCallbacksBuffer = [];
    this._rendererCache = new Map();
    this._cdRecurDepth = 0;
    this.promise = Promise.resolve(0);

    engine.onRemovalComplete = (element, delegate) => {
      // Note: if a component element has a leave animation, and a host leave animation,
      // the view engine will call `removeChild` for the parent
      // component renderer as well as for the child component renderer.
      // Therefore, we need to check if we already removed the element.
      const parentNode = delegate?.parentNode(element);

      if (parentNode) {
        delegate.removeChild(parentNode, element);
      }
    };
  }

  createRenderer(hostElement, type) {
    const EMPTY_NAMESPACE_ID = ''; // cache the delegates to find out which cached delegate can
    // be used by which cached renderer

    const delegate = this.delegate.createRenderer(hostElement, type);

    if (!hostElement || !type || !type.data || !type.data['animation']) {
      let renderer = this._rendererCache.get(delegate);

      if (!renderer) {
        renderer = new BaseAnimationRenderer(EMPTY_NAMESPACE_ID, delegate, this.engine); // only cache this result when the base renderer is used

        this._rendererCache.set(delegate, renderer);
      }

      return renderer;
    }

    const componentId = type.id;
    const namespaceId = type.id + '-' + this._currentId;
    this._currentId++;
    this.engine.register(namespaceId, hostElement);

    const registerTrigger = trigger => {
      if (Array.isArray(trigger)) {
        trigger.forEach(registerTrigger);
      } else {
        this.engine.registerTrigger(componentId, namespaceId, hostElement, trigger.name, trigger);
      }
    };

    const animationTriggers = type.data['animation'];
    animationTriggers.forEach(registerTrigger);
    return new AnimationRenderer(this, namespaceId, delegate, this.engine);
  }

  begin() {
    this._cdRecurDepth++;

    if (this.delegate.begin) {
      this.delegate.begin();
    }
  }

  _scheduleCountTask() {
    // always use promise to schedule microtask instead of use Zone
    this.promise.then(() => {
      this._microtaskId++;
    });
  }
  /** @internal */


  scheduleListenerCallback(count, fn, data) {
    if (count >= 0 && count < this._microtaskId) {
      this._zone.run(() => fn(data));

      return;
    }

    if (this._animationCallbacksBuffer.length == 0) {
      Promise.resolve(null).then(() => {
        this._zone.run(() => {
          this._animationCallbacksBuffer.forEach(tuple => {
            const [fn, data] = tuple;
            fn(data);
          });

          this._animationCallbacksBuffer = [];
        });
      });
    }

    this._animationCallbacksBuffer.push([fn, data]);
  }

  end() {
    this._cdRecurDepth--; // this is to prevent animations from running twice when an inner
    // component does CD when a parent component instead has inserted it

    if (this._cdRecurDepth == 0) {
      this._zone.runOutsideAngular(() => {
        this._scheduleCountTask();

        this.engine.flush(this._microtaskId);
      });
    }

    if (this.delegate.end) {
      this.delegate.end();
    }
  }

  whenRenderingDone() {
    return this.engine.whenRenderingDone();
  }

}

AnimationRendererFactory.ɵfac = function AnimationRendererFactory_Factory(t) {
  return new (t || AnimationRendererFactory)(core["ɵɵinject"](core.RendererFactory2), core["ɵɵinject"](AnimationEngine), core["ɵɵinject"](core.NgZone));
};

AnimationRendererFactory.ɵprov = /* @__PURE__ */core["ɵɵdefineInjectable"]({
  token: AnimationRendererFactory,
  factory: AnimationRendererFactory.ɵfac
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && core["ɵsetClassMetadata"](AnimationRendererFactory, [{
    type: core.Injectable
  }], function () {
    return [{
      type: core.RendererFactory2
    }, {
      type: AnimationEngine
    }, {
      type: core.NgZone
    }];
  }, null);
})();

class BaseAnimationRenderer {
  constructor(namespaceId, delegate, engine) {
    this.namespaceId = namespaceId;
    this.delegate = delegate;
    this.engine = engine;
    this.destroyNode = this.delegate.destroyNode ? n => delegate.destroyNode(n) : null;
  }

  get data() {
    return this.delegate.data;
  }

  destroy() {
    this.engine.destroy(this.namespaceId, this.delegate);
    this.delegate.destroy();
  }

  createElement(name, namespace) {
    return this.delegate.createElement(name, namespace);
  }

  createComment(value) {
    return this.delegate.createComment(value);
  }

  createText(value) {
    return this.delegate.createText(value);
  }

  appendChild(parent, newChild) {
    this.delegate.appendChild(parent, newChild);
    this.engine.onInsert(this.namespaceId, newChild, parent, false);
  }

  insertBefore(parent, newChild, refChild, isMove = true) {
    this.delegate.insertBefore(parent, newChild, refChild); // If `isMove` true than we should animate this insert.

    this.engine.onInsert(this.namespaceId, newChild, parent, isMove);
  }

  removeChild(parent, oldChild, isHostElement) {
    this.engine.onRemove(this.namespaceId, oldChild, this.delegate, isHostElement);
  }

  selectRootElement(selectorOrNode, preserveContent) {
    return this.delegate.selectRootElement(selectorOrNode, preserveContent);
  }

  parentNode(node) {
    return this.delegate.parentNode(node);
  }

  nextSibling(node) {
    return this.delegate.nextSibling(node);
  }

  setAttribute(el, name, value, namespace) {
    this.delegate.setAttribute(el, name, value, namespace);
  }

  removeAttribute(el, name, namespace) {
    this.delegate.removeAttribute(el, name, namespace);
  }

  addClass(el, name) {
    this.delegate.addClass(el, name);
  }

  removeClass(el, name) {
    this.delegate.removeClass(el, name);
  }

  setStyle(el, style, value, flags) {
    this.delegate.setStyle(el, style, value, flags);
  }

  removeStyle(el, style, flags) {
    this.delegate.removeStyle(el, style, flags);
  }

  setProperty(el, name, value) {
    if (name.charAt(0) == ANIMATION_PREFIX && name == DISABLE_ANIMATIONS_FLAG) {
      this.disableAnimations(el, !!value);
    } else {
      this.delegate.setProperty(el, name, value);
    }
  }

  setValue(node, value) {
    this.delegate.setValue(node, value);
  }

  listen(target, eventName, callback) {
    return this.delegate.listen(target, eventName, callback);
  }

  disableAnimations(element, value) {
    this.engine.disableAnimations(element, value);
  }

}

class AnimationRenderer extends BaseAnimationRenderer {
  constructor(factory, namespaceId, delegate, engine) {
    super(namespaceId, delegate, engine);
    this.factory = factory;
    this.namespaceId = namespaceId;
  }

  setProperty(el, name, value) {
    if (name.charAt(0) == ANIMATION_PREFIX) {
      if (name.charAt(1) == '.' && name == DISABLE_ANIMATIONS_FLAG) {
        value = value === undefined ? true : !!value;
        this.disableAnimations(el, value);
      } else {
        this.engine.process(this.namespaceId, el, name.substr(1), value);
      }
    } else {
      this.delegate.setProperty(el, name, value);
    }
  }

  listen(target, eventName, callback) {
    if (eventName.charAt(0) == ANIMATION_PREFIX) {
      const element = resolveElementFromTarget(target);
      let name = eventName.substr(1);
      let phase = ''; // @listener.phase is for trigger animation callbacks
      // @@listener is for animation builder callbacks

      if (name.charAt(0) != ANIMATION_PREFIX) {
        [name, phase] = parseTriggerCallbackName(name);
      }

      return this.engine.listen(this.namespaceId, element, name, phase, event => {
        const countId = event['_data'] || -1;
        this.factory.scheduleListenerCallback(countId, callback, event);
      });
    }

    return this.delegate.listen(target, eventName, callback);
  }

}

function resolveElementFromTarget(target) {
  switch (target) {
    case 'body':
      return document.body;

    case 'document':
      return document;

    case 'window':
      return window;

    default:
      return target;
  }
}

function parseTriggerCallbackName(triggerName) {
  const dotIndex = triggerName.indexOf('.');
  const trigger = triggerName.substring(0, dotIndex);
  const phase = triggerName.substr(dotIndex + 1);
  return [trigger, phase];
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


class InjectableAnimationEngine extends AnimationEngine {
  constructor(doc, driver, normalizer) {
    super(doc.body, driver, normalizer);
  }

  ngOnDestroy() {
    this.flush();
  }

}

InjectableAnimationEngine.ɵfac = function InjectableAnimationEngine_Factory(t) {
  return new (t || InjectableAnimationEngine)(core["ɵɵinject"](common/* DOCUMENT */.K0), core["ɵɵinject"](AnimationDriver), core["ɵɵinject"](AnimationStyleNormalizer));
};

InjectableAnimationEngine.ɵprov = /* @__PURE__ */core["ɵɵdefineInjectable"]({
  token: InjectableAnimationEngine,
  factory: InjectableAnimationEngine.ɵfac
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && core["ɵsetClassMetadata"](InjectableAnimationEngine, [{
    type: core.Injectable
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: core.Inject,
        args: [common/* DOCUMENT */.K0]
      }]
    }, {
      type: AnimationDriver
    }, {
      type: AnimationStyleNormalizer
    }];
  }, null);
})();

function instantiateDefaultStyleNormalizer() {
  return new WebAnimationsStyleNormalizer();
}

function instantiateRendererFactory(renderer, engine, zone) {
  return new AnimationRendererFactory(renderer, engine, zone);
}
/**
 * @publicApi
 */


const ANIMATION_MODULE_TYPE = new core.InjectionToken('AnimationModuleType');
const SHARED_ANIMATION_PROVIDERS = [{
  provide: animations/* AnimationBuilder */._j,
  useClass: BrowserAnimationBuilder
}, {
  provide: AnimationStyleNormalizer,
  useFactory: instantiateDefaultStyleNormalizer
}, {
  provide: AnimationEngine,
  useClass: InjectableAnimationEngine
}, {
  provide: core.RendererFactory2,
  useFactory: instantiateRendererFactory,
  deps: [platform_browser["ɵDomRendererFactory2"], AnimationEngine, core.NgZone]
}];
/**
 * Separate providers from the actual module so that we can do a local modification in Google3 to
 * include them in the BrowserModule.
 */

const BROWSER_ANIMATIONS_PROVIDERS = [{
  provide: AnimationDriver,
  useFactory: () => new WebAnimationsDriver()
}, {
  provide: ANIMATION_MODULE_TYPE,
  useValue: 'BrowserAnimations'
}, ...SHARED_ANIMATION_PROVIDERS];
/**
 * Separate providers from the actual module so that we can do a local modification in Google3 to
 * include them in the BrowserTestingModule.
 */

const BROWSER_NOOP_ANIMATIONS_PROVIDERS = [{
  provide: AnimationDriver,
  useClass: NoopAnimationDriver
}, {
  provide: ANIMATION_MODULE_TYPE,
  useValue: 'NoopAnimations'
}, ...SHARED_ANIMATION_PROVIDERS];
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Exports `BrowserModule` with additional [dependency-injection providers](guide/glossary#provider)
 * for use with animations. See [Animations](guide/animations).
 * @publicApi
 */

class BrowserAnimationsModule {
  /**
   * Configures the module based on the specified object.
   *
   * @param config Object used to configure the behavior of the `BrowserAnimationsModule`.
   * @see `BrowserAnimationsModuleConfig`
   *
   * @usageNotes
   * When registering the `BrowserAnimationsModule`, you can use the `withConfig`
   * function as follows:
   * ```
   * @NgModule({
   *   imports: [BrowserAnimationsModule.withConfig(config)]
   * })
   * class MyNgModule {}
   * ```
   */
  static withConfig(config) {
    return {
      ngModule: BrowserAnimationsModule,
      providers: config.disableAnimations ? BROWSER_NOOP_ANIMATIONS_PROVIDERS : BROWSER_ANIMATIONS_PROVIDERS
    };
  }

}

BrowserAnimationsModule.ɵfac = function BrowserAnimationsModule_Factory(t) {
  return new (t || BrowserAnimationsModule)();
};

BrowserAnimationsModule.ɵmod = /* @__PURE__ */core["ɵɵdefineNgModule"]({
  type: BrowserAnimationsModule,
  exports: [platform_browser.BrowserModule]
});
BrowserAnimationsModule.ɵinj = /* @__PURE__ */core["ɵɵdefineInjector"]({
  providers: BROWSER_ANIMATIONS_PROVIDERS,
  imports: [platform_browser.BrowserModule]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && core["ɵsetClassMetadata"](BrowserAnimationsModule, [{
    type: core.NgModule,
    args: [{
      exports: [platform_browser.BrowserModule],
      providers: BROWSER_ANIMATIONS_PROVIDERS
    }]
  }], null, null);
})();
/**
 * A null player that must be imported to allow disabling of animations.
 * @publicApi
 */


class NoopAnimationsModule {}

NoopAnimationsModule.ɵfac = function NoopAnimationsModule_Factory(t) {
  return new (t || NoopAnimationsModule)();
};

NoopAnimationsModule.ɵmod = /* @__PURE__ */core["ɵɵdefineNgModule"]({
  type: NoopAnimationsModule,
  exports: [platform_browser.BrowserModule]
});
NoopAnimationsModule.ɵinj = /* @__PURE__ */core["ɵɵdefineInjector"]({
  providers: BROWSER_NOOP_ANIMATIONS_PROVIDERS,
  imports: [platform_browser.BrowserModule]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && core["ɵsetClassMetadata"](NoopAnimationsModule, [{
    type: core.NgModule,
    args: [{
      exports: [platform_browser.BrowserModule],
      providers: BROWSER_NOOP_ANIMATIONS_PROVIDERS
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */


 //# sourceMappingURL=animations.mjs.map

/***/ }),

/***/ "./node_modules/@storybook/angular/dist/client/decorators.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.componentWrapperDecorator = exports.moduleMetadata = void 0;
const ComputesTemplateFromComponent_1 = __webpack_require__("./node_modules/@storybook/angular/dist/client/angular-beta/ComputesTemplateFromComponent.js");
const NgComponentAnalyzer_1 = __webpack_require__("./node_modules/@storybook/angular/dist/client/angular-beta/utils/NgComponentAnalyzer.js");
// We use `any` here as the default type rather than `Args` because we need something that is
// castable to any component-specific args type when the user is being careful.
const moduleMetadata = (metadata) => (storyFn) => {
    const story = storyFn();
    const storyMetadata = story.moduleMetadata || {};
    metadata = metadata || {};
    return {
        ...story,
        moduleMetadata: {
            declarations: [...(metadata.declarations || []), ...(storyMetadata.declarations || [])],
            entryComponents: [
                ...(metadata.entryComponents || []),
                ...(storyMetadata.entryComponents || []),
            ],
            imports: [...(metadata.imports || []), ...(storyMetadata.imports || [])],
            schemas: [...(metadata.schemas || []), ...(storyMetadata.schemas || [])],
            providers: [...(metadata.providers || []), ...(storyMetadata.providers || [])],
        },
    };
};
exports.moduleMetadata = moduleMetadata;
const componentWrapperDecorator = (element, props) => (storyFn, storyContext) => {
    const story = storyFn();
    const currentProps = typeof props === 'function' ? props(storyContext) : props;
    const template = (0, NgComponentAnalyzer_1.isComponent)(element)
        ? (0, ComputesTemplateFromComponent_1.computesTemplateFromComponent)(element, currentProps ?? {}, story.template)
        : element(story.template);
    return {
        ...story,
        template,
        ...(currentProps || story.props
            ? {
                props: {
                    ...currentProps,
                    ...story.props,
                },
            }
            : {}),
    };
};
exports.componentWrapperDecorator = componentWrapperDecorator;


/***/ }),

/***/ "./node_modules/@storybook/angular/dist/client/index.js":
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


/// <reference types="webpack-env" />
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.componentWrapperDecorator = exports.moduleMetadata = void 0;
__webpack_require__("./node_modules/@storybook/angular/dist/client/globals.js");
// eslint-disable-next-line import/export
__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-api.js"), exports);
// eslint-disable-next-line import/export
__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-types.js"), exports);
var decorators_1 = __webpack_require__("./node_modules/@storybook/angular/dist/client/decorators.js");
Object.defineProperty(exports, "moduleMetadata", ({ enumerable: true, get: function () { return decorators_1.moduleMetadata; } }));
Object.defineProperty(exports, "componentWrapperDecorator", ({ enumerable: true, get: function () { return decorators_1.componentWrapperDecorator; } }));
// optimization: stop HMR propagation in webpack
 undefined;


/***/ }),

/***/ "./node_modules/@storybook/angular/dist/client/public-api.js":
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.raw = exports.forceReRender = exports.configure = exports.storiesOf = void 0;
const core_client_1 = __webpack_require__("@storybook/core-client");
const render_1 = __webpack_require__("./node_modules/@storybook/angular/dist/client/render.js");
const decorateStory_1 = __importDefault(__webpack_require__("./node_modules/@storybook/angular/dist/client/decorateStory.js"));
__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-types.js"), exports);
const FRAMEWORK = 'angular';
const api = (0, core_client_1.start)(render_1.renderToCanvas, { decorateStory: decorateStory_1.default, render: render_1.render });
const storiesOf = (kind, m) => {
    return api.clientApi.storiesOf(kind, m).addParameters({
        framework: FRAMEWORK,
    });
};
exports.storiesOf = storiesOf;
const configure = (...args) => api.configure(FRAMEWORK, ...args);
exports.configure = configure;
exports.forceReRender = api.forceReRender;
exports.raw = api.clientApi.raw;


/***/ }),

/***/ "./node_modules/@storybook/angular/dist/client/public-types.js":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./node_modules/@storybook/angular/dist/index.mjs":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony import */ var _client_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@storybook/angular/dist/client/index.js");
/* harmony import */ var _client_index__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_client_index__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (checked) */ if(__webpack_require__.o(_client_index__WEBPACK_IMPORTED_MODULE_0__, "moduleMetadata")) __webpack_require__.d(__webpack_exports__, { "moduleMetadata": function() { return _client_index__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata; } });


/*
 * ATTENTION:
 * - moduleMetadata
 * - NgModuleMetadata
 * - ICollection
 *
 * These typings are coped out of decorators.d.ts and types.d.ts in order to fix a bug with tsc
 * It was imported out of dist before which was not the proper way of exporting public API
 *
 * This can be fixed by migrating app/angular to typescript
 */


/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/observable/fromEvent.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* binding */ fromEvent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/innerFrom.js");
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/Observable.js");
/* harmony import */ var _operators_mergeMap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/mergeMap.js");
/* harmony import */ var _util_isArrayLike__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/isArrayLike.js");
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/isFunction.js");
/* harmony import */ var _util_mapOneOrManyArgs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/mapOneOrManyArgs.js");







var nodeEventEmitterMethods = ['addListener', 'removeListener'];
var eventTargetMethods = ['addEventListener', 'removeEventListener'];
var jqueryMethods = ['on', 'off'];
function fromEvent(target, eventName, options, resultSelector) {
    if ((0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .m)(options)) {
        resultSelector = options;
        options = undefined;
    }
    if (resultSelector) {
        return fromEvent(target, eventName, options).pipe((0,_util_mapOneOrManyArgs__WEBPACK_IMPORTED_MODULE_1__/* .mapOneOrManyArgs */ .Z)(resultSelector));
    }
    var _a = (0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__read */ .CR)(isEventTarget(target)
        ? eventTargetMethods.map(function (methodName) { return function (handler) { return target[methodName](eventName, handler, options); }; })
        :
            isNodeStyleEventEmitter(target)
                ? nodeEventEmitterMethods.map(toCommonHandlerRegistry(target, eventName))
                : isJQueryStyleEventEmitter(target)
                    ? jqueryMethods.map(toCommonHandlerRegistry(target, eventName))
                    : [], 2), add = _a[0], remove = _a[1];
    if (!add) {
        if ((0,_util_isArrayLike__WEBPACK_IMPORTED_MODULE_3__/* .isArrayLike */ .z)(target)) {
            return (0,_operators_mergeMap__WEBPACK_IMPORTED_MODULE_4__/* .mergeMap */ .z)(function (subTarget) { return fromEvent(subTarget, eventName, options); })((0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_5__/* .innerFrom */ .Xf)(target));
        }
    }
    if (!add) {
        throw new TypeError('Invalid event target');
    }
    return new _Observable__WEBPACK_IMPORTED_MODULE_6__/* .Observable */ .y(function (subscriber) {
        var handler = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return subscriber.next(1 < args.length ? args : args[0]);
        };
        add(handler);
        return function () { return remove(handler); };
    });
}
function toCommonHandlerRegistry(target, eventName) {
    return function (methodName) { return function (handler) { return target[methodName](eventName, handler); }; };
}
function isNodeStyleEventEmitter(target) {
    return (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .m)(target.addListener) && (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .m)(target.removeListener);
}
function isJQueryStyleEventEmitter(target) {
    return (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .m)(target.on) && (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .m)(target.off);
}
function isEventTarget(target) {
    return (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .m)(target.addEventListener) && (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .m)(target.removeEventListener);
}
//# sourceMappingURL=fromEvent.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/operators/takeUntil.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* binding */ takeUntil)
/* harmony export */ });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/lift.js");
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js");
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/innerFrom.js");
/* harmony import */ var _util_noop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/noop.js");




function takeUntil(notifier) {
    return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__/* .operate */ .e)(function (source, subscriber) {
        (0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_1__/* .innerFrom */ .Xf)(notifier).subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__/* .createOperatorSubscriber */ .x)(subscriber, function () { return subscriber.complete(); }, _util_noop__WEBPACK_IMPORTED_MODULE_3__/* .noop */ .Z));
        !subscriber.closed && source.subscribe(subscriber);
    });
}
//# sourceMappingURL=takeUntil.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/scheduler/async.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "P": () => (/* binding */ async_async),
  "z": () => (/* binding */ asyncScheduler)
});

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("./node_modules/tslib/tslib.es6.js");
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/Subscription.js + 1 modules
var Subscription = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/Subscription.js");
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/scheduler/Action.js


var Action = (function (_super) {
    (0,tslib_es6/* __extends */.ZT)(Action, _super);
    function Action(scheduler, work) {
        return _super.call(this) || this;
    }
    Action.prototype.schedule = function (state, delay) {
        if (delay === void 0) { delay = 0; }
        return this;
    };
    return Action;
}(Subscription/* Subscription */.w0));

//# sourceMappingURL=Action.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/scheduler/intervalProvider.js

var intervalProvider = {
    setInterval: function (handler, timeout) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        var delegate = intervalProvider.delegate;
        if (delegate === null || delegate === void 0 ? void 0 : delegate.setInterval) {
            return delegate.setInterval.apply(delegate, (0,tslib_es6/* __spreadArray */.ev)([handler, timeout], (0,tslib_es6/* __read */.CR)(args)));
        }
        return setInterval.apply(void 0, (0,tslib_es6/* __spreadArray */.ev)([handler, timeout], (0,tslib_es6/* __read */.CR)(args)));
    },
    clearInterval: function (handle) {
        var delegate = intervalProvider.delegate;
        return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearInterval) || clearInterval)(handle);
    },
    delegate: undefined,
};
//# sourceMappingURL=intervalProvider.js.map
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/util/arrRemove.js
var arrRemove = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/arrRemove.js");
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/scheduler/AsyncAction.js




var AsyncAction = (function (_super) {
    (0,tslib_es6/* __extends */.ZT)(AsyncAction, _super);
    function AsyncAction(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        _this.pending = false;
        return _this;
    }
    AsyncAction.prototype.schedule = function (state, delay) {
        if (delay === void 0) { delay = 0; }
        if (this.closed) {
            return this;
        }
        this.state = state;
        var id = this.id;
        var scheduler = this.scheduler;
        if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, delay);
        }
        this.pending = true;
        this.delay = delay;
        this.id = this.id || this.requestAsyncId(scheduler, this.id, delay);
        return this;
    };
    AsyncAction.prototype.requestAsyncId = function (scheduler, _id, delay) {
        if (delay === void 0) { delay = 0; }
        return intervalProvider.setInterval(scheduler.flush.bind(scheduler, this), delay);
    };
    AsyncAction.prototype.recycleAsyncId = function (_scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        if (delay != null && this.delay === delay && this.pending === false) {
            return id;
        }
        intervalProvider.clearInterval(id);
        return undefined;
    };
    AsyncAction.prototype.execute = function (state, delay) {
        if (this.closed) {
            return new Error('executing a cancelled action');
        }
        this.pending = false;
        var error = this._execute(state, delay);
        if (error) {
            return error;
        }
        else if (this.pending === false && this.id != null) {
            this.id = this.recycleAsyncId(this.scheduler, this.id, null);
        }
    };
    AsyncAction.prototype._execute = function (state, _delay) {
        var errored = false;
        var errorValue;
        try {
            this.work(state);
        }
        catch (e) {
            errored = true;
            errorValue = e ? e : new Error('Scheduled action threw falsy error');
        }
        if (errored) {
            this.unsubscribe();
            return errorValue;
        }
    };
    AsyncAction.prototype.unsubscribe = function () {
        if (!this.closed) {
            var _a = this, id = _a.id, scheduler = _a.scheduler;
            var actions = scheduler.actions;
            this.work = this.state = this.scheduler = null;
            this.pending = false;
            (0,arrRemove/* arrRemove */.P)(actions, this);
            if (id != null) {
                this.id = this.recycleAsyncId(scheduler, id, null);
            }
            this.delay = null;
            _super.prototype.unsubscribe.call(this);
        }
    };
    return AsyncAction;
}(Action));

//# sourceMappingURL=AsyncAction.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/scheduler/dateTimestampProvider.js
var dateTimestampProvider = {
    now: function () {
        return (dateTimestampProvider.delegate || Date).now();
    },
    delegate: undefined,
};
//# sourceMappingURL=dateTimestampProvider.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/Scheduler.js

var Scheduler = (function () {
    function Scheduler(schedulerActionCtor, now) {
        if (now === void 0) { now = Scheduler.now; }
        this.schedulerActionCtor = schedulerActionCtor;
        this.now = now;
    }
    Scheduler.prototype.schedule = function (work, delay, state) {
        if (delay === void 0) { delay = 0; }
        return new this.schedulerActionCtor(this, work).schedule(state, delay);
    };
    Scheduler.now = dateTimestampProvider.now;
    return Scheduler;
}());

//# sourceMappingURL=Scheduler.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/scheduler/AsyncScheduler.js


var AsyncScheduler = (function (_super) {
    (0,tslib_es6/* __extends */.ZT)(AsyncScheduler, _super);
    function AsyncScheduler(SchedulerAction, now) {
        if (now === void 0) { now = Scheduler.now; }
        var _this = _super.call(this, SchedulerAction, now) || this;
        _this.actions = [];
        _this._active = false;
        _this._scheduled = undefined;
        return _this;
    }
    AsyncScheduler.prototype.flush = function (action) {
        var actions = this.actions;
        if (this._active) {
            actions.push(action);
            return;
        }
        var error;
        this._active = true;
        do {
            if ((error = action.execute(action.state, action.delay))) {
                break;
            }
        } while ((action = actions.shift()));
        this._active = false;
        if (error) {
            while ((action = actions.shift())) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    return AsyncScheduler;
}(Scheduler));

//# sourceMappingURL=AsyncScheduler.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/scheduler/async.js


var asyncScheduler = new AsyncScheduler(AsyncAction);
var async_async = asyncScheduler; //# sourceMappingURL=async.js.map

/***/ })

}]);
//# sourceMappingURL=435.536b46ce.iframe.bundle.js.map