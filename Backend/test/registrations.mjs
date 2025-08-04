import { expect } from "chai";

let contract, Contract;

let signer, secondUser, thirdUser, fourthUser;

beforeEach(async () => {

    const signers = await hre.ethers.getSigners();

    [signer, secondUser, thirdUser, fourthUser] = signers;

    Contract = await hre.ethers.getContractFactory("FarmerRegistration");

    contract = await Contract.connect(signer).deploy("Lagos, Nigeria");


})


describe("Checking Registration Logic", () => {


    it("returns the details of the registered farmer", async () => {

        const details = await contract.connect(signer).getFarmerDetails();

        expect(details.farmerId).to.be.equal(0);
    });

    it("stops a user from registering multiple times", async () => {

        const newReg = await contract.connect(secondUser).registerFarmer("Zaria, Kaduna");

        await expect(contract.connect(secondUser).registerFarmer("Zaria, Kaduna")).to.be.revertedWith("You have already registered");

        
        await expect(contract.connect(secondUser).registerFarmer("Maitama, Abuja")).to.be.revertedWith("You have already registered");


        //second user
        const registered = await contract.connect(secondUser).getFarmerDetails();

        expect(registered.farmerId).to.be.equal(1);

        expect(registered.farmerAddress).to.be.equal(secondUser);

        //third user
        const thirdReg = await contract.connect(thirdUser).registerFarmer("Zaria, Kaduna");

        const thirdRegistered = await contract.connect(thirdUser).getFarmerDetails();

        expect(thirdRegistered.farmerId).to.be.equal(2);

        expect(thirdRegistered.farmerAddress).to.be.equal(thirdUser);
        
        await expect(contract.connect(thirdUser).registerFarmer("Zaria, Kaduna")).to.be.revertedWith("You have already registered");



    });


    it("can check if user is registered or not", async () => {

        const registered = await contract.connect(secondUser).getFarmerDetails();

       // console.log(registered);
    })
} )