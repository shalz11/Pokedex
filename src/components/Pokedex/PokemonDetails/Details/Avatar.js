const { defaults } = require("chart.js")

const Avatar = ({url,name})=>{
    return (
        <div className="bg-gray-200 rounded-xl p-4">
            <img src={url} alt={name} className="w-full h-full"/>
        </div>
    )
}

export default Avatar;