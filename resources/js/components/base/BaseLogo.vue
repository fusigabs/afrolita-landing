<template>
    <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 210">
        <text transform="translate(0 175.83)" :fill="isDark ? '#ffffff' : '#231f20'"
            font-family="TimesNewRomanPSMT, &apos;Times New Roman&apos;" font-size="211.57" letter-spacing="-.04em">
            <tspan x="0" y="0">afrolita</tspan>
        </text>
        <circle cx="385.57" cy="41.01" r="15.02" fill="#af6cad" />
    </svg>
</template>

<script setup lang="ts">
defineProps({
    isDark: {
        type: Boolean,
        default: false
    }
})
</script>

<style lang="scss" scoped></style>