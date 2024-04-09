import {
  HoverCard,
  Group,
  Button,
  UnstyledButton,
  Text,
  SimpleGrid,
  ThemeIcon,
  Anchor,
  Divider,
  Center,
  Box,
  Burger,
  Drawer,
  Collapse,
  ScrollArea,
  rem,
  useMantineTheme,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
  IconChevronDown,
} from '@tabler/icons-react';
import { BiBookOpen } from "react-icons/bi";
import { BsHeadphones } from "react-icons/bs";
import { BsPenFill } from "react-icons/bs";
import { BsFillMicFill } from "react-icons/bs";
import { AiFillQuestionCircle } from "react-icons/ai";
import classes from '../styles/Header.module.css';
import {Link} from "react-router-dom";

const mockdata = [
  {
    icon: BsHeadphones,
    title: 'Listening Test',
    description: 'Test your listening skills with a variety of question types. For eg: Diagram Completion or Summary Completion.',
    url: '/listening-test',
  },
  {
    icon: BiBookOpen,
    title: 'Reading Test',
    description: 'Test your listening skills with a variety of question types that will be based on the reading passage. For eg: Table Completion or Note Completion.',
    url: '/reading-test',
  },
  {
    icon: BsPenFill,
    title: 'Writing Test',
    description: 'Test your writing skills by writing essays and reports.',
    url: '/writing-test',
  },
  {
    icon: BsFillMicFill,
    title: 'Speaking Test',
    description: 'Test your speaking skills by recording you speaking session with the given question cards.',
    url: '/speaking-test',
  },
  {
    icon: AiFillQuestionCircle,
    title: 'Listening Questions',
    description: 'Test your listening skills for each question type using stand alone questions.',
    url: '/listening-questions',
  },
  {
    icon: AiFillQuestionCircle,
    title: 'Reading Questions',
    description: 'Test your reading skills for each question type using stand alone questions.',
    url: '/reading-questions',
  }
];

export default function HeaderMegaMenu() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const theme = useMantineTheme();

  const links = mockdata.map((item) => (
    <UnstyledButton className={classes.subLink} key={item.title}>
      <Group wrap="nowrap" align="flex-start">
        <ThemeIcon size={34} variant="default" radius="md">
          <item.icon style={{ width: rem(22), height: rem(22) }} color={theme.colors.blue[6]} />
        </ThemeIcon>
        <Link to={item.url}>
          <Text size="sm" fw={500}>
            {item.title}
          </Text>
          <Text size="xs" c="dimmed">
            {item.description}
          </Text>
        </Link>
      </Group>
    </UnstyledButton>
  ));

  return (
    <Box pb={60}>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <Text size="xl">IELTS Simulator</Text>
          <Group h="100%" gap={0} visibleFrom="sm">
            <Link to="/" className={classes.link}>
              Home
            </Link>
            <HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
              <HoverCard.Target>
                <a href="#" className={classes.link}>
                  <Center inline>
                    <Box component="span" mr={5}>
                      Practice
                    </Box>
                    <IconChevronDown
                      style={{ width: rem(16), height: rem(16) }}
                      color={theme.colors.blue[6]}
                    />
                  </Center>
                </a>
              </HoverCard.Target>

              <HoverCard.Dropdown style={{ overflow: 'hidden' }}>

                <SimpleGrid cols={2} spacing={0}>
                  {links}
                </SimpleGrid>

              </HoverCard.Dropdown>
            </HoverCard>
          </Group>

          <Group visibleFrom="sm">
            <Button variant="default">Log in</Button>
            <Button>Sign up</Button>
          </Group>

          <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
          <Divider my="sm" />

          <Link to="#" className={classes.link}>
            Home
          </Link>
          <UnstyledButton className={classes.link} onClick={toggleLinks}>
            <Center inline>
              <Box component="span" mr={5}>
                Practice
              </Box>
              <IconChevronDown
                style={{ width: rem(16), height: rem(16) }}
                color={theme.colors.blue[6]}
              />
            </Center>
          </UnstyledButton>
          <Collapse in={linksOpened}>{links}</Collapse>
          <a href="#" className={classes.link}>
            Learn
          </a>
          <a href="#" className={classes.link}>
            Academy
          </a>

          <Divider my="sm" />

          <Group justify="center" grow pb="xl" px="md">
            <Button variant="default">Log in</Button>
            <Button>Sign up</Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}