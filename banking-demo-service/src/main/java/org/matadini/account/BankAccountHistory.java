package org.matadini.account;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Builder;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Builder
record BankAccountHistory(
        String transactionTitle,
        @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss") LocalDateTime transactionDate,
        BigDecimal amountValue,
        String currency) {
}
