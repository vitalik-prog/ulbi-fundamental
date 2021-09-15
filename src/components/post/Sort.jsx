import { Select } from "../common";

const Sort = ({selectedSort, handleSortPosts}) => {
  return (
    <div>
      <Select
        defaultValue={'Sort by'}
        options={[
          {value: 'title', name: 'Title'},
          {value: 'body', name: 'Body'},
        ]}
        value={selectedSort}
        onHandleChange={handleSortPosts}
      />
    </div>
  );
}

export default Sort;
