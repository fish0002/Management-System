<template>{{ user.userinfo }}</template>

<script setup lang="ts">
import { useStore } from '@/store/user';
const user = useStore();
</script>

<style lang="scss" scoped></style>
