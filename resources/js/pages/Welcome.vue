<script setup lang="ts">
import { Head, useForm } from '@inertiajs/vue3';
import { MapPin, Scissors, Users, Home, Banknote, DollarSign, House, CalendarDays, Armchair, Handshake, Loader } from 'lucide-vue-next';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

defineProps<{
    status?: string;
}>();


const form = useForm({
    email: '',
    location: ''
})


const features: Record<string, any>[] = [
    { title: 'Keep 90-95% of Earnings', description: 'No more 50/50 salon splits. You do the work, you keep the money. Platform fee is just 10-15%.', icon: DollarSign },
    { title: 'Work Anywhere', description: "Home studio, client's location, or mobile services. Complete flexibility to work where you're most comfortable.", icon: House },
    { title: 'Easy Client Management', description: 'Built-in booking system, payment processing, and client communication tools. Focus on hair, not admin.', icon: Users },
    { title: 'Build Your Brand', description: 'Showcase your work, build your reputation, and develop a loyal client base that follows you.', icon: Armchair },
    { title: 'Your Schedule, Your Rules', description: "Set your own hours, prices, and availability. No more working weekends if you don't want to.", icon: CalendarDays },
    { title: 'Supportive Community', description: 'Connect with other independent stylists, share tips, and grow together in a supportive environment.', icon: Handshake }
];

const faqs = [
    {
        value: 'item-3b',
        title: 'Is Afrolita for Hair Salons or Established Businesses?',
        content: "No. Afrolita is created to link individuals who have the craft to promote Afro-hair and beauty styles to local clients. \
        You don't need a salon and do not have to be registered as a business to create a profile and receive bookings."
    },
    {
        value: 'item-1',
        title: 'How much will it cost for stylists to create a profile?',
        content: 'Nothing. It is totally free to set up your profile. We only take 5-10% of the booking, so we only make money when you make money.'
    },

    {
        value: 'item-6',
        title: 'How does it work really?',
        content: 'If you think you have the skills to do any hair style (braids, weaves, wigs, etc), create a free stylist profile. Add your services, \
        pricing and schedule. Potential clients can then book your services and you get paid once you deliver.'
    },
    {
        value: 'item-7',
        title: 'How secure is the payment system?',
        content: 'We are partnering with Stripe to bring you secure card payments. You will go through a short onboarding flow to get your profile setup, which will \
        include free connection to Stripe. You will get paid in time, and securely!'
    }
]

import Background from '@/components/Background.vue';
import BaseLogo from '@/components/base/BaseLogo.vue';
import Compare from '@/components/ui/compare/Compare.vue';


function submit() {
    form.post(route('leads'), {
        onSuccess: () => {
            form.reset()
        }
    })
}
</script>

<template>

    <Head title="Connecting Afro-stylists to local clients" />

    <div class="bg-black overflow-hidden">
        <header class="sticky backdrop-blur inset-x-0 top-0 z-50">
            <nav class="flex text-white flex-col gap-1 w-full items-center justify-center container mx-auto py-6"
                aria-label="Global">
                <img src="/logo.png" alt="Afrolita Logo" class="h-14 w-auto" />
                <p class="text-lg text-brown-100">Connecting Afro-beauty pros to local clients.</p>
            </nav>
        </header>

        <div class="relative isolate py-10 md:py-28">
            <Background />

            <div class="container relative z-10 mx-auto grid max-w-7xl gap-10 px-4 md:grid-cols-2 md:items-center">
                <div class="text-white">
                    <div
                        class="mb-4 animate-in zoom-in-90 duration-1000 flex md:inline-flex items-center gap-2 rounded-lg bg-brown px-3 py-1 text-base text-white">
                        Platform launching soon. Join the waitlist!
                    </div>

                    <div class="hero-text">
                        <div
                            class="text-center md:text-left text-4xl lg:text-6xl font-serif font-bold mb-5 leading-tight animate-in slide-in-from-top-25 duration-1000">
                            <span class="luxury-text">Build Your Independent</span> <br />
                            <span class="font-serif font-extrabold text-brown-300 script sparkle">Afro
                                Beauty
                            </span>&nbsp;
                            <span class="luxury-text">Empire</span>
                        </div>
                        <p
                            class="mt-4 text-center md:text-left max-w-xl text-zinc-300 animate-in slide-in-from-bottom-25 duration-1000">
                            Join the platform that puts you first. Keep 90-95% of your earnings, build your client base,
                            and work on your own terms.
                        </p>
                        <ul
                            class="mt-6 grid grid-cols-1 gap-1 text-zinc-300 sm:grid-cols-3 animate-in slide-in-from-right-10 duration-1000">
                            <li class="flex items-center gap-2">
                                <MapPin class="size-4" />
                                Local demand
                            </li>
                            <li class="flex items-center gap-2">
                                <Banknote class="size-4" />
                                No salon splits
                            </li>
                            <li class="flex items-center gap-2">
                                <Home class="size-4" />
                                Work from anywhere
                            </li>
                        </ul>

                        <div class="mt-8 animate-in slide-in-from-right-10 duration-1000">
                            <p class="my-3 text-sm text-zinc-200">
                                Get notified to set up your
                                <span class="text-brown-300 font-bold">FREE</span>
                                profile when we go live!
                            </p>

                            <form @submit.prevent="submit" class="grid gap-2 sm:grid-cols-[1fr_1fr_auto]">
                                <div class="sm:col-span-1">
                                    <label htmlFor="email" class="sr-only">
                                        Email address
                                    </label>
                                    <Input id="email" v-model="form.email" name="email" type="email"
                                        autoComplete="email" placeholder="Your email"
                                        class="h-10 w-full bg-white text-black placeholder:text-zinc-500" required />
                                    <p v-if="form.errors.email" class="mt-1 text-xs text-brown-400">
                                        {{ form.errors.email }}
                                    </p>
                                </div>
                                <div class="sm:col-span-1">
                                    <label htmlFor="city" class="sr-only">
                                        City
                                    </label>
                                    <Input id="city" v-model="form.location" name="city" type="text"
                                        placeholder="City (optional)"
                                        class="h-10 w-full bg-white text-black placeholder:text-zinc-500" />
                                </div>

                                <Button variant="brown" :disabled="form.processing" class="!h-11 cursor-pointer"
                                    size="lg">
                                    <Loader v-if="form.processing" class="size-5 animate-spin" /> Notify me!
                                </Button>

                            </form>
                        </div>
                        <p class="mt-3 text-sm text-center md:text-left font-bold text-zinc-300">Your Chair . Your
                            Choice . Your
                            Crown.
                        </p>
                        <div v-if="status"
                            class="p-2 animate-in fade-in duration-700 text-sm rounded bg-green-200 mt-2 text-green-800">
                            {{ status }}
                        </div>
                    </div>
                </div>
                <div class="relative">
                    <div
                        class="relative mx-auto aspect-[4/5] w/full max-w-md overflow-hidden rounded-2xl ring-1 ring-zinc-800">
                        <Compare :autoplay="true" first-image="/images/after2.jpg" second-image="/images/before.jpg"
                            first-content-class="object-cover object-top size-full"
                            second-content-class="object-cover object-top" class="size-full" :autoplay-duration="6000"
                            slide-mode="hover">
                            <template #second-content>
                                <div class="flex size-full items-center justify-center relative">
                                    <img src="/images/after2.jpg" class="object-cover object-top size-full">
                                    <div
                                        class="text-2xl absolute bottom-0 right-0 bg-brown p-2 font-bold text-white/80">
                                        After
                                    </div>
                                </div>
                            </template>
                            <template #first-content>
                                <div class="flex size-full items-center justify-center relative">
                                    <img src="/images/before.jpg" class="object-cover object-top size-full">
                                    <div class="text-2xl absolute top-0 left-0 bg-brown p-2 font-bold text-white/80">
                                        Before
                                    </div>
                                </div>
                            </template>
                        </Compare>
                    </div>

                    <div
                        class="absolute z-20 left-0 -bottom-6 right-0 hidden w-56 rounded-xl bg-brown-900/50 p-4 text-zinc-200 ring-1 ring-zinc-800 backdrop-blur md:block">
                        <div class="flex items-center gap-2">
                            <Scissors class="h-4 w-4 text-brown-400" />
                            <p class="text-sm">Know how to braid?</p>
                        </div>
                        <p class="mt-1 text-sm text-zinc-200">Get paid for transforming looks!</p>
                    </div>

                    <div
                        class="absolute z-20 -top-20 right-0 hidden w-56 rounded-xl bg-brown-950/50 p-4 text-zinc-200 ring-1 ring-zinc-800 backdrop-blur md:block">
                        <div class="flex items-center gap-2">
                            <Scissors class="h-4 w-4 text-brown-400" />
                            <p class="text-sm">Build confidence</p>
                        </div>
                        <p class="mt-1 text-sm text-zinc-200">Build Beauty Beyond Boundaries!</p>
                    </div>
                </div>
            </div>
        </div>


        <div id="features" class="py-10 md:py-20 md:pb-40 bg-secondary relative isolate">
            <div class="absolute right-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:right-[calc(50%-18rem)] lg:right-48 lg:top-[calc(50%-30rem)] xl:right-[calc(50%-24rem)]"
                aria-hidden="true">
                <div class="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20"
                    style="clip-path: polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)" />
            </div>
            <div class="mx-auto max-w-7xl text-gray-900">
                <h1 class="text-center text-black font-serif _font-anton text-3xl lg:text-6xl">Why Choose Afrolita?</h1>
                <p class="text-center text-xl max-w-xl mx-auto my-6">
                    Break free from salon politics, booth rent, and commission splits. Build the independent beauty
                    business
                    you've always dreamed of.
                </p>
                <div class="mt-2 grid gap-6 p-4 lg:p-0 rounded-lg lg:mt-10 lg:grid-cols-3">
                    <div class=" bg-white rounded ring-1 ring-gray-200 hover:ring-brown-400 p-8 shadow-lg text-gray-800"
                        v-for="(feature, index) in features" :key="index">
                        <div class="mb-2 flex flex-col _items-center gap-2 text-2xl font-bold text-gray-700">
                            <div class="size-16 rounded-full bg-brown flex items-center justify-center">
                                <component :is="feature.icon" class="text-brown-50 size-8" />
                            </div>
                            <h1>{{ feature.title }}</h1>
                        </div>
                        <p>{{ feature.description }}</p>
                    </div>
                </div>
            </div>
        </div>


        <div id="faqs" class="py-10 bg-gray-900 isolate relative">
            <Background />
            <h1 class="text-center text-white font-anton text-3xl lg:text-5xl">Frequently Asked Questions</h1>
            <div class="mt-2 bg-whitex max-w-3xl mx-auto p-6 rounded-xl lg:mt-10">
                <Accordion type="single" class="w-full flex flex-col gap-2" collapsible>
                    <AccordionItem v-for="item in faqs" :key="item.value" :value="item.value"
                        class="border-b-none ring ring-gray-700 border-l-8 bg-gray-900/50 border-gray-900/50 data-[state=open]:border-l-brown-500">
                        <AccordionTrigger
                            class="text-lg text-gray-100 rounded-none  px-4 hover:no-underline cursor-pointer">
                            {{ item.title }}
                        </AccordionTrigger>
                        <AccordionContent class="p-4 text-base text-gray-300">
                            {{ item.content }}
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>

        <div class="py-10 bg-gray-900 text-gray-300 border-t border-gray-700">
            <h1 class="text-center text-sm">
                &copy; Afrolita 2025. All rights reserved. With ♥️ for black stylists.
            </h1>
        </div>
    </div>

</template>

<style>
.shadow-brand {
    box-shadow:
        0 100px 80px rgba(55, 71, 137, 0.09),
        0 42px 32px rgba(55, 71, 137, 0.06),
        0 22px 18px rgba(55, 71, 137, 0.05),
        0 12px 10px rgba(55, 71, 137, 0.04),
        0 6.5px 5px rgba(55, 71, 137, 0.03),
        0 3px 2px rgba(55, 71, 137, 0.02);
}


.hero-text .luxury-text {
    background: linear-gradient(45deg, #000000 0%, #333333 50%, #000000 100%);
    -webkit-background-clip: text;
    background-clip: text;
    text-shadow: 0 0 30px rgba(255, 255, 255, 0.1);
}

.hero-text .script {
    font-family: 'Playfair Display', serif;
    font-style: italic;
    font-weight: 300;
    position: relative;
}

.hero-text .script::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent 0%, white 50%, transparent 100%);
    opacity: 0.8;
}
</style>
