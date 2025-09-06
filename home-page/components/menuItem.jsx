const MenuItem = ({ icon: Icon, text }) => {
    return (
        <div className="bg-[#F2F3F7] flex items-center gap-2 py-1 px-2 rounded-full">
            <Icon className="bg-white p-1 rounded-full w-6 h-6" />
            <p>{text}</p>
        </div>
    )
}

export default MenuItem;