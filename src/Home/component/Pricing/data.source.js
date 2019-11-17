import React from 'react';

export const Pricing20DataSource = {
  wrapper: { className: 'home-page-wrapper pricing2-wrapper' },
  page: { className: 'home-page pricing2' },
  OverPack: { playScale: 0.3, className: 'pricing2-content-wrapper' },
  titleWrapper: {
    className: 'pricing2-title-wrapper',
    children: [
      {
        name: 'title',
        children: 'Choose your Pricing Plan',
        className: 'pricing2-title-h1',
      },
      {
        name: 'title',
        children: 'Choose your Pricing Plan',
        className: 'pricing2-title-h1',
      },
    ],
  },
  Table: {
    name: 'tabsTitle',
    size: 'default',
    className: 'pricing2-table',
    columns: {
      children: [
        {
          dataIndex: 'name',
          key: 'name',
          name: 'empty',
          childWrapper: {
            children: [
              { name: 'name', children: ' ' },
              { name: 'content', children: ' ' },
            ],
          },
        },
        {
          dataIndex: 'free',
          key: 'free',
          name: 'free',
          childWrapper: {
            className: 'pricing2-table-name-block',
            children: [
              {
                name: 'name',
                className: 'pricing2-table-name',
                children: (
                  <span>
                    <p>Individual</p>
                  </span>
                ),
              },
              {
                name: 'content',
                className: 'pricing2-table-money',
                children: (
                  <div className="pricing2-table-price">
                    <span className="pricing2-table-currency">$</span>
                    <span className="pricing2-table-amount">9</span>
                    <div>Per Month</div>
                  </div>
                ),
              },
            ],
          },
        },
        {
          dataIndex: 'basic',
          key: 'basic',
          name: 'basic',
          childWrapper: {
            className: 'pricing2-table-name-block',
            children: [
              {
                name: 'name',
                className: 'pricing2-table-name',
                children: (
                  <span>
                    <p>Start Up</p>
                  </span>
                ),
              },
              {
                name: 'content',
                className: 'pricing2-table-money',
                children: (
                  <div className="pricing2-table-price">
                    <span className="pricing2-table-currency">$</span>
                    <span className="pricing2-table-amount">29</span>
                    <div>Per Month</div>
                  </div>
                ),
              },
            ],
          },
        },
        {
          dataIndex: 'pro',
          key: 'pro',
          name: 'pro',
          childWrapper: {
            className: 'pricing2-table-name-block',
            children: [
              {
                name: 'name',
                className: 'pricing2-table-name',
                children: (
                  <span>
                    <p>Business</p>
                  </span>
                ),
              },
              {
                name: 'content',
                className: 'pricing2-table-money',
                children: (
                  <div className="pricing2-table-price">
                    <span className="pricing2-table-currency">$</span>
                    <span className="pricing2-table-amount">59</span>
                    <div>Per Month</div>
                  </div>
                ),
              },
            ],
          },
        },
      ],
    },
    dataSource: {
      children: [
        {
          name: 'list0',
          children: [
            {
              className: 'pricing2-table-content-name',
              name: 'name',
              children: (
                <span>
                  <p>Removable Branding</p>
                </span>
              ),
            },
            {
              children:
                'https://gw.alipayobjects.com/zos/basement_prod/14ce3060-34e6-4b30-9a45-1a6b95542310.svg',
              name: 'content0',
              className: 'pricing2-table-content',
            },
            {
              children:
                'https://gw.alipayobjects.com/zos/basement_prod/14ce3060-34e6-4b30-9a45-1a6b95542310.svg',
              name: 'content1',
              className: 'pricing2-table-content',
            },
            {
              children:
                'https://gw.alipayobjects.com/zos/basement_prod/14ce3060-34e6-4b30-9a45-1a6b95542310.svg',
              name: 'content2',
              className: 'pricing2-table-content',
            },
          ],
        },
        {
          name: 'list1',
          children: [
            {
              className: 'pricing2-table-content-name',
              name: 'name',
              children: (
                <span>
                  <p>Custom Branding</p>
                </span>
              ),
            },
            {
              children: '-',
              name: 'content0',
              className: 'pricing2-table-content',
            },
            {
              children:
                'https://gw.alipayobjects.com/zos/basement_prod/14ce3060-34e6-4b30-9a45-1a6b95542310.svg',
              name: 'content1',
              className: 'pricing2-table-content',
            },
            {
              children:
                'https://gw.alipayobjects.com/zos/basement_prod/14ce3060-34e6-4b30-9a45-1a6b95542310.svg',
              name: 'content2',
              className: 'pricing2-table-content',
            },
          ],
        },
        {
          name: 'list2',
          children: [
            {
              className: 'pricing2-table-content-name',
              name: 'name',
              children: (
                <span>
                  <p>Campaigns</p>
                </span>
              ),
            },
            {
              name: 'content0',
              children: (
                <span>
                  <p className="pricing2-table-campaign-limit">3</p>
                </span>
              ),
              className: 'pricing2-table-content',
            },
            {
              name: 'content1',
              children: (
                <span>
                  <p className="pricing2-table-campaign-limit">20</p>
                </span>
              ),
              className: 'pricing2-table-content',
            },
            {
              name: 'content2',
              children: (
                <span>
                  <p className="pricing2-table-campaign-limit">1000</p>
                </span>
              ),
              className: 'pricing2-table-content',
            },
          ],
        },
        {
          name: 'list3',
          children: [
            {
              className: 'pricing2-table-content-name',
              name: 'name',
              children: (
                <span>
                  <p>Notifications</p>
                </span>
              ),
            },
            {
              children: '10',
              name: 'content0',
              className: 'pricing2-table-content',
            },
            {
              name: 'content1',
              children: '60',
              className: 'pricing2-table-content',
            },
            {
              name: 'content2',
              children: 'Unlimited',
              className: 'pricing2-table-content',
            },
          ],
        },
        {
          name: 'list4',
          children: [
            {
              className: 'pricing2-table-content-name',
              name: 'name',
              children: (
                <span>
                  <p>Notification Impression</p>
                </span>
              ),
            },
            {
              name: 'content0',
              children: '2000',
              className: 'pricing2-table-content',
            },
            {
              name: 'content1',
              children: '15000',
              className: 'pricing2-table-content',
            },
            {
              name: 'content2',
              children: 'Unlimited',
              className: 'pricing2-table-content',
            },
          ],
        },
      ],
    },
  },
};
