interface TableProps {
  fieldNameList: string[];
  /** 합이 1000px 이어야함 */
  fieldWidthList: string[];
  /** 필드명과 순서가 반드시 일치해야함 */
  content: Array<any>;
}

const Table = ({ fieldNameList, fieldWidthList, content }: TableProps) => {
  const content_keys = Object.keys(content[0]);
  return (
    <>
      <div className="table-container">
        <div className="table-header">
          {fieldNameList.map((name, idx) => (
            <div key={idx} className="category">
              {name}
            </div>
          ))}
        </div>
        {content.map((item, idx) => (
          <li key={idx} className="table-item">
            <div className="index">{idx + 1}</div>
            {content_keys.map((key) => (
              <div key={key}>{item[key]}</div>
            ))}
          </li>
        ))}
      </div>
      <style jsx>{`
        .table-container {
          width: 1000px;
        }

        .table-header {
          display: grid;
          grid-template-columns: ${fieldWidthList.join(' ')};
          align-items: center;

          height: 45px;
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 15px;
          color: #5c59f0;
        }

        .category {
          padding-left: 20px;
        }

        .table-item {
          list-style: none;
          margin: 0;
          margin-bottom: 10px;

          width: 1000px;
          height: 46px;
          display: grid;
          grid-template-columns: ${fieldWidthList.join(' ')};
          align-items: center;

          border: 1px solid rgba(92, 89, 240, 0.3);
          border-radius: 5px;
        }

        li div {
          font-size: 14px;
          font-weight: 400;
          line-height: 15px;
          color: #282828;
          padding-left: 20px;
        }

        li .index {
          padding: 0;
          padding-left: 30px;
        }
      `}</style>
    </>
  );
};

export default Table;
