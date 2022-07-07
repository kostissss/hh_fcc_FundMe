const { network } = require("hardhat")
const {
    developmentChain,
    DECIMALS,
    INITIAL_ANSWER,
    networkConfig,
} = require("../helper-hardhat-config.js")
module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()

    if (developmentChain.includes(network.name)) {
        log("Local network detected!Depoloying mocks...")
        await deploy("MockV3Aggregator", {
            contract: "MockV3Aggregator",
            from: deployer,
            log: true,
            args: [DECIMALS, INITIAL_ANSWER],
        })
        log("Mocks deployed!")
        log(
            "----------------------------------------------------------------------------"
        )
    }
}
module.exports.tags = ["all", "mocks"]
