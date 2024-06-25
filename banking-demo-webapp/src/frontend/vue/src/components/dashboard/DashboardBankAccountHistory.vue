<template>
    <h3>Transaction</h3>
    <div class="list-group list-group-flush border-bottom scrollarea">
        <Suspense>
            <template #default>
                <div v-if="bankAccountHistory.length">
                    <div v-for="transaction in bankAccountHistory">
                        <a href="#" class="list-group-item list-group-item-action py-3 lh-tight my-1">
                            <div class="row">
                                <div class="col">{{ transaction.transactionTitle }}</div>
                                <div class="col text-end">{{ transaction.amountValue }}
                                    {{ transaction.currency }}</div>
                                <div class="w-100"></div>
                                <div class="col">{{ transaction.transactionDate }}</div>
                                <div class="col text-end"></div>
                            </div>
                        </a>
                    </div>
                </div>
                <div v-else>
                    <div class="d-flex justify-content-center">
                        <div class="spinner-border" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </div>
                </div>
            </template>
            <template #fallback>
                <div class="d-flex justify-content-center">
                    <div class="spinner-border" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
            </template>
        </Suspense>


    </div>
</template>

<script lang="ts" scoped>
import { defineComponent, ref, onMounted } from 'vue';
import type { BankAccountHistory } from '@/model/bank-account-history';

export default defineComponent({
    setup() {

        const bankAccountHistory = ref<BankAccountHistory[]>([]);

        const getBankAccounts = async () => {
            await new Promise((resolve) => setTimeout(resolve, 2000));
            bankAccountHistory.value = [
                {
                    transactionTitle: "t1",
                    transactionDate: "t2",
                    amountValue: 12,
                    currency: "t3",
                }
            ];
        }

        onMounted(async () => {
            await getBankAccounts();
        });

        return {
            bankAccountHistory,
        };
    },
});
</script>


<style scoped></style>