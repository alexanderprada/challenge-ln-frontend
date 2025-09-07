import Text from "../../../text";
import type { ListCategoryProps } from "../../types/list-category-props";
import CategorySeparator from "../category-separator";
const ListCategory = ({
  list,
  title,
  withSeparator = true,
  itemWeight = "bold",
  titleWeight = "regular"
}: ListCategoryProps) => {
  return (
    <div className="flex flex-row flex-wrap items-center gap-2">
      {title && <Text weight={titleWeight}>{title}</Text>}
      {list.map((category, index) => (
        <>
          <a href={category.link} title={category.text}>
            <Text weight={itemWeight} color="lightBlue500">
              {category.text}
            </Text>
          </a>

          {withSeparator && index < list.length - 1 && <CategorySeparator />}
        </>
      ))}
    </div>
  );
};

export default ListCategory;
