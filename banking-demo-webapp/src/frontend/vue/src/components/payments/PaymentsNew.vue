<template>
    <div class="container my-3">
        <div class="d-flex justify-content-center">
            <p class="lead">
                Utwórz przelew krajowy
            </p>
        </div>
        <form @submit.prevent="submitForm">
            <div class="row my-3">
                <div class="col-12 py-3">
                    <small>Z rachunku</small>
                    <select v-model="form.account" class="form-select">
                        <option v-for="account in accounts" :value="account">{{ account.accountNumber }}</option>
                    </select>

                </div>
                <div class="col-6 my-4 ">
                    <MDBInput label="Nazwa odbiorcy" v-model="form.targetName"
                        invalidFeedback="Please provide your first name" validFeedback="Looks good!"
                        validationEvent="input" required title="Must contain between 5 and 30 characters" minLength="5"
                        maxLength="30" />
                </div>
                <div class="col-6 my-4">
                    <MDBInput label="Numer rachunku" v-model="form.targetAccountNumber"
                        invalidFeedback="Please provide your first name" validFeedback="Looks good!"
                        validationEvent="input" required title="Must contain between 5 and 30 characters" minLength="5"
                        maxLength="30" />
                </div>
                <div class="col-6 my-4">
                    <MDBInput label="Kwota przelewu" v-model="form.amount"
                        invalidFeedback="Please provide your first name" validFeedback="Looks good!"
                        validationEvent="input" required title="Must contain between 5 and 30 characters" minLength="5"
                        maxLength="30" />
                </div>
                <div class="col-6 my-4">
                    <MDBInput label="Tytuł przelewu" v-model="form.transferName"
                        invalidFeedback="Please provide your first name" validFeedback="Looks good!"
                        validationEvent="input" required title="Must contain between 5 and 30 characters" minLength="5"
                        maxLength="30" />
                </div>
                <div class="col-12  my-2">
                    <div class="d-flex justify-content-end ">

                        <button class="btn btn-primary" type="submit">Dalej</button>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<script setup lang="ts">
import { MDBInput } from 'mdb-vue-ui-kit';
import { reactive } from 'vue';
import type { BankAccount } from '@/model/bank-account';

let accounts: BankAccount[] = [
    {
        accountName: "1",
        accountNumber: "2",
        availableBalance: 0,
        ledgerBalance: 0,
        accountType: "5",
    },
    {
        accountName: "3",
        accountNumber: "4",
        availableBalance: 0,
        ledgerBalance: 0,
        accountType: "6",
    }
];

const form = reactive({
    account:  accounts[0],
    targetName: null,
    targetAccountNumber: null,
    amount: null,
    transferName: null
})

function submitForm() {
    console.log('Dane formularza:', form);
}

</script>