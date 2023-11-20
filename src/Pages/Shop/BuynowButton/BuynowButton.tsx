
interface LineitemData {
    data:any
}

const BuynowButton = ({data}:LineitemData) => {
    const newLineItem=new Array()
    newLineItem.push(data)
    

    

    const checkout = () => {
        fetch("http://localhost:5000/create-checkout-session", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            mode: "cors",
            body: JSON.stringify({
                items:newLineItem
            })
        })
            .then(res => {
                if (res.ok) return res.json()
                return res.json().then(json => Promise.reject(json))
            })
            .then(({ url }) => {
                window.location = url
            })
            .catch(e => {
                console.log(e.error)
            })
    }

    return (
        <button onClick={checkout} className="addRightNowButton" >Buy Now</button>

    );
};

export default BuynowButton