<template><div><h1 id="developing" tabindex="-1"><a class="header-anchor" href="#developing"><span>Developing</span></a></h1>
<nav class="table-of-contents"><ul><li><router-link to="#modular-design">Modular design</router-link></li><li><router-link to="#data-transfer-objects">Data Transfer Objects</router-link></li><li><router-link to="#actions">Actions</router-link></li><li><router-link to="#create-new-builder-components">Create new Builder components</router-link></li></ul></nav>
<h2 id="modular-design" tabindex="-1"><a class="header-anchor" href="#modular-design"><span>Modular design</span></a></h2>
<p>ZioraCMS uses the popular <a href="https://github.com/nWidart/laravel-modules" target="_blank" rel="noopener noreferrer">Laravel Modules</a> package which provides a flexible architecture. All modules are locates in the <code v-pre>Modules</code> directory. Our recommendation is that if you plan to make changes to the app, create your own modules so that future updates will be seamless and will not conflict with changes you have made to the core modules. Consult the <a href="https://laravelmodules.com/" target="_blank" rel="noopener noreferrer">Laravel Modules</a> documentation on the commands to use to generate and manage modules.</p>
<p>We have also customized Inertia JS to look for view files in modules, so all views that relate to a particular module should be places inside the <code v-pre>resources/views</code> folder.</p>
<p>In the controller, to reference a view file that is inside a Module, you have to prefix it with the Module name like this:</p>
<div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php"><pre v-pre><code><span class="line"><span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">index</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token variable">$modelCollection</span> <span class="token operator">=</span> <span class="token class-name static-context">Model</span><span class="token operator">::</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line highlighted">    <span class="token class-name static-context">Inertia</span><span class="token operator">::</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'MyModule::index'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token string single-quoted-string">'data'</span> <span class="token operator">=></span> <span class="token class-name static-context">SomeModelData</span><span class="token operator">::</span><span class="token function">collect</span><span class="token punctuation">(</span><span class="token variable">$modelCollection</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The above will look for the file <code v-pre>resources/views/index.vue</code> inside the module named <code v-pre>MyModule</code>.</p>
<p>However, you are still free to place Inertia page views inside <code v-pre>resources/js/pages</code> directory just like in any other Inertia.js app. In fact, ZioraCMS uses this directory to serve frontend pages.</p>
<h2 id="data-transfer-objects" tabindex="-1"><a class="header-anchor" href="#data-transfer-objects"><span>Data Transfer Objects</span></a></h2>
<p>ZioraCMS uses Data Transfer Objects to serve data to the frontend. You can generate a new Data Transfer Object inside a module (eg Pages) using the following command:</p>
<div class="language-bash" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">php artisan builder:make-data PageData Page</span>
<span class="line"></span></code></pre>
</div><p>In this case, <code v-pre>PageData</code> is the name of the DTO class while <code v-pre>Page</code> is the module you want to create the DTO in. DTO classes are created in module's <code v-pre>app/Data</code> directory.</p>
<p>Data classes extend <a href="https://spatie.be/docs/laravel-data/v4/introduction" target="_blank" rel="noopener noreferrer">Spatie's Laravel Data package</a> and they are decorated with a TypeScript decorator. This decorator transforms the DTO to a TypeScript type and writes it out to the frontend. So these types can be used in frontend scripts and Vue components. for instance, the above <code v-pre>PageData</code> can be referenced in the frontend as follows:</p>
<p>The <code v-pre>PageData.php</code> file may look like this:</p>
<div class="code-block-title">
  <div class="code-block-title-bar">
    <span class="title" data-title="PageData.php">PageData.php</span>
  </div>
  <div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php"><pre v-pre><code><span class="line"><span class="token php language-php"><span class="token delimiter important">&lt;?php</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">namespace</span> <span class="token package">Modules<span class="token punctuation">\</span>Page<span class="token punctuation">\</span>Data</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">use</span> <span class="token package">Spatie<span class="token punctuation">\</span>LaravelData<span class="token punctuation">\</span>Data</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">use</span> <span class="token package">Modules<span class="token punctuation">\</span>Page<span class="token punctuation">\</span>Models<span class="token punctuation">\</span>Page</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">use</span> <span class="token package">Spatie<span class="token punctuation">\</span>LaravelData<span class="token punctuation">\</span>Optional</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">use</span> <span class="token package">Spatie<span class="token punctuation">\</span>TypeScriptTransformer<span class="token punctuation">\</span>Attributes<span class="token punctuation">\</span>TypeScript</span><span class="token punctuation">;</span></span>
<span class="line highlighted"></span>
<span class="line">#<span class="token punctuation">[</span><span class="token function">TypeScript</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token comment">// &lt;--- Typescript transformer</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name-definition class-name">PageData</span> <span class="token keyword">extends</span> <span class="token class-name">Data</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">__construct</span><span class="token punctuation">(</span></span>
<span class="line">        <span class="token keyword">public</span> <span class="token keyword type-declaration">string</span> <span class="token variable">$id</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token keyword">public</span> <span class="token keyword type-declaration">string</span><span class="token operator">|</span><span class="token class-name">Optional</span> <span class="token variable">$type</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token keyword">public</span> <span class="token keyword type-declaration">string</span> <span class="token variable">$slug</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token keyword">public</span> <span class="token keyword type-declaration">string</span> <span class="token variable">$title</span></span>
<span class="line">    <span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">function</span> <span class="token function-definition function">fromModel</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Page</span> <span class="token variable">$page</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">self</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token keyword">self</span><span class="token punctuation">(</span></span>
<span class="line">            <span class="token argument-name">id</span><span class="token punctuation">:</span> <span class="token variable">$page</span><span class="token operator">-></span><span class="token property">id</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token argument-name">type</span><span class="token punctuation">:</span> <span class="token string single-quoted-string">'page'</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token argument-name">slug</span><span class="token punctuation">:</span> <span class="token variable">$page</span><span class="token operator">-></span><span class="token property">slug</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token argument-name">title</span><span class="token punctuation">:</span> <span class="token variable">$page</span><span class="token operator">-></span><span class="token property">title</span></span>
<span class="line">        <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>
</div><p>In the <code v-pre>PageController.php</code> file, we have the following index function to list pages:</p>
<div class="code-block-title">
  <div class="code-block-title-bar">
    <span class="title" data-title="PageController.php">PageController.php</span>
  </div>
  <div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php"><pre v-pre><code><span class="line"><span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">index</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token variable">$pageData</span> <span class="token operator">=</span> <span class="token class-name static-context">Page</span><span class="token operator">::</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token class-name static-context">Inertia</span><span class="token operator">::</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'Pages::index'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span></span>
<span class="line highlighted">        <span class="token string single-quoted-string">'pages'</span> <span class="token operator">=></span> <span class="token class-name static-context">PageData</span><span class="token operator">::</span><span class="token function">collect</span><span class="token punctuation">(</span><span class="token variable">$pageData</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>
</div><p>and then in the <code v-pre>index.vue</code> file, the prop can be typed as follows:</p>
<div class="code-block-title">
  <div class="code-block-title-bar">
    <span class="title" data-title="index.vue">index.vue</span>
  </div>
  <div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token operator">&lt;</span>template<span class="token operator">></span></span>
<span class="line"></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span></span>
<span class="line"></span>
<span class="line"><span class="token operator">&lt;</span>script setup lang<span class="token operator">=</span><span class="token string">"ts"</span><span class="token operator">></span></span>
<span class="line"></span>
<span class="line">defineProps<span class="token operator">&lt;</span><span class="token punctuation">{</span></span>
<span class="line highlighted">    pages<span class="token operator">:</span> Modules<span class="token punctuation">.</span>Pages<span class="token punctuation">.</span>Data<span class="token punctuation">.</span>PageData<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">// &lt;-- This becomes Typed.</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>
</div><h2 id="actions" tabindex="-1"><a class="header-anchor" href="#actions"><span>Actions</span></a></h2>
<p>ZioraCMS makes heavy use of Actions. The intention is to keep controller as light as possible and extract database interaction to Actions. This also has the benefit that Actions can be called from different classes and even across modules, so we do not have to repeat the same query in different places.</p>
<p><code v-pre>Laravel Modules</code> package comes with a generator for actions which can be called as follows:</p>
<div class="language-bash" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">php artisan module:make-action GetAllPagesAction Pages</span>
<span class="line"></span></code></pre>
</div><p>This will generate an action class called <code v-pre>app/Actions/GetAllPagesAction.php</code> in the <code v-pre>Pages</code> module. The action can then be called in a controller (or anywhere else) as follows:</p>
<div class="code-block-title">
  <div class="code-block-title-bar">
    <span class="title" data-title="PageController.php">PageController.php</span>
  </div>
  <div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php"><pre v-pre><code><span class="line"><span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">index</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line highlighted">    <span class="token variable">$pageData</span> <span class="token operator">=</span> <span class="token function">app</span><span class="token punctuation">(</span><span class="token class-name static-context">GetAllPagesAction</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">handle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token class-name static-context">Inertia</span><span class="token operator">::</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'Pages::index'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token string single-quoted-string">'pages'</span> <span class="token operator">=></span> <span class="token class-name static-context">PageData</span><span class="token operator">::</span><span class="token function">collect</span><span class="token punctuation">(</span><span class="token variable">$pageData</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>
</div><h2 id="create-new-builder-components" tabindex="-1"><a class="header-anchor" href="#create-new-builder-components"><span>Create new Builder components</span></a></h2>
<p>ZioraCMS comes with some pre-defined, draggable components. However, you are not limited to this set of components. You can build your own components by just looking at how the core components are designed. That is the beauty of OpenSource.</p>
<p>ZioraCMS makes it easy to generate a new Builder component through a single command:</p>
<div class="language-bash" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">php artisan builder:make</span>
<span class="line"></span></code></pre>
</div><p>This will launch an interactive prompt where you can provide a name for the new component, and the category you want it to be created in (can be container, form, media, etc)</p>
<p>Basically, to create a draggable component, 3 files are required - <code v-pre>config.ts</code>, <code v-pre>settings.ts</code>, <code v-pre>render.vue</code> and <code v-pre>mycomponent.vue</code>.</p>
<ul>
<li><code v-pre>config.ts</code> - this contains configurable settings relate to the component, including styles, name, etc. The <code v-pre>id</code> has to be unique and must match the name of the directory and component of the custom element.</li>
<li><code v-pre>settings.ts</code> - this identifies the settings that should be rendered on the right sidebar of the Builder when the component is selected in the canvas.</li>
<li><code v-pre>mycomponent.vue</code> - this is the actual component and is the version rendered in the builder. So it includes all the markers required for building the interface (eg draggable events, builder outlines etc). NB: <code v-pre>mycomponent.vue</code> is just a placeholder name. The actual name will be the name you actually want to call your component and should be unique across the entire application.</li>
<li><code v-pre>render.vue</code> - this is like <code v-pre>mycomponent.vue</code>, but is the version that will be rendered to the frontend for end users. It excludes all draggable events. This is really not mandatory, but highly recommended. If it is absent, <code v-pre>mycomponent.vue</code> will be used to render to the frontend instead (please avoid doing this!).</li>
</ul>
<p>Your builder components can do pretty much anythin you want...you are only limited by your knowledge of Vue and Laravel. We have provided examples of <code v-pre>Testimonial</code> and <code v-pre>Form</code> components that show how you can build components that interact with the backend at runtime. These are created as examples for you to follow in building your own components. However, we intend to develop more components in future versions.</p>
</div></template>


