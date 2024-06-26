import tokens from '@contentful/f36-tokens';

import { InfoTable } from './InfoTable/InfoTable';
import { GrayInfoBox } from '@components/common/GrayInfoBox/GrayInfoBox';
import { copies } from '@constants/copies';
import { TextLink, Paragraph, Box } from '@contentful/f36-components';
import { styles } from './InformationalTables.styles';
import { INFORMATIONAL_MODAL_COLUMN_WIDTH } from '@constants/styles';

type TableRow = {
  example: string;
  exampleTwo?: string;
  description: string;
};

const EXAMPLE_PROPERTY = '{entry.linkedBy}';

export const InformationalTables = () => {
  const { tableOne, tableTwo, tableTwoSubHeading } =
    copies.configPage.contentTypePreviewPathSection.exampleModal;
  const infoBoxCustomStyling = {
    width: INFORMATIONAL_MODAL_COLUMN_WIDTH,
    margin: `0 ${tokens.spacingXs}`,
  };

  const renderTableRows = (rows: TableRow[]) =>
    rows.map((row: TableRow) => ({
      example: (
        <>
          <GrayInfoBox rootStylingOptions={infoBoxCustomStyling} withCopy>
            {row.example}
          </GrayInfoBox>
          {row.exampleTwo && (
            <GrayInfoBox
              rootStylingOptions={{ ...infoBoxCustomStyling, marginTop: tokens.spacing2Xs }}
              withCopy>
              {row.exampleTwo}
            </GrayInfoBox>
          )}
        </>
      ),
      description: row.description,
    }));

  return (
    <Box>
      <InfoTable headers={tableOne.headers} rows={renderTableRows(tableOne.rows)} />

      <Paragraph className={styles.linkParagraph}>
        Additionally, you can query{' '}
        <TextLink
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
          href={tableTwoSubHeading.link.href}>
          incoming links to entry by
        </TextLink>{' '}
        using the {EXAMPLE_PROPERTY} property (the first entry in response will be used)
      </Paragraph>

      <InfoTable headers={tableTwo.headers} rows={renderTableRows(tableTwo.rows)} />
    </Box>
  );
};
