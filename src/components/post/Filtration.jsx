import { Input } from "../common";

const Filtration = ({onSearch, searchQuery}) => {
  return (
    <div>
      <Input
        onChange={onSearch}
        value={searchQuery}
        placeholder={'Search by title...'}
      />
    </div>
  );
}

export default Filtration;
