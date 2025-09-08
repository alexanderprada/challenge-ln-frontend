import Text from "../../../text";
import type { ListCategoryProps } from "../../types/list-category-props";
import ItemSeparator from "../../../item-separator";
const ListCategory = ({
  list,
  title,
  withSeparator = true,
  itemWeight = "bold",
  titleWeight = "regular"
}: ListCategoryProps) => {
  return (
    <div
      data-testid={`list-${title}`}
      role="navigation"
      className="flex flex-row flex-wrap items-center gap-2"
    >
      {title && <Text weight={titleWeight}>{title}</Text>}
      {list.map((category, index) => (
        <>
          <a href={category.link} title={category.text}>
            <Text weight={itemWeight} color="lightBlue500">
              {category.text}
            </Text>
          </a>

          {withSeparator && index < list.length - 1 && <ItemSeparator />}
        </>
      ))}
    </div>
  );
};

export default ListCategory;
