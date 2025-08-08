//SPDX-License-Identifier: MIT

pragma solidity ^0.8.28;

contract FarmerRegistration {

    uint public userCount;

    struct FarmerDetails {

        uint farmerId;
        address farmerAddress;
        string farmerLocation;

    }

    mapping (address => FarmerDetails) public farmerProfile;

    event newFarmerRegistered(address indexed farmerAddress, uint farmerId);

    function registerFarmer (string memory _location) public {

        string memory _farmerLocation = _location;

        uint _farmerId = userCount;

        userCount++;

        require(farmerProfile[msg.sender].farmerId == 0, "You have already registered");     
        
        FarmerDetails memory _newFarmer = FarmerDetails(

            _farmerId,
            msg.sender,
            _farmerLocation
        );

        farmerProfile[msg.sender] = _newFarmer;

        emit newFarmerRegistered(msg.sender, _farmerId);
    }
    
    //set contract creator as first user

    constructor (string memory _location) {

        registerFarmer(_location);

    }

    function getFarmerDetails() public view returns(FarmerDetails memory) {

        return farmerProfile[msg.sender];
    }
}