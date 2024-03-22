//initial- not a great way to write a code
const RestCard = (props) => {
const { restinfo } = props;
return (

   <div>
      <p>{restinfo.info.costForTwo}</p>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
        <RestCard restinfo={restobj[0]} />
        <RestCard restinfo={restobj[1]} />
      </div>
    </div>
  );
};
