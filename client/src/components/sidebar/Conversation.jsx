
const Conversation = () => {
  return (
    <>
      <div className="flex gap-2 items-center hover:bg-purple-400 rounded p-2 py-1 cursor-pointer">
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img src="https://static.vecteezy.com/system/resources/thumbnails/005/129/844/small_2x/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg" alt="user-avaatr" />
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-medium text-black ">Aiman Fatima</p>
            <span className="text-xl">😍</span>
          </div>
        </div>
      </div>

      <div className="divider my-0 py-0 h-1 " />
    </>
  )
}

export default Conversation