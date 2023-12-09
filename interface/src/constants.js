export const tokenContract = {
    80001: {
        PROVIDER: "https://rpc-mumbai.maticvigil.com",
        REWARDS_CONTRACT: "0xA7189cc5daeDA3017Bb715F10a212afBda20d009",
        ALPHA_TOKEN_CONTRACT: "0x76dcD135EeA0C02eb2fa0Fd3923F5B320C5B89f6",
        PE_TOKEN_CONTRACT: "0xC44e9bA16CcCd8Cc8Fec456Ef5fc78E1199cfCee",
        C_TOKEN_CONTRACT: "0x7D5f0e7059000DF158042E57f0c14EF2067E08f5",
        USDC_TOKEN_CONTRACT: "0xAf91C88386b1d4deC29f9fe41c332C7f6FFe7beC",
    }
}

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
        },
        // {
        //     token: "USDT",
        //     logo: "https://cryptologos.cc/logos/tether-usdt-logo.svg?v=029",
        //     strategies: [
        //         {
        //             months: 3,
        //             ALPHA_CONTRACT: "",
        //         },
        //         {
        //             months: 6,
        //             ALPHA_CONTRACT: "",
        //         },
        //         {
        //             months: 9,
        //             ALPHA_CONTRACT: "",
        //         },
        //         {
        //             months: 12,
        //             ALPHA_CONTRACT: "",
        //         }
        //     ]
        // },
        // {
        //     token: "DAI",
        //     logo: "https://cryptologos.cc/logos/multi-collateral-dai-dai-logo.svg?v=029",
        //     strategies: [
        //         {
        //             months: 3,
        //             ALPHA_CONTRACT: "",
        //         },
        //         {
        //             months: 6,
        //             ALPHA_CONTRACT: "",
        //         },
        //         {
        //             months: 9,
        //             ALPHA_CONTRACT: "",
        //         },
        //         {
        //             months: 12,
        //             ALPHA_CONTRACT: "",
        //         }
        //     ]
        // },
    ]
}