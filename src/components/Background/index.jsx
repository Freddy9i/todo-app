export default function Background() {
  return (
    <>
      <img 
        src="/src/images/bg-mobile-light.jpg"
        className=" h-[11.55rem] w-screen object-cover"
      />
      <div className="bg-gray-100 h-[calc(100vh-11.55rem)]"></div>
    </>
  );
}
