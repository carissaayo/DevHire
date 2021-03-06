import { useSelector } from "react-redux";
import User from "../User/User";
import "./UsersList.css";
const UsersList = ({}) => {
  let jobsState = useSelector((state) => state.jobs);

  const { data } = jobsState;
  return (
    <div className="userslist">
      {data &&
        data.map((item) => {
          const {
            avatar,
            cust_id,
            display_name,
            starting_from,
            service_photo,
          } = item._source;
          const newItem = {
            cust_id,
            avatar,
            display_name,
            starting_from,
            service_photo,
          };
          return <User newItem={newItem && newItem} key={cust_id} />;
        })}
    </div>
  );
};

export default UsersList;
