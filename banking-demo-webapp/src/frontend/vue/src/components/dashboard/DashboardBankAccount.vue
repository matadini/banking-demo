<template>
    <div>
        <h3>My wallet</h3>
        <Suspense>
            <template #default>
                <div v-if="bankAccounts.length">
                    <div v-for="account in bankAccounts" :key="account.accountNumber">
                        <router-link to="/" class="card">
                            <div class="card-header">
                                {{ account.accountName }}
                            </div>
                            <div class="card-body ">
                                <div class="row">
                                    <div class="col-6">
                                        <h5 class="card-title">Account number:</h5>
                                        <p class="card-text">{{ account.accountNumber }}</p>
                                    </div>

                                    <div class="col-3">
                                        <h5 class="card-title">Ledger Balance</h5>
                                        <p class="card-text">{{ account.ledgerBalance }}</p>
                                    </div>

                                    <div class="col-3">
                                        <h5 class="card-title">Available Balance</h5>
                                        <p class="card-text">{{ account.availableBalance }}</p>
                                    </div>
                                </div>
                                <div
                                    class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-1 border-bottom">
                                </div>
                                <div class="d-flex flex-row-reverse mt-2">
                                    <a href="#" class="btn btn-primary">Send a transfer</a>
                                </div>
                            </div>
                        </router-link>
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

        <h3>My cards</h3>
        <div class="card my-2">
            <div class="card-header">
                Featured
            </div>
            <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.
                </p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </div>
</template>


<script lang="ts" scoped>
import { defineComponent, ref, onMounted, onUpdated, type Ref } from 'vue';
import type { BankAccount } from '@/model/bank-account';



export default defineComponent({
    setup() {
        const bankAccounts: Ref<BankAccount[]> = ref<BankAccount[]>([]);

        const getBankAccounts = async () => {
            await new Promise((resolve) => setTimeout(resolve, 2000));
            bankAccounts.value = [
                {
                    accountName: "null",
                    accountNumber: "null",
                    availableBalance: 0,
                    ledgerBalance: 0,
                    accountType: "null",
                }
            ];
        }

        onMounted(async () => {
            await getBankAccounts();
        });
        return {
            bankAccounts,
        };
    },
});
</script>

<style scoped></style>