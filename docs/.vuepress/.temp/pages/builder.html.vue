<template><div><h1 id="working-with-the-site-builder" tabindex="-1"><a class="header-anchor" href="#working-with-the-site-builder"><span>Working with the site builder</span></a></h1>
<nav class="table-of-contents"><ul><li><router-link to="#login-and-first-steps">Login and first steps</router-link></li><li><router-link to="#create-a-site-structure">Create a site structure</router-link></li><li><router-link to="#the-site-builder">The Site Builder</router-link></li><li><router-link to="#versioning-pages-and-posts">Versioning pages and posts</router-link></li><li><router-link to="#file-manager">File manager</router-link></li><li><router-link to="#user-and-role-management">User and Role management</router-link></li></ul></nav>
<h2 id="login-and-first-steps" tabindex="-1"><a class="header-anchor" href="#login-and-first-steps"><span>Login and first steps</span></a></h2>
<p>Once installed, you can login with the user created when the application was initialized. To access the admin panel, navigate to <code v-pre>/cp/login</code>. The <code v-pre>Admin</code> user has access to all parts of the application and can do pretty much any thing.</p>
<p>When logged in, the first thing is to create your layouts, pages, posts and menu before launching the drag-and-drop builder.</p>
<h2 id="create-a-site-structure" tabindex="-1"><a class="header-anchor" href="#create-a-site-structure"><span>Create a site structure</span></a></h2>
<ol>
<li>
<p>Once logged in, the first step is to create a layout. On the sidebar, click on <code v-pre>Layouts</code> and the <code v-pre>New Layout</code>. All you need to create a layout is the <code v-pre>name</code> of the layout. The name should be unique across the platform.</p>
</li>
<li>
<p>Next create your pages and posts. Each Page and Post must be linked to a Layout. This can be done via <code v-pre>pages &gt; New page</code> or <code v-pre>posts &gt; New Post</code> links.</p>
</li>
<li>
<p>Then create a menu. This will be useful when building navigations in the drag-and-drop builder. The menu also comes with a drag-and-drop menu builder that allows you to add pages, posts and custom links to the menu.
<img src="@source/images/menu-builder.png" alt="Menu builder"></p>
</li>
</ol>
<h2 id="the-site-builder" tabindex="-1"><a class="header-anchor" href="#the-site-builder"><span>The Site Builder</span></a></h2>
<p>Layouts, Pages and Posts can be edited using the drag-and-drop site builder.</p>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>Start by building your layouts before moving on to pages and posts.</p>
</div>
<ul>
<li>
<p>Go to <code v-pre>Layout builder</code> on the sidebar menu in the Admin panel</p>
</li>
<li>
<p>Click on <code v-pre>Edit layout</code> in the dropdown menu visible on each layout in the list table. This will launch the drag and drop builder.
<img src="@source/images/layouts.png" alt="Menu builder"></p>
</li>
<li>
<p>The builder interface is meant to be very intuitive as shown below.
<img src="@source/images/layout-builder.png" alt="Menu builder"></p>
</li>
<li>
<p>In the left sidebar, there is a section for <code v-pre>Elements</code> which contains UI elements that can be dragged and dropped to the canvas. Each element type has settings specific to it.</p>
</li>
<li>
<p>The left sidebar also contains <code v-pre>Blocks</code>. These are pre-built components just to give you a head start, and they can be edited as you see fit, or not used at all.</p>
</li>
<li>
<p>At the bottom of the left sidebar is the <code v-pre>Element tree</code>. This is very useful when you have many elements on the page and can easily lose track of what is what. You can rearrange elements on the tree by dragging and dropping as well.</p>
</li>
<li>
<p>The center of the builder is the Canvas. This is where you drop page components.</p>
</li>
<li>
<p>When an element is selected on the canvas, the settings for that element appear on the right sidebar, allowing you to customize styles and other unique properties of the component.</p>
</li>
<li>
<p>On the top bar, you can switch between 3 device styles. The styles set for each component will apply to that component on the selected device size. The fallback is the <code v-pre>Desktop</code> styles.</p>
</li>
<li>
<p>To the right of the top bar are action buttons to preview, save as draft or save and publish. You can also zoom and pan on the canvas from there.</p>
</li>
</ul>
<h2 id="versioning-pages-and-posts" tabindex="-1"><a class="header-anchor" href="#versioning-pages-and-posts"><span>Versioning pages and posts</span></a></h2>
<p>ZioraCMS allows you to edit versions of the page without publishing them to the front end. When a page or post is being edited, you can choose to <code v-pre>Save as draft</code>. If so, the current version will be saved but will not be published. You can also do <code v-pre>Save and publish</code> which will both save and publish the current changes.
Click on the <code v-pre>Preview</code> button to see how the current draft changes will look when published.
<img src="@source/images/publish-buttons.png" alt="Buttons"></p>
<h2 id="file-manager" tabindex="-1"><a class="header-anchor" href="#file-manager"><span>File manager</span></a></h2>
<p>ZioraCMS has a built-in file manager. For now, only images (jpeg, gif, png) are allowed but there are plans to expand to other file types in the future.</p>
<p>When editing pages in the builder, you can pick images (eg background images) simply by clicking on the button in the element settings. This will launch the file manager where you can pick an existing image or upload a new image and then pick it.</p>
<p><img src="@source/images/file-manager.png" alt="File manager"></p>
<p>Files are uploaded using <code v-pre>chunk uploads</code> so, even though not quite advisable, large files can be uploaded faster as they are broken down into <code v-pre>1MB</code> chunks and sent to the server.</p>
<h2 id="user-and-role-management" tabindex="-1"><a class="header-anchor" href="#user-and-role-management"><span>User and Role management</span></a></h2>
<p>Admin users can manage users and their roles. They can also control what each role can do using predefined permissions. New users can be created and assigned roles. Once users are created, they can go to the interface to reset their passwords or login using the password created by admin.</p>
<p>ZioraCMS uses <a href="https://spatie.be/docs/laravel-permission/v6/introduction" target="_blank" rel="noopener noreferrer">Spatie Permissions</a> package to assign permissions to roles. Then it uses policies to authorize actions both in the backend and front end. As site admin, you can control the permissions for each role from then interface.
<img src="@source/images/permissions.png" alt="Permissions"></p>
<p>The application comes with some predefined roles, but you are allowed to create new roles as required.</p>
</div></template>


