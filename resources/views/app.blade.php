<!DOCTYPE html>
<html class="!min-h-[100svh] !bg-indigo-950 !scroll-smooth" lang="{{ str_replace('_', '-', app()->getLocale()) }}"  @class(['dark' => true])>
{{-- <html lang="{{ str_replace('_', '-', app()->getLocale()) }}"  @class(['dark' => ($appearance ?? 'system') == 'dark'])> --}}
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        

        {{-- Inline style to set the HTML background color based on our theme in app.css --}}
        <style>
            html {
                background-color: oklch(1 0 0);
            }

            html.dark {
                background-color: oklch(0.145 0 0);
            }
        </style>

        <title inertia>{{ config('app.name', 'Laravel') }}</title>

        <link rel="icon" href="/favicon.ico" sizes="any">
        <link rel="icon" href="/favicon.svg" type="image/svg+xml">
        <link rel="apple-touch-icon" href="/apple-touch-icon.png">

        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400;500;600;700;800;900&family=Inter:wght@200;300;400;500;600&display=swap" rel="stylesheet">

        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600|anton:400" rel="stylesheet" />
        <link href="https://fonts.cdnfonts.com/css/uber-move-text" rel="stylesheet">
        
        @routes
        @vite(['resources/js/app.ts'])
        @inertiaHead

        <!-- Google tag (gtag.js) -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-3HKRGYH0C5"></script>
        <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-3HKRGYH0C5');
        </script>
    </head>
    <body class="font-sans antialiased !min-h-screen bg-gray-900">
        @inertia
    </body>
</html>
