package org.matadini.account;

import lombok.Builder;

import java.math.BigDecimal;

@Builder
record BankAccountDto(Long bankAccountId,
                      String accountName,
                      String accountNumber,
                      BigDecimal availableBalance,
                      BigDecimal ledgerBalance,
                      BankAccountType accountType) {
}

