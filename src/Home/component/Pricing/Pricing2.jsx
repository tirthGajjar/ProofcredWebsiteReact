import React from 'react';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QueueAnim from 'rc-queue-anim';
import { Table, Switch, Tag } from 'antd';
import { getChildrenToRender, isImg } from './utils';

class Pricing2 extends React.PureComponent {
  getColumns = columns =>
    columns.map(item => {
      const { childWrapper, ...$item } = item;
      return {
        align: 'center',
        ...$item,
        title: <div {...childWrapper}>{childWrapper.children.map(getChildrenToRender)}</div>,
      };
    });

  getDataSource = (dataSource, columns) =>
    dataSource.map((item, i) => {
      const obj = { key: i.toString() };
      item.children.forEach(($item, ii) => {
        if (columns[ii]) {
          obj[columns[ii].key] = (
            <div {...$item}>
              {typeof $item.children === 'string' && $item.children.match(isImg) ? (
                <img src={$item.children} alt="img" />
              ) : (
                $item.children
              )}
            </div>
          );
        }
      });
      return obj;
    });

  getMobileChild = (table, isMonthlyPlan) => {
    const { columns, dataSource, ...tableProps } = table;
    const names = columns[isMonthlyPlan ? 'MONTHLY' : 'YEARLY'].filter(
      item => item.key.indexOf('name') >= 0,
    );
    const newColumns = columns[isMonthlyPlan ? 'MONTHLY' : 'YEARLY'].filter(
      item => item.key.indexOf('name') === -1,
    );
    return newColumns.map((item, i) => {
      const items = [].concat(names[0], item).filter(c => c);
      if (items.length > 1) {
        items[0].colSpan = 0;
        items[1].colSpan = 2;
      }
      const dataSources = dataSource.children.map($item => {
        const child = $item.children.filter(c => c.name.indexOf('name') === -1);
        const n = $item.children.filter(c => c.name.indexOf('name') >= 0);
        return {
          ...$item,
          children: [].concat(n[0], child[i]).filter(c => c),
        };
      });
      const props = {
        ...tableProps,
        columns: this.getColumns(items),
        dataSource: this.getDataSource(dataSources, items),
      };
      return <Table key={i.toString()} {...props} pagination={false} bordered />;
    });
  };

  onPlanChange(e) {
    this.props.onPlanChange();
  }

  render() {
    const { dataSource, isMobile, isMonthlyPlan, ...props } = this.props;
    const { Table: table, wrapper, page, titleWrapper } = dataSource;
    const { columns, dataSource: tableData, ...$table } = table;
    const tableProps = {
      ...$table,
      columns: isMonthlyPlan ? this.getColumns(columns.MONTHLY) : this.getColumns(columns.YEARLY),
      dataSource: this.getDataSource(tableData.children, columns.MONTHLY),
    };
    const childrenToRender = isMobile ? (
      this.getMobileChild(table, isMonthlyPlan)
    ) : (
      <Table key="table" {...tableProps} pagination={false} bordered />
    );
    return (
      <div {...props} {...wrapper}>
        <div {...page}>
          <OverPack {...dataSource.OverPack}>
            <QueueAnim
              type="bottom"
              leaveReverse
              ease={['easeOutQuad', 'easeInOutQuad']}
              key="content"
            >
              <div className="pricing2-pricing-plan-div">
                <span className="pricing2-pricing-plan-name">Monthly</span>
                <Switch
                  style={{ width: '50px' }}
                  checked={!isMonthlyPlan}
                  onChange={e => {
                    this.onPlanChange(e);
                  }}
                />
                <span className="pricing2-pricing-plan-name">Annual</span>
                <QueueAnim
                  className="demo-content"
                  key="demo"
                  type={['right', 'left']}
                  ease={['easeOutQuart', 'easeInOutQuart']}
                >
                  <span className="pricing-plan-save-span">
                    <Tag color="green" style={{ padding: '5px 10px' }}>
                      {isMonthlyPlan ? 'Save 20% Annually!' : 'Hurray, you are saving 20%!'}   
                    </Tag>
                  </span>                   
                </QueueAnim>
              </div>
              {childrenToRender}
            </QueueAnim>
          </OverPack>
        </div>
      </div>
    );
  }
}

export default Pricing2;
