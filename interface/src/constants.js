export const tokenContract = {
    6_907_316: {
        PROVIDER: "https://avail.tryscatter.xyz",
        REWARDS_CONTRACT: "0xe1e249DD62D13bE1d6AA4B1b8aA55D5230a53550",
        ALPHA_TOKEN_CONTRACT: "0x50bF87a2c3d13d0Ba131F17740612ac9a149cE10",
        PE_TOKEN_CONTRACT: "0xF04445aA90D55b0307d9756bFE4789E94CdFab61",
        C_TOKEN_CONTRACT: "0x60D8973858A4141F49C96B9F059Ad84EEDcee405",
        USDC_TOKEN_CONTRACT: "0xa65419Ae1552172377dAb903054714BA95493aD7",
    }
}
// 7776000
// 15552000
// 23328000
// 31104000
export const activeStrategies = {
    6_907_316: [
        {
            token: "USDC",
            address: "0xa65419Ae1552172377dAb903054714BA95493aD7",
            logo: "https://cryptologos.cc/logos/usd-coin-usdc-logo.svg?v=029",
            strategies: [
                {
                    months: 3,
                    ALPHA_CORE_CONTRACT: "0x317d8DFE349B07E3A33BEd880719147C2243Ab29",
                },
                {
                    months: 6,
                    ALPHA_CORE_CONTRACT: "0x3Df669A884c590a0494fCd9154faA5A5b41D5E0F",
                },
                {
                    months: 9,
                    ALPHA_CORE_CONTRACT: "0x93d87b2b0384AfD728bAd237208Fbe256B8Fc4c7",
                },
                {
                    months: 12,
                    ALPHA_CORE_CONTRACT: "0x79cBD28f91638B30Bdb93e02f48AAFb4E5d1d205",
                }
            ]
        }
    ]
}
