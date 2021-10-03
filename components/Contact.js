// import { Map, GoogleApiWrapper } from "google-maps-react";
import GoogleMapReact from "google-map-react";
import LocationPin from "./map/LocationPin";

const Contact = () => {
  const defaultProps = {
    center: { lat: 59.95, lng: 30.33 },
    zoom: 11,
  };

  return (
    <div className="flex flex-col py-10 px-28 sm:flex-row">
      <div className="flex-1 ">
        <div className="flex justify-center pl-4 text-3xl font-bold">
          CONTACT US
        </div>
        <form className="flex flex-col gap-5 px-20 py-10">
          <input
            className="w-full h-10 tracking-widest text-center text-gray-500 bg-gray-100 rounded-lg"
            type="text"
            placeholder="NAME OF STUDENT"
          />
          <input
            className="w-full h-10 tracking-widest text-center text-gray-500 bg-gray-100 rounded-lg"
            type="email"
            placeholder="E-MAIL ADDRESS"
          />
          <input
            className="w-full h-10 tracking-widest text-center text-gray-500 bg-gray-100 rounded-lg"
            type="number"
            placeholder="CONTACT NUMBER"
          />
          <button type="submit" className="h-10 py-1 bg-blue-300 rounded-lg">
            Submit
          </button>
        </form>
      </div>
      <div className="flex-1">
        <div className="flex justify-center text-3xl font-bold">Map</div>
        <div className="flex justify-center h-64 w-96">
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyDHBAzHeOVt096rbPOn3eGsOnUEHDTgN04",
            }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          >
            <LocationPin
              lat={59.955413}
              lng={30.337844}
              text={"Kreyser Avrora"}
            />
          </GoogleMapReact>
        </div>
      </div>
    </div>
  );
};

// export default GoogleApiWrapper({
//   apiKey: "AIzaSyDFRn-CtcZY1OYEo-qj4z126ek-GakiLYY",
// })(Maps);

export default Contact;
