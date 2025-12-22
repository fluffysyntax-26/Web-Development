function fetchUserData() { 
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({name: "Deepak", url: "https://black-fourteen.com"})
        }, 3000); 
    })
}

async function getUserData() {
    try {
        console.log("Fetching User data...")
        const userData = await fetchUserData()
        console.log("User data: ", userData); 
        console.log("User data fetched successfully")
    } catch (error) {
        console.lo("Error fetching data", error); 
    }
}

getUserData()