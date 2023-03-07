import React, { useEffect, useMemo } from 'react'

import Page from 'components/Page'
import DataGrid from 'components/DataGrid'

const MENU_ID = Device.getUrlParameters('menuId') || ''

const ProductList = () => {

  useEffect(() => {

  }, []) // eslint-disable-line

  const columns = useMemo(
    () => {
      const cols = [
        {
          dataIndex: '',
          field: '',
          title: '',
          ellipsis: true,
          default: true,
          width: 140
        }
      ]

      return cols
    },
    []
  )

  return (
    <Page>
      <Page.Content>
        <Page.DataGrid menuId={MENU_ID} tableId={MENU_ID} columns={columns}>
          <DataGrid 
            bordered
            pagination
            enableResizable
            url=""
            queryParams={{}}
          />
        </Page.DataGrid>
      </Page.Content>
    </Page>
  )
}

export default ProductList