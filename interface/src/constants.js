export const tokenContract = {
    80001: {
        PROVIDER: "https://rpc-mumbai.maticvigil.com",
        REWARDS_CONTRACT: "0xA7189cc5daeDA3017Bb715F10a212afBda20d009",
        ALPHA_TOKEN_CONTRACT: "0x76dcD135EeA0C02eb2fa0Fd3923F5B320C5B89f6",
        PE_TOKEN_CONTRACT: "0xC44e9bA16CcCd8Cc8Fec456Ef5fc78E1199cfCee",
        C_TOKEN_CONTRACT: "0x7D5f0e7059000DF158042E57f0c14EF2067E08f5",
        USDC_TOKEN_CONTRACT: "0xAf91C88386b1d4deC29f9fe41c332C7f6FFe7beC",
    },
    1442: {
        PROVIDER: "https://rpc.public.zkevm-test.net",
        REWARDS_CONTRACT: "0xE73a205F0205dC0422d4EFB27B458c567cb529b8",
        ALPHA_TOKEN_CONTRACT: "0xF368fFCc1741A1ae70704d4D506a59D0614B8e00",
        PE_TOKEN_CONTRACT: "0xf55F6BCd848F71d5335F6188B7C343107A384787",
        C_TOKEN_CONTRACT: "0x910605Cf714973AE054bD82C071EA22daD231Da3",
        USDC_TOKEN_CONTRACT: "0x20D4ba98E359e6C25339A4a75f8b9cde8C1c1204",
    }
}
// 7776000
// 15552000
// 23328000
// 31104000
export const activeStrategies = {
    80001: [
        {
            token: "USDC",
            address: "0xAf91C88386b1d4deC29f9fe41c332C7f6FFe7beC",
            logo: "https://cryptologos.cc/logos/usd-coin-usdc-logo.svg?v=029",
            strategies: [
                {
                    months: 3,
                    ALPHA_CORE_CONTRACT: "0xfaf23022F0A5F4E3Ba839F29e5A8b9ac339a792D",
                },
                {
                    months: 6,
                    ALPHA_CORE_CONTRACT: "0x9852a21D5549F9885Fa353E2439e138583bfC3D3",
                },
                {
                    months: 9,
                    ALPHA_CORE_CONTRACT: "0x021B72dF1349fe1cCF0a32d29e3aD51d7E0342f2",
                },
                {
                    months: 12,
                    ALPHA_CORE_CONTRACT: "0xE74d1acB7Bf8d15Ee3cA201cAED531f1c898FA71",
                }
            ]
        }
    ],
    1442: [
        {
            token: "USDC",
            address: "0x20D4ba98E359e6C25339A4a75f8b9cde8C1c1204",
            logo: "https://cryptologos.cc/logos/usd-coin-usdc-logo.svg?v=029",
            strategies: [
                {
                    months: 3,
                    ALPHA_CORE_CONTRACT: "0xC4FAbC440e56094C3942f9858BaC8f14C4E98826",
                },
                {
                    months: 6,
                    ALPHA_CORE_CONTRACT: "0xE17E37CC70D28687cbd7d250E376505679162291",
                },
                {
                    months: 9,
                    ALPHA_CORE_CONTRACT: "0xbea25D0F9B56d2fE2386B3DC1EF519E1130743B3",
                },
                {
                    months: 12,
                    ALPHA_CORE_CONTRACT: "0x52CD3742281b067f7862320F1D0CEf18d98a4540",
                }
            ]
        }
    ]
}