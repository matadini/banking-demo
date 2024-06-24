package org.matadini.account;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;


@RestController
@RequestMapping("/api/v1/bank/accounts")
class BankAccountController {

    @GetMapping("/owner/{ownerId}")
    List<BankAccountDto> getAccountsByUserId(@PathVariable(name = "ownerId") Long ownerId) {
        return List.of(
                BankAccountDto.builder()
                        .accountName("Savings account")
                        .accountType(BankAccountType.SAVINGS)
                        .ledgerBalance(BigDecimal.valueOf(500))
                        .availableBalance(BigDecimal.valueOf(300))
                        .accountNumber("020250607")
                        .build(),
                BankAccountDto.builder()
                        .accountName("Savings account")
                        .accountType(BankAccountType.SAVINGS)
                        .ledgerBalance(BigDecimal.valueOf(500))
                        .availableBalance(BigDecimal.valueOf(9000))
                        .accountNumber("020252317")
                        .build(),
                BankAccountDto.builder()
                        .accountName("Checking account")
                        .accountType(BankAccountType.CHECKING)
                        .ledgerBalance(BigDecimal.valueOf(1000))
                        .availableBalance(BigDecimal.valueOf(800))
                        .accountNumber("153794600")
                        .build());
    }

    @GetMapping("/owner/{ownerId}/history")
    List<BankAccountHistory> getAccountsHistoryByUserId(@PathVariable(name = "ownerId") Long ownerId) {
        return List.of(
                BankAccountHistory.builder()
                        .transactionTitle("Transaction I")
                        .amountValue(BigDecimal.valueOf(-15))
                        .currency("PLN")
                        .transactionDate(LocalDateTime.now())
                        .build(),
                BankAccountHistory.builder()
                        .transactionTitle("Transaction 3")
                        .amountValue(BigDecimal.valueOf(-15))
                        .currency("PLN")
                        .transactionDate(LocalDateTime.now())
                        .build(),
                BankAccountHistory.builder()
                        .transactionTitle("Transaction 2")
                        .amountValue(BigDecimal.valueOf(-50))
                        .currency("PLN")
                        .transactionDate(LocalDateTime.now())
                        .build());
    }



}
