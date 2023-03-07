import React, { useEffect, useMemo } from 'react'

import locale from 'locale'

import Page from 'components/Page'
import DataGrid from 'components/DataGrid'

import Device from 'utils/Device'

const MENU_ID = Device.getUrlParameters('menuId') || ''

const {{PageName}} = () => {

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

export default {{PageName}}