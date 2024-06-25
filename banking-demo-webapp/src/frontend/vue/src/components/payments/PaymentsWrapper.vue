<template>
    <div class="row">
        <div class="col-4" >
            <div class="nav nav-pills me-3 flex-column " aria-orientation="vertical">
                <router-link to="/payments/new" class="nav-link btn" :class="{ 'active': $route.path === '/payments/new'}" >
                    Przelew krajowy
                </router-link>

                <router-link to="/payments/own" class="nav-link btn" :class="{ 'active': $route.path === '/payments/own'}" type="button">
                    Przelew własny
                </router-link>

                <router-link to="/payments/1" class="nav-link btn" :class="{ 'active': $route.path === '/payments/1'}" type="button">
                    Przelew walutowy / zagraniczny
                </router-link>

                <router-link to="/payments/2" class="nav-link btn" :class="{ 'active': $route.path === '/payments/2'}" type="button">
                    Przelew podatkowy
                </router-link>

                <router-link to="/payments/3" class="nav-link btn" :class="{ 'active': $route.path === '/payments/3'}" type="button">
                    Doładowanie telefonu
                </router-link>

                <router-link to="/payments/4" class="nav-link btn" :class="{ 'active': $route.path === '/payments/4'}" type="button">
                    Otwarta bankowość
                </router-link>
            </div>
        </div>
        <div class="col">
            <router-view></router-view>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped></style>