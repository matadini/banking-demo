<template>
    <div>
        <DashboardCarouselComponent/>
        <div>
            <div class="row p-2">
                <div class="col-8">
                    <DashboardBankAccountComponent/>
                </div>

                <div class="col-4">
                    <DashboardBankAccountHistoryComponent/>
                </div>
            </div>
        </div>
    </div>

</template>


<script lang="ts" scoped>
import { defineComponent } from 'vue';
import DashboardBankAccountComponent from './DashboardBankAccount.vue';
import DashboardBankAccountHistoryComponent from './DashboardBankAccountHistory.vue';
import DashboardCarouselComponent from './DashboardCarousel.vue';

export default defineComponent({
    components: {
        DashboardBankAccountComponent, DashboardBankAccountHistoryComponent, DashboardCarouselComponent
    },
    setup() {

    },
});
</script>
