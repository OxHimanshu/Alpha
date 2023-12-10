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
    },
    195: {
        PROVIDER: "https://x1-testnet.blockpi.network/v1/rpc/public",
        REWARDS_CONTRACT: "0xE73a205F0205dC0422d4EFB27B458c567cb529b8",
        ALPHA_TOKEN_CONTRACT: "0xf55F6BCd848F71d5335F6188B7C343107A384787",
        PE_TOKEN_CONTRACT: "0x910605Cf714973AE054bD82C071EA22daD231Da3",
        C_TOKEN_CONTRACT: "0xF368fFCc1741A1ae70704d4D506a59D0614B8e00",
        USDC_TOKEN_CONTRACT: "0x20D4ba98E359e6C25339A4a75f8b9cde8C1c1204",
    },
    534351: {
        PROVIDER: "https://sepolia-rpc.scroll.io",
        REWARDS_CONTRACT: "0x10D468BBc5C3302E60fF24dE100eC40de7D5e65f",
        ALPHA_TOKEN_CONTRACT: "0xe96a84be101bc8406395E7cc15646A9EDD603b6F",
        PE_TOKEN_CONTRACT: "0x8c43137f01752Bd4d82cAa0e63ddDa6C30F75d63",
        C_TOKEN_CONTRACT: "0xc820620a400b1162Df371b15Efc90ecf60f3f2f1",
        USDC_TOKEN_CONTRACT: "0x14582375629EEadFbc2067dD3F74dB8656755C9f",
    },
    314159: {
        PROVIDER: "https://api.calibration.node.glif.io/rpc/v1",
        REWARDS_CONTRACT: "0xC4FAbC440e56094C3942f9858BaC8f14C4E98826",
        ALPHA_TOKEN_CONTRACT: "0xD00985561abb20C473FA1b5cf8bDC36b9a694787",
        PE_TOKEN_CONTRACT: "0xE17E37CC70D28687cbd7d250E376505679162291",
        C_TOKEN_CONTRACT: "0xbea25D0F9B56d2fE2386B3DC1EF519E1130743B3",
        USDC_TOKEN_CONTRACT: "0x52CD3742281b067f7862320F1D0CEf18d98a4540",
    },
    5001: {
        PROVIDER: "https://rpc.testnet.mantle.xyz",
        REWARDS_CONTRACT: "0xB08F775a0bABdc23121A3C500aC8C8CF357621A5",
        ALPHA_TOKEN_CONTRACT: "0x7aA8dAb0009C91DB268f3567ac1F7d99360f4442",
        PE_TOKEN_CONTRACT: "0xE0B6921A668bDFD88763749b061FFac52569B1C3",
        C_TOKEN_CONTRACT: "0x2B76bdd6f064D68151cCdfBa016263eCFa5B3550",
        USDC_TOKEN_CONTRACT: "0x38A588a595C172738f3068B72cc6F578196721e8",
    },
    44787: {
        PROVIDER: "https://alfajores-forno.celo-testnet.org",
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
    ],
    195: [
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
    ],
    534351: [
        {
            token: "USDC",
            address: "0x14582375629EEadFbc2067dD3F74dB8656755C9f",
            logo: "https://cryptologos.cc/logos/usd-coin-usdc-logo.svg?v=029",
            strategies: [
                {
                    months: 3,
                    ALPHA_CORE_CONTRACT: "0xD166fa003D524422c9c395CD4B67C92917d65d93",
                },
                {
                    months: 6,
                    ALPHA_CORE_CONTRACT: "0xbd747eB81484123f746058Add415465579c627da",
                },
                {
                    months: 9,
                    ALPHA_CORE_CONTRACT: "0xe621938834b46D62778c4E439ba46C35D31DF86e",
                },
                {
                    months: 12,
                    ALPHA_CORE_CONTRACT: "0x6c6CB8C1a8B1c8348490ACA29c975181480545D7",
                }
            ]
        }
    ],
    314159: [
        {
            token: "USDC",
            address: "0x52CD3742281b067f7862320F1D0CEf18d98a4540",
            logo: "https://cryptologos.cc/logos/usd-coin-usdc-logo.svg?v=029",
            strategies: [
                {
                    months: 3,
                    ALPHA_CORE_CONTRACT: "0x18697DB821e4f4575B9eDCc439A4963479F9bbA8",
                },
                {
                    months: 6,
                    ALPHA_CORE_CONTRACT: "0x92cF77fd1014B02bA90a7BABCbf91EA238ab3D92",
                },
                {
                    months: 9,
                    ALPHA_CORE_CONTRACT: "0xD80e3A0a8F48c7A3409B443aF0D3eD8db11002BC",
                },
                {
                    months: 12,
                    ALPHA_CORE_CONTRACT: "0x21C2f75730953330d20236bAA2F6768A323fBd65",
                }
            ]
        }
    ],
    5001: [
        {
            token: "USDC",
            address: "0x38A588a595C172738f3068B72cc6F578196721e8",
            logo: "https://cryptologos.cc/logos/usd-coin-usdc-logo.svg?v=029",
            strategies: [
                {
                    months: 3,
                    ALPHA_CORE_CONTRACT: "0x0DED84430733D41B6cF93318aC97A9ED3648d6fc",
                },
                {
                    months: 6,
                    ALPHA_CORE_CONTRACT: "0x6B7532abD5889F391f6e120D204D9c2D6F0898d1",
                },
                {
                    months: 9,
                    ALPHA_CORE_CONTRACT: "0x61Fc99D4012fd48528E859554822c67518f861fb",
                },
                {
                    months: 12,
                    ALPHA_CORE_CONTRACT: "0x88a4D9B337349d684d8f0a1cCf4316a0de4aC0b0",
                }
            ]
        }
    ],
    44787: [
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
                    ALPHA_CORE_CONTRACT: "0xC4FAbC440e56094C3942f9858BaC8f14C4E98826",
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